"use client";

import { ChangeEvent, FormEvent, useEffect, useId, useRef, useState } from "react";
import Script from "next/script";
import { indiaLocations, indianStates } from "@/data/indiaLocations";
import { products } from "@/data/products";
import { siteConfig } from "@/data/siteConfig";
import { businessTypeOptions } from "@/lib/constants";
import { initialEnquiryValues, validateEnquiryForm } from "@/lib/form";
import { EnquiryFormValues, EnquirySubmissionPayload } from "@/types/enquiry";
import { Button } from "@/components/ui/Button";

type Errors = Partial<Record<keyof EnquiryFormValues, string>>;

const additionalProductGroups = [
  { label: "Pulses", items: ["Toor Dal", "Moong Dal", "Chana Dal", "Urad Dal", "Whole Chana"] },
  { label: "Cereals / Grains", items: ["Rice", "Poha (Flattened Rice)", "Idli Rava", "Puffed Rice"] },
  { label: "Secondary Staples", items: ["Roasted Peanuts", "Soya Chunks / Meal Maker"] }
];

export function EnquiryForm() {
  const [values, setValues] = useState<EnquiryFormValues>(initialEnquiryValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const formStartedAt = useRef(Date.now());
  const honeypotId = useId();
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
  const hasTurnstile = Boolean(turnstileSiteKey);
  const cityOptions = values.state ? indiaLocations[values.state] ?? [] : [];

  useEffect(() => {
    const listener = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      setValues((current) => ({
        ...current,
        productRequirement: customEvent.detail || current.productRequirement,
        otherProductRequirement: customEvent.detail ? "" : current.otherProductRequirement
      }));
      setErrors((current) => ({ ...current, productRequirement: undefined, otherProductRequirement: undefined }));
    };

    document.addEventListener("prefill-enquiry", listener);
    return () => document.removeEventListener("prefill-enquiry", listener);
  }, []);

  useEffect(() => {
    const windowWithTurnstile = window as Window & {
      onTurnstileSuccess?: (token: string) => void;
      onTurnstileExpired?: () => void;
    };

    windowWithTurnstile.onTurnstileSuccess = (token: string) => setTurnstileToken(token);
    windowWithTurnstile.onTurnstileExpired = () => setTurnstileToken("");

    return () => {
      delete windowWithTurnstile.onTurnstileSuccess;
      delete windowWithTurnstile.onTurnstileExpired;
    };
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    if (name === "state") {
      setValues((current) => ({ ...current, state: value, city: "" }));
      setErrors((current) => ({ ...current, state: undefined, city: undefined }));
      return;
    }

    if (name === "productRequirement") {
      setValues((current) => ({ ...current, productRequirement: value, otherProductRequirement: "" }));
      setErrors((current) => ({ ...current, productRequirement: undefined, otherProductRequirement: undefined }));
      return;
    }

    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateEnquiryForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      setMessage("Please review the highlighted fields and try again.");
      return;
    }

    if (hasTurnstile && !turnstileToken) {
      setStatus("error");
      setMessage("Please complete the captcha before submitting.");
      return;
    }

    try {
      setStatus("submitting");
      setMessage("");

      const formData = new FormData(event.currentTarget);
      const payload: EnquirySubmissionPayload = {
        ...values,
        website: String(formData.get("website") || ""),
        formStartedAt: formStartedAt.current,
        turnstileToken
      };

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        let errorMessage = `Submission failed with status ${response.status}.`;

        try {
          const contentType = response.headers.get("content-type") || "";

          if (contentType.includes("application/json")) {
            const payload = (await response.json()) as {
              error?: string;
              message?: string;
              errors?: Array<{ message?: string }>;
            };

            errorMessage =
              payload.error ||
              payload.message ||
              payload.errors?.map((item) => item.message).filter(Boolean).join(" ") ||
              errorMessage;
          } else {
            const text = (await response.text()).trim();
            if (text) errorMessage = text;
          }
        } catch {
          // Keep the fallback status-based message if the error payload cannot be parsed.
        }

        throw new Error(errorMessage);
      }

      const result = (await response.json()) as { confirmationSent?: boolean };
      setValues(initialEnquiryValues);
      setErrors({});
      setTurnstileToken("");
      formStartedAt.current = Date.now();
      setStatus("success");
      setMessage(result.confirmationSent === false
        ? "Thank you. Your enquiry has been received, but we could not send a confirmation email. Our team will contact you shortly."
        : "Thank you. Your enquiry has been received. Our team will contact you shortly.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong while sending your enquiry. Please try again."
      );
    }
  };

  const fieldClassName =
    "focus-ring mt-1.5 w-full rounded-2xl border border-[var(--border)] bg-white/70 px-3.5 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)]";
  const fallbackMailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    "New Pure Select business enquiry"
  )}`;

  const productOptions = products.map((product) => ({
    value: product.name,
    label: `${product.name} (${product.localName})`
  }));

  return (
    <form onSubmit={handleSubmit} className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-[20px] border border-[rgba(18,53,36,0.1)] bg-[rgba(255,250,240,0.72)] p-4 text-sm text-[var(--foreground)] sm:col-span-2 xl:col-span-4">
        <p className="font-semibold text-[var(--foreground)]">Prefer a direct conversation?</p>
        <p className="mt-1 leading-6 text-[var(--muted)]">
          You can still send this form here, or reach Pure Select instantly over WhatsApp and email.
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <Button href={siteConfig.whatsappLink} target="_blank" rel="noreferrer" className="w-full sm:w-fit">
            Contact on WhatsApp
          </Button>
          <Button href={fallbackMailto} variant="secondary" className="w-full sm:w-fit">
            Email Directly
          </Button>
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor={honeypotId}>Website</label>
        <input id={honeypotId} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Field label="Full Name *" error={errors.fullName}>
        <input name="fullName" value={values.fullName} onChange={handleChange} className={fieldClassName} />
      </Field>
      <Field label="Organization / Business Name *" error={errors.organization}>
        <input name="organization" value={values.organization} onChange={handleChange} className={fieldClassName} />
      </Field>
      <Field label="Mobile Number *" error={errors.mobileNumber}>
        <input
          name="mobileNumber"
          value={values.mobileNumber}
          onChange={handleChange}
          className={fieldClassName}
          inputMode="numeric"
          placeholder="7207085910"
        />
      </Field>
      <Field label="Email Address *" error={errors.email}>
        <input name="email" type="email" value={values.email} onChange={handleChange} className={fieldClassName} />
      </Field>
      <Field label="State / Union Territory *" error={errors.state}>
        <select name="state" value={values.state} onChange={handleChange} className={fieldClassName}>
          <option value="">Select a state or union territory</option>
          {indianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </Field>
      <Field label="City / Town *" error={errors.city}>
        <select
          name="city"
          value={values.city}
          onChange={handleChange}
          className={fieldClassName}
          disabled={!values.state}
        >
          <option value="">{values.state ? "Select a city or town" : "Choose a state first"}</option>
          {cityOptions.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Village / Locality" error={errors.village}>
        <input
          name="village"
          value={values.village}
          onChange={handleChange}
          className={fieldClassName}
          placeholder="Enter village or locality name"
        />
      </Field>
      <Field label="Business Type *" error={errors.businessType}>
        <select name="businessType" value={values.businessType} onChange={handleChange} className={fieldClassName}>
          {businessTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Exact Address *" error={errors.exactAddress} className="sm:col-span-2 xl:col-span-4">
        <input
          name="exactAddress"
          value={values.exactAddress}
          onChange={handleChange}
          className={fieldClassName}
          placeholder="Door number, street, landmark, area, pincode"
        />
      </Field>
      <Field label="Product Requirement *" error={errors.productRequirement}>
        <select
          name="productRequirement"
          value={values.productRequirement}
          onChange={handleChange}
          className={fieldClassName}
        >
          <option value="">Select a product</option>
          {productOptions.map((product) => (
            <option key={product.value} value={product.value}>
              {product.label}
            </option>
          ))}
          {additionalProductGroups.map((group) => (
            <optgroup key={group.label} label={group.label}>
              {group.items.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </optgroup>
          ))}
          <option value="Other">OTHER</option>
        </select>
      </Field>
      {values.productRequirement === "Other" ? (
        <Field label="Other" error={errors.otherProductRequirement}>
          <input
            name="otherProductRequirement"
            value={values.otherProductRequirement}
            onChange={handleChange}
            className={fieldClassName}
            placeholder="Please specify other"
            maxLength={120}
            aria-required="true"
            aria-invalid={Boolean(errors.otherProductRequirement)}
          />
        </Field>
      ) : null}
      <Field label="Estimated Quantity Required *" error={errors.estimatedQuantity}>
        <input
          name="estimatedQuantity"
          value={values.estimatedQuantity}
          onChange={handleChange}
          className={fieldClassName}
          placeholder="500kg"
        />
      </Field>
      <Field
        label="Requirement Description"
        error={errors.requirementDescription}
        className="sm:col-span-2 xl:col-span-4"
      >
        <textarea
          name="requirementDescription"
          value={values.requirementDescription}
          onChange={handleChange}
          className={`${fieldClassName} min-h-14 resize-y`}
          placeholder="Optional notes about pack sizes or delivery expectations."
        />
      </Field>
      {hasTurnstile ? (
        <div className="sm:col-span-2 xl:col-span-4">
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="afterInteractive"
            onError={() => {
              setStatus("error");
              setMessage("Captcha could not be loaded. Please refresh the page or try again later.");
            }}
          />
          <div
            className="cf-turnstile"
            data-sitekey={turnstileSiteKey}
            data-theme="light"
            data-callback="onTurnstileSuccess"
            data-expired-callback="onTurnstileExpired"
          />
        </div>
      ) : null}
      <div className="sm:col-span-2 flex flex-col gap-2 xl:col-span-4">
        <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-fit">
          {status === "submitting" ? "Sending enquiry..." : "Submit Enquiry"}
        </Button>
        {message ? (
          <p
            className={`text-sm ${status === "success" ? "text-[var(--foreground)]" : "text-[var(--earth)]"}`}
            aria-live="polite"
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className
}: Readonly<{ label: string; error?: string; children: React.ReactNode; className?: string }>) {
  return (
    <label className={className}>
      <span className="text-[13px] font-semibold text-[var(--foreground)]">{label}</span>
      {children}
      {error ? (
        <span className="mt-1.5 block text-[13px] text-[var(--earth)]" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
