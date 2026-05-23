export type ContactForm = {
  fullName: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  links: string[];
};

export type ResumeData = {
  contact: ContactForm;
};
