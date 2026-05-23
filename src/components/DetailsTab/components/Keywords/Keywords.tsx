import "./Keywords.css";
import { useState } from "react";

type KeywordsTabProps = {
  summary: string;
  keywords: string[];
  setKeywords: (value: string[]) => void;
};

function Keywords({ summary, keywords, setKeywords }: KeywordsTabProps) {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const parseKeywords = (value: string): string[] => {
    return value
      .split(/[\n,|]/)
      .map((k) => k.trim())
      .filter((k) => k.length > 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);

    const parsed = parseKeywords(value);
    setKeywords(parsed);
  };

  const normalizedSummary = summary.toLowerCase();

  const matchedKeywords = keywords.filter((k) =>
    normalizedSummary.includes(k.toLowerCase()),
  );

  const missingKeywords = keywords.filter(
    (k) => !normalizedSummary.includes(k.toLowerCase()),
  );

  const total = keywords.length;
  const matched = matchedKeywords.length;
  const percentage = total ? Math.round((matched / total) * 100) : 0;

  const getStatusClass = () => {
    if (percentage >= 80) return "good";
    if (percentage >= 50) return "warn";
    return "bad";
  };

  return (
    <>
      <div className="section-card">
        <button
          type="button"
          className="section-header"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Target Keywords</span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div className="section-body">
            <div className="field-row">
              <label>
                Paste keywords from the job description (comma / line / pipe
                separated)
              </label>

              <textarea
                rows={4}
                value={input}
                onChange={handleChange}
                placeholder="Python, React, REST APIs, AWS, CI/CD, Docker"
              />
            </div>

            {summary.trim() && total > 0 && (
              <div
                style={{
                  marginBottom: ".8rem",
                }}
                className={`keyword-score ${getStatusClass()}`}
              >
                <span>
                  {matched}/{total} keywords matched ({percentage}%)
                </span>

                <div className="ks-bar-wrap">
                  <div className="ks-bar" style={{ width: `${percentage}%` }} />
                </div>

                {missingKeywords.length > 0 && (
                  <div className="missing-keywords">
                    <small>Missing:</small>{" "}
                    <span className="missing-keyword">
                      {missingKeywords[0]}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Keywords;
