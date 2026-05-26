import "./App.css";
import { useState } from "react";
import { useResume } from "./hooks/useResume";

import Toast from "./components/Toast/Toast";
import Header from "./components/Header/Header";
import MobileViewToggle from "./components/MobileViewToggle/MobileViewToggle";
import Tabs from "./components/Tabs/Tabs";
import DetailsTab from "./components/DetailsTab/DetailsTab";
import SectionsTab from "./components/SectionsTab/SectionsTab";
import AppearanceTab from "./components/AppearanceTab/AppearanceTab";
import PreviewToolbar from "./components/PreviewToolbar/PreviewToolbar";
import PreviewScroll from "./components/PreviewScroll/PreviewScroll";

function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<
    "details" | "section" | "appearance"
  >("details");

  const [viewMode, setViewMode] = useState<"live" | "full">("live");
  const resumeHooks = useResume();

  const handlePrintValidation = () => {
    const resume = resumeHooks.resume;

    const { links, ...textFields } = resume.contact;
    const hasContactData =
      Object.values(textFields).some((val) => val && val.trim() !== "") ||
      (links && links.length > 0);
    const hasSummary = !!resume.summary?.trim();
    const hasExperience = resume.experience && resume.experience.length > 0;
    const hasEducation = resume.education && resume.education.length > 0;
    const hasSkills = resume.skills && resume.skills.length > 0;
    const hasCertifications =
      resume.certifications && resume.certifications.length > 0;
    const hasProjects = resume.projects && resume.projects.length > 0;

    const hasAnyData =
      hasContactData ||
      hasSummary ||
      hasExperience ||
      hasEducation ||
      hasSkills ||
      hasCertifications ||
      hasProjects;

    if (!hasAnyData) {
      // Trigger error toast if resume sheet is totally empty
      setToastMessage(
        "Cannot print an empty resume. Please fill out your details!",
      );

      // Auto-hide the toast after 3 seconds
      setTimeout(() => setToastMessage(null), 3000);
    } else {
      // Execute standard browser printing if layout data exists
      window.print();
    }
  };

  return (
    <>
      {toastMessage && (
        <Toast
          message={toastMessage}
          icon={toastMessage.includes("empty") ? "⚠️" : "🗑️"}
        />
      )}

      <Header
        resetResume={resumeHooks.resetResume}
        loadSamples={resumeHooks.loadSamples}
      />
      <MobileViewToggle />

      <div
        className={`app-layout ${viewMode === "full" ? "full-preview-mode" : ""}`}
      >
        {viewMode === "live" && (
          <aside className="form-panel">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "details" && (
              <DetailsTab
                resume={resumeHooks.resume}
                setContact={resumeHooks.updateContact}
                setKeywords={resumeHooks.updateKeywords}
                setSummary={resumeHooks.updateSummary}
                setExperience={resumeHooks.updateExperience}
                setEducation={resumeHooks.updateEducation}
                setSkills={resumeHooks.updateSkills}
                setCertifications={resumeHooks.updateCertications}
                setProjects={resumeHooks.updateProjects}
              />
            )}

            {activeTab === "section" && (
              <SectionsTab
                sections={resumeHooks.sections}
                setSections={resumeHooks.setSections}
              />
            )}

            {activeTab === "appearance" && (
              <AppearanceTab
                themes={resumeHooks.themes}
                resumeTheme={resumeHooks.resumeTheme}
                setResumeTheme={resumeHooks.setResumeTheme}
              />
            )}
          </aside>
        )}

        <main className="preview-panel">
          <PreviewToolbar
            resume={resumeHooks.resume}
            viewMode={viewMode}
            setViewMode={setViewMode}
            onPrint={handlePrintValidation}
          />
          <PreviewScroll
            resume={resumeHooks.resume}
            sections={resumeHooks.sections}
          />
        </main>
      </div>
    </>
  );
}

export default App;
