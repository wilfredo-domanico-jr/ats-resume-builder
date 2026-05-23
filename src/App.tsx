import "./App.css";
import { useState } from "react";

import Toast from "./components/Toast/Toast";
import Header from "./components/Header/Header";
import MobileViewToggle from "./components/MobileViewToggle/MobileViewToggle";
import Tabs from "./components/Tabs/Tabs";
import DetailsTab from "./components/DetailsTab/DetailsTab";
import SectionsTab from "./components/SectionsTab/SectionsTab";
import AppearanceTab from "./components/AppearanceTab/AppearanceTab";
import PreviewToolbar from "./components/PreviewToolbar/PreviewToolbar";
import PreviewScroll from "./components/PreviewScroll/PreviewScroll";
import type { ResumeData } from "./types/resume";
import type { ContactForm } from "./types/resume";
function App() {
  const [showToast, setShowToast] = useState(false);

  type Tab = "details" | "section" | "appearance";
  const [activeTab, setActiveTab] = useState<Tab>("details");

  const [resume, setResume] = useState<ResumeData>({
    contact: {
      fullName: "",
      headline: "",
      email: "",
      phone: "",
      location: "",
    },
  });

  const updateContact = (value: ContactForm) => {
    setResume((prev) => ({
      ...prev,
      contact: value,
    }));
  };

  const [sections, setSections] = useState([
    {
      id: "summary",
      label: "Professional Summary",
      enabled: true,
    },
    {
      id: "experience",
      label: "Experience",
      enabled: true,
    },
    {
      id: "education",
      label: "Education",
      enabled: true,
    },
    {
      id: "skills",
      label: "Skills",
      enabled: true,
    },
    {
      id: "certifications",
      label: "Certifications",
      enabled: false,
    },
    {
      id: "projects",
      label: "Projects",
      enabled: false,
    },
    {
      id: "languages",
      label: "Languages",
      enabled: false,
    },
    {
      id: "volunteer",
      label: "Volunteer",
      enabled: false,
    },
  ]);

  return (
    <>
      {showToast && <Toast message="Item deleted successfully" icon="🗑️" />}

      <Header />
      <MobileViewToggle />

      <div className="app-layout">
        <aside className="form-panel">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === "details" && (
            <DetailsTab contact={resume.contact} setContact={updateContact} />
          )}

          {activeTab === "section" && (
            <SectionsTab sections={sections} setSections={setSections} />
          )}

          {activeTab === "appearance" && <AppearanceTab />}
        </aside>
        <main className="preview-panel">
          <PreviewToolbar />
          <PreviewScroll contact={resume.contact} />
        </main>
      </div>
    </>
  );
}

export default App;
