export type BusinessType =
  | "Restaurant"
  | "Hotel"
  | "Caterer"
  | "Retail Store"
  | "Distributor"
  | "Food Manufacturer"
  | "Other";

export interface EnquiryFormValues {
  fullName: string;
  organization: string;
  mobileNumber: string;
  email: string;
  state: string;
  city: string;
  village: string;
  exactAddress: string;
  businessType: BusinessType;
  productRequirement: string;
  otherProductRequirement: string;
  estimatedQuantity: string;
  requirementDescription: string;
}

export interface EnquirySubmissionPayload extends EnquiryFormValues {
  website?: string;
  formStartedAt?: number;
  turnstileToken?: string;
}
