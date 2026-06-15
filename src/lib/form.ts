import { z } from "zod";
import { indiaLocations, indianStates } from "@/data/indiaLocations";
import { businessTypeOptions } from "@/lib/constants";
import { EnquiryFormValues } from "@/types/enquiry";

export const initialEnquiryValues: EnquiryFormValues = {
  fullName: "",
  organization: "",
  mobileNumber: "",
  email: "",
  state: "",
  city: "",
  village: "",
  exactAddress: "",
  businessType: "Restaurant",
  productRequirement: "",
  estimatedQuantity: "",
  requirementDescription: ""
};

const alphaPattern = /^[A-Za-z][A-Za-z\s.'-]{1,79}$/;
const businessNamePattern = /^[A-Za-z0-9][A-Za-z0-9\s&().,'/-]{1,99}$/;
const villagePattern = /^[A-Za-z0-9][A-Za-z0-9\s.,'/-]{1,79}$/;
const quantityPattern = /^(?=.{3,60}$)[A-Za-z0-9\s.,/%+-]+$/;
const addressPattern = /^(?=.{10,180}$)[A-Za-z0-9\s#,./'()-]+$/;
const requirementPattern = /^(?=.{20,400}$)[A-Za-z0-9\s,.'()/%&+-]+$/;

export const enquirySchema = z
  .object({
    fullName: z.string().trim().regex(alphaPattern, "Enter a valid full name."),
    organization: z.string().trim().regex(businessNamePattern, "Enter a valid business name."),
    mobileNumber: z
      .string()
      .trim()
      .transform((value) => value.replace(/\D/g, ""))
      .refine((value) => /^[6-9]\d{9}$/.test(value), "Enter a valid Indian mobile number."),
    email: z.string().trim().email("Enter a valid email address."),
    state: z.string().trim().refine((value) => indianStates.includes(value), "Select a valid state or union territory."),
    city: z.string().trim().min(1, "Select a city or town."),
    village: z
      .string()
      .trim()
      .refine((value) => !value || villagePattern.test(value), "Enter a valid village or locality name."),
    exactAddress: z.string().trim().regex(addressPattern, "Enter a complete address with at least 10 characters."),
    businessType: z.enum(businessTypeOptions),
    productRequirement: z.string().trim().min(1, "Product requirement is required."),
    estimatedQuantity: z.string().trim().regex(quantityPattern, "Enter a valid quantity such as 500kg per month."),
    requirementDescription: z
      .string()
      .trim()
      .regex(requirementPattern, "Enter at least 20 characters with a clear requirement description.")
  })
  .superRefine((values, context) => {
    const allowedCities = indiaLocations[values.state] ?? [];

    if (!allowedCities.includes(values.city)) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["city"],
        message: "Select a city or town from the chosen state."
      });
    }
  });

export function sanitizeEnquiryValues(values: EnquiryFormValues): EnquiryFormValues {
  return {
    ...values,
    fullName: values.fullName.trim(),
    organization: values.organization.trim(),
    mobileNumber: values.mobileNumber.replace(/\D/g, ""),
    email: values.email.trim().toLowerCase(),
    state: values.state.trim(),
    city: values.city.trim(),
    village: values.village.trim(),
    exactAddress: values.exactAddress.trim(),
    productRequirement: values.productRequirement.trim(),
    estimatedQuantity: values.estimatedQuantity.trim(),
    requirementDescription: values.requirementDescription.trim()
  };
}

export function validateEnquiryForm(values: EnquiryFormValues) {
  const errors: Partial<Record<keyof EnquiryFormValues, string>> = {};
  const result = enquirySchema.safeParse(values);

  if (result.success) {
    return errors;
  }

  for (const issue of result.error.issues) {
    const field = issue.path[0] as keyof EnquiryFormValues;
    if (!errors[field]) errors[field] = issue.message;
  }

  return errors;
}
