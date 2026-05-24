import type React from "react";
import type { CertificationForm } from "../../../../../types/resume";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
type Props = {
  item: CertificationForm;
  index: number;
  certifications: CertificationForm[];
  setCertifications: (value: CertificationForm[]) => void;
  isOpen: boolean;
  toggleCard: (id: string) => void;
  setOpenCards: React.Dispatch<React.SetStateAction<string[]>>;
};

function CertificationCard({
  item,
  index,
  certifications,
  setCertifications,
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

  const updateField = (field: keyof CertificationForm, value: any) => {
    const updated = [...certifications];
    updated[index] = { ...updated[index], [field]: value };
    setCertifications(updated);
  };

  const removeCertification = () => {
    setCertifications(certifications.filter((_, i) => i !== index));
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

        <span className="card-title">{item.name || "Certification"}</span>

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
            onClick={removeCertification}
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
            <label>Name</label>
            <input
              type="text"
              value={item.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
          </div>

          <div className="field-grid">
            <div>
              <label>Issuer</label>
              <input
                type="text"
                placeholder="Amazon"
                value={item.issuer}
                onChange={(e) => updateField("issuer", e.target.value)}
              />
            </div>
            <div>
              <label>Date</label>
              <input
                type="date"
                value={item.date}
                onChange={(e) => updateField("date", e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CertificationCard;
