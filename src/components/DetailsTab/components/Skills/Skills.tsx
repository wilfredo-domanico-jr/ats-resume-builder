import "./Skills.css";
import { useState } from "react";

function Skills() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="section-card">
        <button
          type="button"
          className="section-header"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Skills</span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div className="section-body">
            <div className="card open" style={{ marginBottom: ".6rem" }}>
              <div className="card-header">
                <span className="card-title">Group</span>
                <button className="btn btn-danger btn-icon btn-sm">×</button>
                <span className="card-chevron">▾</span>
              </div>
              <div className="card-body">
                <div className="field-row">
                  <label>Group Name</label>
                  <input type="text" />
                </div>
                <label>Skills</label>
                <div style={{ marginBottom: ".4rem" }}>
                  <span className="skill-tag">
                    Skill
                    <button>×</button>
                  </span>
                </div>
                <div style={{ display: "flex", gap: ".4rem" }}>
                  <input type="text" placeholder="Skill, another skill…" />
                  <button className="btn btn-secondary btn-sm">+</button>
                </div>
              </div>
            </div>

            <button className="btn btn-secondary btn-sm" type="button">
              + Add entry
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Skills;
