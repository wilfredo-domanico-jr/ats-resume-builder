import { useState } from "react";
import type { ResumeData, ContactForm, ExperienceForm } from "../types/resume";

export function useResume() {
  const initialResume: ResumeData = {
    contact: {
      fullName: "",
      headline: "",
      email: "",
      phone: "",
      location: "",
      links: [],
    },
    keywords: [],
    summary: "",
    experience: [],
  };

  const initialSections = [
    { id: "summary", label: "Professional Summary", enabled: true },
    { id: "experience", label: "Experience", enabled: true },
    { id: "education", label: "Education", enabled: true },
    { id: "skills", label: "Skills", enabled: true },
    { id: "certifications", label: "Certifications", enabled: false },
    { id: "projects", label: "Projects", enabled: false },
    { id: "languages", label: "Languages", enabled: false },
    { id: "volunteer", label: "Volunteer", enabled: false },
  ];

  const resetResume = () => {
    setResume(initialResume);
    setSections(initialSections);
  };

  const [resume, setResume] = useState<ResumeData>({
    contact: {
      fullName: "",
      headline: "",
      email: "",
      phone: "",
      location: "",
      links: [],
    },
    keywords: [],
    summary: "",
    experience: [],
  });

  const updateContact = (value: ContactForm) => {
    setResume((prev) => ({
      ...prev,
      contact: value,
    }));
  };

  const updateKeywords = (value: string[]) => {
    setResume((prev) => ({
      ...prev,
      keywords: value,
    }));
  };

  const updateSummary = (value: string) => {
    setResume((prev) => ({
      ...prev,
      summary: value,
    }));
  };

  const updateExperience = (value: ExperienceForm[]) => {
    setResume((prev) => ({
      ...prev,
      experience: value,
    }));
  };

  const [sections, setSections] = useState([
    { id: "summary", label: "Professional Summary", enabled: true },
    { id: "experience", label: "Experience", enabled: true },
    { id: "education", label: "Education", enabled: true },
    { id: "skills", label: "Skills", enabled: true },
    { id: "certifications", label: "Certifications", enabled: false },
    { id: "projects", label: "Projects", enabled: false },
    { id: "languages", label: "Languages", enabled: false },
    { id: "volunteer", label: "Volunteer", enabled: false },
  ]);

  return {
    resume,
    resetResume,
    updateContact,
    updateKeywords,
    sections,
    setSections,
    updateSummary,
    updateExperience,
  };
}
