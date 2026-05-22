import "./Tabs.css";

type Tab = "details" | "section" | "appearance";

type TabProps = {
  activeTab: Tab;
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
};

function Tabs({ activeTab, setActiveTab }: TabProps) {
  return (
    <div className="tabs">
      <button
        onClick={() => setActiveTab("details")}
        className={`tab ${activeTab === "details" ? "active" : ""}`}
      >
        Resume Details
      </button>

      <button
        onClick={() => setActiveTab("section")}
        className={`tab ${activeTab === "section" ? "active" : ""}`}
      >
        Sections & Order
      </button>

      <button
        onClick={() => setActiveTab("appearance")}
        className={`tab ${activeTab === "appearance" ? "active" : ""}`}
      >
        Appearance
      </button>
    </div>
  );
}

export default Tabs;
