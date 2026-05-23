export type ContactForm = {
  fullName: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  links: string[];
};

export type ExperienceForm = {
  id: string;
  jobTitle: string;
  company: string;
  employmentType: string;
  startDate: string;
  endDate: string | null;
  currentlyWorking: boolean;
  bulletPoints: string[];
};

export type ResumeData = {
  contact: ContactForm;
  keywords: string[];
  summary: string;
  experience: ExperienceForm[];
};
