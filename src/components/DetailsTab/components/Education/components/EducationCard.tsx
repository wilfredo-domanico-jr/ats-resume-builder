import type React from "react";
import type { EducationForm } from "../../../../../types/resume";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  item: EducationForm;
  index: number;
  education: EducationForm[];
  setEducation: (value: EducationForm[]) => void;
  isOpen: boolean;
  toggleCard: (id: string) => void;
  setOpenCards: React.Dispatch<React.SetStateAction<string[]>>;
};

function EducationCard({
  item,
  index,
  education,
  setEducation,
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

  const updateField = (field: keyof EducationForm, value: any) => {
    const updated = [...education];
    updated[index] = { ...updated[index], [field]: value };
    setEducation(updated);
  };

  const removeRole = () => {
    setEducation(education.filter((_, i) => i !== index));
    setOpenCards((prev) => prev.filter((id) => id !== item.id));
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
          {item.degree || "Degree"} {item.school && `— ${item.school}`}
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
              <label>Degree</label>

              <input
                type="text"
                placeholder="Bachelor of Science"
                value={item.degree}
                onChange={(e) => updateField("degree", e.target.value)}
              />
            </div>

            <div>
              <label>School</label>

              <input
                type="text"
                placeholder="MIT"
                value={item.school}
                onChange={(e) => updateField("school", e.target.value)}
              />
            </div>
          </div>

          <div className="field-row">
            <label>Field of Study</label>

            <input
              type="text"
              placeholder="Computer Science"
              value={item.fieldOfStudy}
              onChange={(e) => updateField("fieldOfStudy", e.target.value)}
            />
          </div>

          <div className="field-row">
            <label>Start</label>

            <input
              type="month"
              value={item.startDate}
              onChange={(e) => updateField("startDate", e.target.value)}
            />
          </div>

          <div className="field-row">
            <label>End</label>

            <input
              type="month"
              value={item.endDate}
              onChange={(e) => updateField("endDate", e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EducationCard;
