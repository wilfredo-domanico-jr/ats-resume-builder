import type React from "react";
import type { SkillsForm } from "../../../../../types/resume";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

type Props = {
  item: SkillsForm;
  index: number;
  skills: SkillsForm[];
  setSkills: (value: SkillsForm[]) => void;
  isOpen: boolean;
  toggleCard: (id: string) => void;
  setOpenCards: React.Dispatch<React.SetStateAction<string[]>>;
};

function SkillCard({
  item,
  index,
  skills,
  setSkills,
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

  const updateField = (field: keyof SkillsForm, value: any) => {
    const updated = [...skills];
    updated[index] = { ...updated[index], [field]: value };
    setSkills(updated);
  };

  const removeSkillGroup = () => {
    setSkills(skills.filter((_, i) => i !== index));
    setOpenCards((prev) => prev.filter((id) => id !== item.id));
  };

  const addSkill = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const updated = [...skills];
    updated[index] = {
      ...updated[index],
      skillList: [...updated[index].skillList, trimmed],
    };

    setSkills(updated);
    setInput("");
  };

  const removeSkillItem = (skillToRemove: string) => {
    const updated = [...skills];

    updated[index] = {
      ...updated[index],
      skillList: updated[index].skillList.filter(
        (skill) => skill !== skillToRemove,
      ),
    };

    setSkills(updated);
  };

  const [input, setInput] = useState("");
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

        <span className="card-title">{item.groupName || "Skill Group"}</span>

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
            onClick={removeSkillGroup}
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
          <div className="field-row">
            <label>Group Name</label>
            <input
              type="text"
              value={item.groupName}
              onChange={(e) => updateField("groupName", e.target.value)}
            />
          </div>

          <label>Skills</label>
          {item.skillList.length > 0 && (
            <div style={{ marginBottom: ".4rem" }}>
              {item.skillList.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                  <button type="button" onClick={() => removeSkillItem(skill)}>
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}

          <div style={{ display: "flex", gap: ".4rem" }}>
            <input
              type="text"
              value={input}
              placeholder="Skill, another skill…"
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={addSkill}
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillCard;
