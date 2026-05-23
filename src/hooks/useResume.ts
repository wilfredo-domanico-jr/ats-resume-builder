import { useState } from "react";
import type { ResumeData, ContactForm } from "../types/resume";

export function useResume() {
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
    updateContact,
    updateKeywords,
    sections,
    setSections,
  };
}
