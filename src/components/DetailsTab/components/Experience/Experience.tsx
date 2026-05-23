import { useState } from "react";

function Experience() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="section-card">
        <button
          type="button"
          className="section-header"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Experience</span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div className="section-body">
            <div className="card open">
              <div className="card-header">
                <span className="drag-handle">⠿</span>

                <span className="card-title">
                  Software Engineer @ Acme Corp
                </span>

                <button
                  className="btn btn-danger btn-icon btn-sm"
                  title="Remove"
                  type="button"
                >
                  ×
                </button>

                <span className="card-chevron">▾</span>
              </div>

              <div className="card-body">
                <div className="field-grid">
                  <div>
                    <label>Job Title</label>

                    <input
                      type="text"
                      defaultValue="Software Engineer"
                      placeholder="Software Engineer"
                    />
                  </div>

                  <div>
                    <label>Company</label>

                    <input
                      type="text"
                      defaultValue="Acme Corp"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="field-row">
                  <label>Employment Type</label>

                  <select defaultValue="Full-time">
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Internship">Internship</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>

                <div className="field-row">
                  <label>Start</label>

                  <input type="month" defaultValue="2024-01" />
                </div>

                <div className="field-row">
                  <label>End</label>

                  <input type="month" defaultValue="2025-01" />
                </div>

                <div
                  className="field-row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem",
                  }}
                >
                  <input type="checkbox" style={{ width: "auto" }} />

                  <label
                    style={{
                      margin: 0,
                      fontSize: ".8rem",
                      color: "var(--text-2)",
                    }}
                  >
                    Currently working here
                  </label>
                </div>

                <label>Bullet Points</label>

                <div
                  style={{
                    display: "flex",
                    gap: ".4rem",
                    marginBottom: ".4rem",
                  }}
                >
                  <input
                    type="text"
                    defaultValue="Built scalable REST APIs"
                    placeholder="Achieved…"
                    style={{ flex: 1 }}
                  />

                  <button
                    className="btn btn-ghost btn-icon btn-sm"
                    style={{ flexShrink: 0 }}
                    type="button"
                  >
                    ×
                  </button>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: ".4rem",
                    marginBottom: ".4rem",
                  }}
                >
                  <input
                    type="text"
                    defaultValue="Improved app performance by 40%"
                    placeholder="Achieved…"
                    style={{ flex: 1 }}
                  />

                  <button
                    className="btn btn-ghost btn-icon btn-sm"
                    style={{ flexShrink: 0 }}
                    type="button"
                  >
                    ×
                  </button>
                </div>

                <button
                  className="btn btn-ghost btn-sm"
                  style={{ marginTop: ".25rem" }}
                  type="button"
                >
                  + Add bullet
                </button>
              </div>
            </div>

            <button className="btn btn-secondary btn-sm" type="button">
              + Add role
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Experience;
