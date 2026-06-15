export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  brandName: string;
  legalName: string;
  phone: string;
  email: string;
  website: string;
  location: string;
  whatsappLink: string;
  blinkitLink: string;
  socialLinks: SocialLink[];
}
