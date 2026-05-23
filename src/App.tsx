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

  const {
    resume,
    resetResume,
    setResume,
    updateContact,
    updateKeywords,
    sections,
    setSections,
    updateSummary,
  } = useResume();

  return (
    <>
      {showToast && <Toast message="Item deleted successfully" icon="🗑️" />}

      <Header resetResume={resetResume} />
      <MobileViewToggle />

      <div className="app-layout">
        <aside className="form-panel">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === "details" && (
            <DetailsTab
              contact={resume.contact}
              setContact={updateContact}
              keywords={resume.keywords}
              setKeywords={updateKeywords}
              summary={resume.summary}
              setSummary={updateSummary}
            />
          )}

          {activeTab === "section" && (
            <SectionsTab sections={sections} setSections={setSections} />
          )}

          {activeTab === "appearance" && <AppearanceTab />}
        </aside>
        <main className="preview-panel">
          <PreviewToolbar />
          <PreviewScroll contact={resume.contact} summary={resume.summary} />
        </main>
      </div>
    </>
  );
}

export default App;
