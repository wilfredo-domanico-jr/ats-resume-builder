import type React from "react";
import type { ExperienceForm } from "../../../../types/resume";
import BulletList from "./BulletList";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  item: ExperienceForm;
  index: number;
  experience: ExperienceForm[];
  setExperience: (value: ExperienceForm[]) => void;
  isOpen: boolean;
  toggleCard: (id: string) => void;
  setOpenCards: React.Dispatch<React.SetStateAction<string[]>>;
};

function ExperienceCard({
  item,
  index,
  experience,
  setExperience,
  isOpen,
  toggleCard,
  setOpenCards,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || "transform 200ms ease",
    opacity: isDragging ? 0.6 : 1,
  };

  const updateField = (field: keyof ExperienceForm, value: any) => {
    const updated = [...experience];
    updated[index] = { ...updated[index], [field]: value };
    setExperience(updated);
  };

  const removeRole = () => {
    setExperience(experience.filter((_, i) => i !== index));
    setOpenCards((prev) => prev.filter((id) => id !== item.id));
  };

  const updateBullets = (bullets: string[]) => {
    const updated = [...experience];
    updated[index].bulletPoints = bullets;
    setExperience(updated);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`card ${isOpen ? "open" : ""} ${isDragging ? "dragging" : ""}`}
    >
      <div className="card-header">
        <span
          ref={setActivatorNodeRef}
          className="drag-handle"
          {...attributes}
          {...listeners}
          style={{
            cursor: "grab",
            touchAction: "none",
          }}
        >
          ⠿
        </span>

        <span className="card-title">
          {item.jobTitle || "New Role"}
          {item.company && ` @ ${item.company}`}
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            marginLeft: "auto",
          }}
        >
          <button
            className="btn btn-danger btn-icon btn-sm"
            title="Remove"
            type="button"
            onClick={removeRole}
          >
            ×
          </button>

          <button
            type="button"
            className="card-chevron"
            onClick={() => toggleCard(item.id)}
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              border: "none",
            }}
          >
            {isOpen ? "▾" : "▸"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="card-body">
          <div className="field-grid">
            <div>
              <label>Job Title</label>

              <input
                type="text"
                placeholder="Enter Job Title"
                value={item.jobTitle}
                onChange={(e) => updateField("jobTitle", e.target.value)}
              />
            </div>

            <div>
              <label>Company</label>

              <input
                type="text"
                placeholder="Enter Company"
                value={item.company}
                onChange={(e) => updateField("company", e.target.value)}
              />
            </div>
          </div>

          <div className="field-row">
            <label>Employment Type</label>

            <select
              value={item.employmentType}
              onChange={(e) => updateField("employmentType", e.target.value)}
            >
              <option value="">-- Select --</option>
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

            <input
              type="month"
              value={item.startDate}
              onChange={(e) => updateField("startDate", e.target.value)}
            />
          </div>

          {!item.currentlyWorking && (
            <div className="field-row">
              <label>End</label>

              <input
                type="month"
                value={item.endDate || ""}
                onChange={(e) => updateField("endDate", e.target.value)}
              />
            </div>
          )}

          <div
            className="field-row"
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".5rem",
            }}
          >
            <input
              type="checkbox"
              checked={item.currentlyWorking}
              style={{ width: "auto" }}
              onChange={(e) =>
                updateField("currentlyWorking", e.target.checked)
              }
            />

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

          <BulletList bullets={item.bulletPoints} onChange={updateBullets} />
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
