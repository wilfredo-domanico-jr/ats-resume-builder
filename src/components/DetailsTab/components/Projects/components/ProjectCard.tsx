import type React from "react";
import type { ProjectForm } from "../../../../../types/resume";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
type Props = {
  item: ProjectForm;
  index: number;
  projects: ProjectForm[];
  setProjects: (value: ProjectForm[]) => void;
  isOpen: boolean;
  toggleCard: (id: string) => void;
  setOpenCards: React.Dispatch<React.SetStateAction<string[]>>;
};

function ProjectCard({
  item,
  index,
  projects,
  setProjects,
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

  const updateField = (field: keyof ProjectForm, value: any) => {
    const updated = [...projects];
    updated[index] = { ...updated[index], [field]: value };
    setProjects(updated);
  };

  const removeProject = () => {
    setProjects(projects.filter((_, i) => i !== index));
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

        <span className="card-title">{item.name || "Project"}</span>

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
            onClick={removeProject}
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
            <label>Project Name</label>
            <input
              type="text"
              value={item.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
          </div>

          <div className="field-row">
            <label>Description</label>
            <textarea
              rows={2}
              value={item.description}
              onChange={(e) => updateField("description", e.target.value)}
            ></textarea>
          </div>

          <div className="field-row">
            <label>URL</label>
            <input
              type="url"
              value={item.url}
              onChange={(e) => updateField("url", e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
