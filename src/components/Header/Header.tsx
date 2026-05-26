import "./Header.css";
import { useState, useEffect } from "react";

type HeaderProps = {
  resetResume: () => void;
  loadSamples: () => void;
};

function Header({ resetResume, loadSamples }: HeaderProps) {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.getAttribute("data-theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <div className="header-logo">
            ATS-Resume<span>Builder</span>
          </div>
        </div>
        <div className="header-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title="Toggle Dark Mode"
          >
            <span>{isDark ? "☀️" : "🌙"}</span>
          </button>
          <button onClick={loadSamples} className="btn btn-secondary btn-sm">
            Load sample
          </button>
          <button onClick={resetResume} className="btn btn-ghost btn-sm">
            Reset
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
