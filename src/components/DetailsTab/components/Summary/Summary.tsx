import "./Summary.css";
import { useState } from "react";

function Summary() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="section-card">
        <button
          type="button"
          className="section-header"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Professional Summary</span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div className="section-body">
            <div className="field-row">
              <label>3–5 sentences, keyword-rich</label>
              <textarea
                rows={5}
                placeholder="Results-driven engineer with 6+ years of experience…"
              ></textarea>
              <div className="char-counter">0 chars</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Summary;
