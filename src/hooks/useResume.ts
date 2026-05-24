import { useState } from "react";
import type {
  ResumeData,
  ContactForm,
  ExperienceForm,
  EducationForm,
  SkillsForm,
  CertificationForm,
  ProjectForm,
} from "../types/resume";

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
    education: [],
    skills: [],
    certifications: [],
    projects: [],
  };

  const sampleResume: ResumeData = {
    contact: {
      fullName: "Wilfredo Domanico Jr.",
      headline: "Software Engineer",
      email: "wilfredo.domanico.jr@gmail.com",
      phone: "+63 912 345 6789",
      location: "Quezon City, Philippines",
      links: [
        "https://github.com/wilfredo-domanico-jr",
        "https://www.linkedin.com/in/wilfredo-domanico-jr-8a1841233/",
      ],
    },

    keywords: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "Laravel",
      "Vue.js",
      "AWS",
      "Azure",
      "Docker",
      "AI Integration",
      "OpenAI API",
      "LangChain",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
    ],

    summary:
      "Software Engineer with experience building enterprise systems, AI-powered platforms, inventory management solutions, ERP integrations, and scalable full-stack applications using React, TypeScript, Python, PHP, Node.js, AWS, and Azure.",

    experience: [
      {
        id: crypto.randomUUID(),
        company: "FREY-FIL CORPORATION",
        jobTitle: "Software Developer",
        employmentType: "Full-time",
        startDate: "2025-01-01",
        endDate: "",
        currentlyWorking: true,
        bulletPoints: [
          "Sole developer leading architecture, development, deployment, and maintenance of enterprise systems across nationwide operations.",
          "Built a Nationwide Warehouse Inventory Management System for real-time multi-branch tracking and reporting.",
          "Developed an eFile Distribution System integrated with Microsoft SharePoint for secure document logging, tracking, and sharing.",
          "Delivered enterprise platforms including Construction Management, Ship Reservation System, and secure in-house LLM Chat systems.",
          "Integrated AI capabilities using OpenAI API, Anthropic Claude, and Ollama for offline/self-hosted LLM inference.",
          "Customized Acumatica ERP through workflow modifications, reporting, and Generic Inquiries.",
          "Automated accounting and operations using Power Automate, Copilot, Excel VBA, Power Query, and PivotTables.",
          "Implemented CI/CD pipelines and deployment workflows using AWS and Microsoft Azure.",
          "Developed and maintained unit tests to improve maintainability and reduce regressions.",
          "Deployed and managed scalable applications using AWS, Azure Virtual Machines, and Azure SQL Database.",
          "Maintained and optimized WordPress sites for performance, SEO, and security.",
        ],
      },

      {
        id: crypto.randomUUID(),
        company: "JIMAC INCORPORATED",
        jobTitle: "Full Stack Web Developer",
        employmentType: "Full-time",
        startDate: "2023-07-01",
        endDate: "2025-01-01",
        currentlyWorking: false,
        bulletPoints: [
          "Developed and maintained POS, Inventory, CMS, and ERP systems for brands including 7-Eleven, Vans, and The Generics Pharmacy.",
          "Modernized legacy systems, improving operational efficiency by up to 80% and reducing manual workload by 50%.",
          "Strengthened system security and improved documentation practices.",
          "Collaborated directly with clients to deliver scalable and high-performance business solutions.",
        ],
      },
    ],

    education: [
      {
        id: crypto.randomUUID(),
        school: "Quezon City University",
        degree: "Bachelor of Science",
        fieldOfStudy: "Information Technology",
        startDate: "2019-01-01",
        endDate: "2023-01-01",
      },
    ],

    skills: [
      {
        id: crypto.randomUUID(),
        groupName: "Programming & Scripting",
        skillList: [
          "PHP",
          "Laravel",
          "CodeIgniter",
          "Yii 1",
          "Yii 2",
          "JavaScript",
          "TypeScript",
          "Python",
          "R",
          "C#",
          "Go",
          "Visual Basic",
        ],
      },

      {
        id: crypto.randomUUID(),
        groupName: "Frontend Frameworks & Libraries",
        skillList: [
          "Vue.js",
          "Angular.js",
          "Nuxt.js",
          "React.js",
          "Next.js",
          "Inertia.js",
          "Laravel Livewire",
          "Three.js",
          "Phaser.js",
          "jQuery",
        ],
      },

      {
        id: crypto.randomUUID(),
        groupName: "Frontend Technologies & UI/UX",
        skillList: [
          "HTML",
          "CSS",
          "SCSS",
          "Bootstrap",
          "Tailwind CSS",
          "Bulma",
          "Semantic UI",
          "Figma",
          "Canva",
        ],
      },

      {
        id: crypto.randomUUID(),
        groupName: "Backend & Frameworks",
        skillList: [
          "Node.js",
          "Express.js",
          ".NET Framework",
          ".NET Core",
          "Flask",
          "FastAPI",
          "Windows Forms",
          "WPF",
        ],
      },

      {
        id: crypto.randomUUID(),
        groupName: "Databases",
        skillList: [
          "MySQL",
          "PostgreSQL",
          "SQLite",
          "Microsoft SQL Server",
          "MongoDB",
        ],
      },

      {
        id: crypto.randomUUID(),
        groupName: "APIs & Integrations",
        skillList: [
          "REST APIs",
          "GraphQL",
          "AJAX",
          "Axios",
          "Stripe API",
          "QuickBooks",
          "Acumatica",
          "Meta API",
          "Microsoft Graph",
          "OAuth",
          "JWT",
        ],
      },

      {
        id: crypto.randomUUID(),
        groupName: "Cloud, DevOps & Platforms",
        skillList: [
          "Git",
          "SVN",
          "GitHub",
          "Gitea",
          "Docker",
          "Docker Compose",
          "Postman",
          "AWS",
          "Azure",
          "DigitalOcean",
          "Microsoft 365",
          "WordPress",
          "Linux",
          "Windows",
        ],
      },

      {
        id: crypto.randomUUID(),
        groupName: "Data & Automation",
        skillList: [
          "Advanced Excel",
          "Pivot Tables",
          "Macros",
          "Pandas",
          "Web Scraping",
          "n8n",
          "Data Processing",
          "Reports Generation",
        ],
      },

      {
        id: crypto.randomUUID(),
        groupName: "AI & Machine Learning",
        skillList: [
          "Ollama",
          "LangChain",
          "Hugging Face",
          "PyTorch",
          "TensorFlow",
          "LLM Integration",
          "Prompt Engineering",
        ],
      },

      {
        id: crypto.randomUUID(),
        groupName: "Tools & IDEs",
        skillList: [
          "RStudio",
          "Visual Studio",
          "Visual Studio Code",
          "PhpStorm",
          "PyCharm",
        ],
      },
    ],

    certifications: [],

    projects: [
      {
        id: crypto.randomUUID(),
        name: "Asset Management System",
        url: "https://github.com/wilfredo-domanico-jr/AssetManager",
        description:
          "Enterprise asset lifecycle management platform built with Laravel API and Vue.js frontend featuring inventory tracking, depreciation reporting, automated email notifications, RBAC authentication, ApexCharts dashboards, Dockerized development environment, and RESTful API architecture.",
      },
      {
        id: crypto.randomUUID(),
        name: "Crypto Trend Notifier",
        url: "https://github.com/wilfredo-domanico-jr/CryptoTrendNotifier",
        description:
          "Python-based cryptocurrency monitoring platform that tracks real-time market prices, sends instant alerts for significant price movements, integrates with APIs/webhooks for automated data collection, and uses machine learning models to predict market trends and provide actionable trading insights.",
      },

      {
        id: crypto.randomUUID(),
        name: "Image Optimizer",
        url: "https://github.com/wilfredo-domanico-jr/Image-Optimizer-React",
        description:
          "Client-side image compression and conversion tool built with React, Vite, and Tailwind CSS using the Canvas API for fast, private, and offline-friendly image processing with batch compression, real-time preview, adjustable quality control, and support for JPG, PNG, and WebP formats.",
      },
    ],
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

  const loadSamples = () => {
    setResume(sampleResume);
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
    education: [],
    skills: [],
    certifications: [],
    projects: [],
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

  const updateEducation = (value: EducationForm[]) => {
    setResume((prev) => ({
      ...prev,
      education: value,
    }));
  };

  const updateSkills = (value: SkillsForm[]) => {
    setResume((prev) => ({
      ...prev,
      skills: value,
    }));
  };

  const updateCertications = (value: CertificationForm[]) => {
    setResume((prev) => ({
      ...prev,
      certifications: value,
    }));
  };

  const updateProjects = (value: ProjectForm[]) => {
    setResume((prev) => ({
      ...prev,
      projects: value,
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
    loadSamples,
    updateContact,
    updateKeywords,
    sections,
    setSections,
    updateSummary,
    updateExperience,
    updateEducation,
    updateSkills,
    updateCertications,
    updateProjects,
  };
}
