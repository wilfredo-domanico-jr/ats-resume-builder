import "./App.css";
import { useState } from "react";

import Toast from "./components/Toast/Toast";
import Header from "./components/Header/Header";
import MobileViewToggle from "./components/MobileViewToggle/MobileViewToggle";
import Tabs from "./components/Tabs/Tabs";
// import PreviewToolbar from "./components/PreviewToolbar/PreviewToolbar";
import DetailsTab from "./components/DetailsTab/DetailsTab";
import SectionsTab from "./components/SectionsTab/SectionsTab";

function App() {
  const [showToast, setShowToast] = useState(false);

  type Tab = "details" | "section" | "appearance";
  const [activeTab, setActiveTab] = useState<Tab>("section");

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

          {activeTab === "details" && <DetailsTab />}

          {activeTab === "section" && (
            <SectionsTab sections={sections} setSections={setSections} />
          )}
        </aside>
        <main className="preview-panel">{/* <PreviewToolbar /> */}</main>
      </div>
    </>
  );
}

export default App;
