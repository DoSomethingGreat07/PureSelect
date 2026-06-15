import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { enquirySchema, sanitizeEnquiryValues } from "@/lib/form";
import { EnquirySubmissionPayload } from "@/types/enquiry";

export const runtime = "nodejs";

const MIN_SUBMISSION_MS = 4000;

function getSmtpTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass
    }
  });
}

async function verifyTurnstile(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) return true;

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      secret,
      response: token
    })
  });

  if (!response.ok) return false;

  const result = (await response.json()) as { success?: boolean };
  return Boolean(result.success);
}

function buildMessage(values: ReturnType<typeof sanitizeEnquiryValues>) {
  const rows = [
    ["Full Name", values.fullName],
    ["Organization", values.organization],
    ["Mobile Number", values.mobileNumber],
    ["Email", values.email],
    ["State / UT", values.state],
    ["City / Town", values.city],
    ["Village / Locality", values.village || "Not provided"],
    ["Exact Address", values.exactAddress],
    ["Business Type", values.businessType],
    ["Product Requirement", values.productRequirement],
    ["Estimated Quantity", values.estimatedQuantity],
    ["Requirement Description", values.requirementDescription]
  ];

  const text = [
    "New Pure Select Business Enquiry",
    "",
    `Reply directly to this email to respond to: ${values.email}`,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`)
  ].join("\n");
  const html = `
    <div style="font-family: Arial, sans-serif; color: #163825; max-width: 720px; margin: 0 auto; background: #fffaf0; border: 1px solid #e7dcc7; border-radius: 24px; overflow: hidden;">
      <div style="padding: 28px 28px 18px; background: linear-gradient(135deg, #123524 0%, #1f5436 100%); color: #fffaf0;">
        <p style="margin: 0; font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase; opacity: 0.8;">Pure Select</p>
        <h2 style="margin: 10px 0 0; font-size: 28px; line-height: 1.15;">New business enquiry received</h2>
      </div>
      <div style="padding: 28px;">
        <div style="margin: 0 0 20px; padding: 16px 18px; background: #f6f0e4; border-radius: 18px;">
          <p style="margin: 0 0 8px; font-weight: 700;">Primary Contact</p>
          <p style="margin: 0 0 6px;">Customer: ${values.fullName}</p>
          <p style="margin: 0 0 6px;">Email: <a href="mailto:${values.email}" style="color: #163825;">${values.email}</a></p>
          <p style="margin: 0;">Phone: <a href="tel:${values.mobileNumber}" style="color: #163825;">${values.mobileNumber}</a></p>
        </div>
        <p style="margin: 0 0 14px; line-height: 1.7;">Use reply in your inbox to respond directly to the customer. A confirmation email has also been sent to them automatically.</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding: 10px 12px; border: 1px solid #dcd4c4; font-weight: 700; width: 220px;">${label}</td>
                  <td style="padding: 10px 12px; border: 1px solid #dcd4c4;">${value}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
        </table>
      </div>
    </div>
  `;

  return { text, html };
}

function buildCustomerConfirmation(values: ReturnType<typeof sanitizeEnquiryValues>) {
  const subject = "We received your Pure Select enquiry";
  const summaryRows = [
    ["Full Name", values.fullName],
    ["Organization", values.organization],
    ["Mobile Number", values.mobileNumber],
    ["Email", values.email],
    ["State / UT", values.state],
    ["City / Town", values.city],
    ["Village / Locality", values.village || "Not provided"],
    ["Exact Address", values.exactAddress],
    ["Business Type", values.businessType],
    ["Product Requirement", values.productRequirement],
    ["Estimated Quantity", values.estimatedQuantity],
    ["Requirement Description", values.requirementDescription]
  ];
  const text = [
    `Hi ${values.fullName},`,
    "",
    "Thank you for reaching out to Pure Select.",
    "We have received your business enquiry and our team will review it shortly.",
    "",
    "Here is a summary of the information you submitted:",
    "",
    ...summaryRows.map(([label, value]) => `${label}: ${value}`),
    "",
    "If you need to share anything urgent, reply to this email or contact us on WhatsApp.",
    "",
    "Regards,",
    "Pure Select",
    "care@pureselect.in",
    "+91 72070 85910"
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #163825; max-width: 640px; margin: 0 auto; background: #fffaf0; border: 1px solid #e7dcc7; border-radius: 24px; overflow: hidden;">
      <div style="padding: 28px 28px 18px; background: linear-gradient(135deg, #123524 0%, #1f5436 100%); color: #fffaf0;">
        <p style="margin: 0; font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase; opacity: 0.8;">Pure Select</p>
        <h2 style="margin: 10px 0 0; font-size: 28px; line-height: 1.15;">Your enquiry has been received</h2>
      </div>
      <div style="padding: 28px;">
        <p style="margin: 0 0 14px;">Hi ${values.fullName},</p>
        <p style="margin: 0 0 14px; line-height: 1.7;">
          Thank you for reaching out to Pure Select. We have received your enquiry and our team will get back to you soon.
        </p>
        <div style="margin: 20px 0; padding: 18px 20px; background: #f6f0e4; border-radius: 18px;">
          <p style="margin: 0 0 14px; font-weight: 700;">Enquiry Summary</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tbody>
              ${summaryRows
                .map(
                  ([label, value]) => `
                    <tr>
                      <td style="padding: 8px 0; vertical-align: top; font-weight: 700; width: 180px;">${label}</td>
                      <td style="padding: 8px 0; vertical-align: top;">${value}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
        <p style="margin: 0 0 14px; line-height: 1.7;">
          If you have anything urgent to add, you can simply reply to this email and our team will review it with your request.
        </p>
        <p style="margin: 20px 0 0;">Regards,<br />Pure Select<br />care@pureselect.in<br />+91 72070 85910</p>
      </div>
    </div>
  `;

  return { subject, text, html };
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as EnquirySubmissionPayload;

    if (payload.website?.trim()) {
      return NextResponse.json({ message: "Submission rejected." }, { status: 400 });
    }

    if (!payload.formStartedAt || Date.now() - payload.formStartedAt < MIN_SUBMISSION_MS) {
      return NextResponse.json({ message: "Please wait a moment before submitting the form." }, { status: 400 });
    }

    const parsed = enquirySchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Validation failed.",
          errors: parsed.error.issues.map((issue) => ({
            field: issue.path[0],
            message: issue.message
          }))
        },
        { status: 400 }
      );
    }

    if (process.env.TURNSTILE_SECRET_KEY) {
      if (!payload.turnstileToken) {
        return NextResponse.json({ message: "Captcha verification is required." }, { status: 400 });
      }

      const isValidCaptcha = await verifyTurnstile(payload.turnstileToken);
      if (!isValidCaptcha) {
        return NextResponse.json({ message: "Captcha verification failed. Please try again." }, { status: 400 });
      }
    }

    const transport = getSmtpTransport();

    if (!transport) {
      return NextResponse.json(
        {
          message: "SMTP is not configured. Add SMTP env values in .env.local before using the enquiry form."
        },
        { status: 500 }
      );
    }

    const to = process.env.ENQUIRY_TO_EMAIL || process.env.SMTP_USER;
    const from = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;

    if (!to || !from) {
      return NextResponse.json(
        {
          message: "Recipient email is missing. Add ENQUIRY_TO_EMAIL or SMTP_USER in .env.local."
        },
        { status: 500 }
      );
    }

    const cleaned = sanitizeEnquiryValues(parsed.data);
    const { text, html } = buildMessage(cleaned);
    const confirmation = buildCustomerConfirmation(cleaned);

    await transport.sendMail({
      to,
      from,
      replyTo: cleaned.email,
      subject: `New Pure Select Enquiry - ${cleaned.productRequirement}`,
      text,
      html
    });

    await transport.sendMail({
      to: cleaned.email,
      from,
      replyTo: to,
      subject: confirmation.subject,
      text: confirmation.text,
      html: confirmation.html
    });

    return NextResponse.json({ message: "Enquiry sent successfully." });
  } catch (error) {
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Unable to send the enquiry right now."
      },
      { status: 500 }
    );
  }
}
