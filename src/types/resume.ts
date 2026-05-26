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

export type EducationForm = {
  id: string;
  degree: string;
  school: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
};

export type SkillsForm = {
  id: string;
  groupName: string;
  skillList: string[];
};

export type CertificationForm = {
  id: string;
  name: string;
  issuer: string;
  date: string;
};

export type ProjectForm = {
  id: string;
  name: string;
  description: string;
  url: string;
};

export type Theme = {
  id: string;
  label: string;
  header: string;
  accent: string;
  bg: string;
};

export type ResumeData = {
  contact: ContactForm;
  keywords: string[];
  summary: string;
  experience: ExperienceForm[];
  education: EducationForm[];
  skills: SkillsForm[];
  certifications: CertificationForm[];
  projects: ProjectForm[];
};
