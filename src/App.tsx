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
  const [showToast, setShowToast] = useState(false);

  const [activeTab, setActiveTab] = useState<
    "details" | "section" | "appearance"
  >("details");

  const [viewMode, setViewMode] = useState<"live" | "full">("live");
  const resumeHooks = useResume();

  return (
    <>
      {showToast && <Toast message="Item deleted successfully" icon="🗑️" />}

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
          <PreviewToolbar viewMode={viewMode} setViewMode={setViewMode} />
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
