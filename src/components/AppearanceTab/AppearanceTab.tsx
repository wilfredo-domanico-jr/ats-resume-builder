import "./AppearanceTab.css";
import { useState } from "react";

type Theme = {
  id: string;
  label: string;
  header: string;
};

const themes: Theme[] = [
  { id: "blue", label: "Blue", header: "#3b82f6" },
  { id: "green", label: "Green", header: "#22c55e" },
  { id: "purple", label: "Purple", header: "#a855f7" },
];

function AppearanceTab() {
  const [fontSize, setFontSize] = useState(13);
  const [resumeTheme, setResumeTheme] = useState("blue");

  const updateFontSize = (value: number) => {
    setFontSize(value);
    document.documentElement.style.setProperty(
      "--resume-font-size",
      `${value}px`,
    );
  };

  const exportTxt = () => console.log("Export TXT");
  const exportPDF = () => window.print();
  const copyText = () => console.log("Copy text");
  const saveDraft = () => console.log("Save draft");
  const loadDraft = () => console.log("Load draft");

  return (
    <div className="form-panel-inner">
      <div className="section-title">Resume Theme</div>

      <div className="theme-swatches">
        {themes.map((t) => (
          <div
            key={t.id}
            className={`theme-swatch ${resumeTheme === t.id ? "active" : ""}`}
            style={{ background: t.header }}
            title={t.label}
            onClick={() => setResumeTheme(t.id)}
          />
        ))}
      </div>

      <hr />

      <div className="section-title">Font Size</div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginTop: "0.25rem",
        }}
      >
        <input
          type="range"
          min={11}
          max={16}
          value={fontSize}
          onChange={(e) => updateFontSize(Number(e.target.value))}
          style={{ width: "100%" }}
        />

        <span
          style={{
            fontSize: "0.8rem",
            color: "var(--text-2)",
            minWidth: "28px",
          }}
        >
          {fontSize}px
        </span>
      </div>

      <hr />

      <div className="section-title">Export</div>

      <div className="export-group">
        <button className="export-btn" onClick={exportTxt}>
          📄 Plain Text .txt
        </button>

        <button className="export-btn" onClick={exportPDF}>
          🖨️ Print / PDF
        </button>

        <button className="export-btn" onClick={copyText}>
          📋 Copy Text
        </button>

        <button className="export-btn" onClick={saveDraft}>
          💾 Save Draft
        </button>

        <button className="export-btn" onClick={loadDraft}>
          📂 Load Draft
        </button>
      </div>
    </div>
  );
}

export default AppearanceTab;
