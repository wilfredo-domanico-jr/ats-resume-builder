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
    </div>
  );
}

export default AppearanceTab;
