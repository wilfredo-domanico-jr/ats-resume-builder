import { useState } from "react";

function Education() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="section-card">
        <button
          type="button"
          className="section-header"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Education</span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div className="section-body">
            <div className="card open">
              <div className="card-header">
                <span className="drag-handle">⠿</span>
                <span className="card-title">
                  BS Computer Science — Harvard
                </span>
                <button className="btn btn-danger btn-icon btn-sm">×</button>
                <span className="card-chevron">▾</span>
              </div>
              <div className="card-body">
                <div className="field-grid">
                  <div>
                    <label>Degree</label>
                    <input type="text" placeholder="Bachelor of Science" />
                  </div>
                  <div>
                    <label>School</label>
                    <input type="text" placeholder="MIT" />
                  </div>
                </div>
                <div className="field-row">
                  <label>Field of Study</label>
                  <input type="text" placeholder="Computer Science" />
                </div>
                <div className="field-row">
                  <label>Start</label>
                  <input type="month" />
                </div>

                <div className="field-row">
                  <label>End</label>
                  <input type="month" />
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

export default Education;
