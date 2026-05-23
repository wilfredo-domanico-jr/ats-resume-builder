import "./Summary.css";
import { useState } from "react";

type SummaryTabProps = {
  summary: string;
  setSummary: (value: string) => void;
};

function Summary({ summary, setSummary }: SummaryTabProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSummary(e.target.value);
  };

  
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
                name="summary"
                value={summary}
                onChange={handleChange}
              ></textarea>
              <div className="char-counter"> {summary.length} chars</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Summary;
