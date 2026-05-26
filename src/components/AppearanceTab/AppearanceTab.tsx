import "./AppearanceTab.css";
import { useState, useEffect } from "react";

import type { Theme } from "../../types/resume";

type AppearanceTabProps = {
  themes: Theme[];
  resumeTheme: Theme;
  setResumeTheme: (value: Theme) => void;
};

function AppearanceTab({
  themes,
  resumeTheme,
  setResumeTheme,
}: AppearanceTabProps) {
  const [fontSize, setFontSize] = useState(13);

  useEffect(() => {
    if (resumeTheme) {
      document.documentElement.style.setProperty(
        "--resume-theme-header",
        resumeTheme.header,
      );
      document.documentElement.style.setProperty(
        "--resume-theme-accent",
        resumeTheme.accent,
      );
    }
  }, [resumeTheme]);

  const updateFontSize = (value: number) => {
    setFontSize(value);
    document.documentElement.style.setProperty(
      "--resume-font-size",
      `${value}px`,
    );
  };

  return (
    <div className="form-panel-inner">
      <div className="section-title">Resume Theme</div>

      <div className="theme-swatches">
        {themes.map((t) => (
          <div
            key={t.id}
            className={`theme-swatch ${resumeTheme.id === t.id ? "active" : ""}`}
            style={{ background: t.header }}
            title={t.label}
            onClick={() => setResumeTheme(t)}
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
    </div>
  );
}

export default AppearanceTab;
