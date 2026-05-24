import { useEffect, useState } from "react";
import type { CertificationForm } from "../../../../types/resume";
import CertificationCard from "./components/CertificationCard";

import {
  DndContext,
  closestCenter,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

type CertificationTabProps = {
  certifications: CertificationForm[];
  setCertifications: (value: CertificationForm[]) => void;
};

function Certification({
  certifications,
  setCertifications,
}: CertificationTabProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openCards, setOpenCards] = useState<string[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 6,
      },
    }),
  );

  // ----- START Normalize Certification IDs -----
  useEffect(() => {
    const hasMissingIds = certifications.some((item) => !item.id);

    if (!hasMissingIds) return;

    const normalizedCertification = certifications.map((item) => {
      if (item.id) return item;

      return {
        ...item,
        id: crypto.randomUUID(),
      };
    });

    setCertifications(normalizedCertification);
  }, [certifications, setCertifications]);

  // ----- END Normalize Certification IDs -----

  // ----- START Card Toggle Logic -----
  const toggleCard = (id: string) => {
    setOpenCards((prev) => {
      const isOpen = prev.includes(id);

      if (isOpen) {
        return prev.filter((openId) => openId !== id);
      }

      return [...prev, id];
    });
  };

  // ----- END Card Toggle Logic -----

  // ----- START Add Certification -----
  const addCertification = () => {
    const newCertification: CertificationForm = {
      id: crypto.randomUUID(),
      name: "",
      issuer: "",
      date: "",
    };

    const updated = [...certifications, newCertification];
    setCertifications(updated);
    setOpenCards((prev) => [...prev, newCertification.id]);
  };
  // ----- END Add Certification -----

  // ----- START Drag Handlers -----
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(String(event.active.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveId(null);

    if (!over || active.id === over.id) return;

    const oldIndex = certifications.findIndex((item) => item.id === active.id);
    const newIndex = certifications.findIndex((item) => item.id === over.id);

    if (oldIndex === -1 || newIndex === -1) return;

    setCertifications(arrayMove(certifications, oldIndex, newIndex));
  };

  // ----- END Drag Handlers -----

  const activeItem = certifications.find((item) => item.id === activeId);

  // Don't render sortable list until ids are ready
  const idsReady = certifications.every((item) => !!item.id);

  return (
    <>
      <div className="section-card">
        <button
          type="button"
          className="section-header"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Certifications</span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div className="section-body">
            {idsReady && certifications.length > 0 && (
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={certifications.map((item) => item.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {certifications.map((item, index) => (
                    <CertificationCard
                      key={item.id}
                      item={item}
                      index={index}
                      certifications={certifications}
                      setCertifications={setCertifications}
                      isOpen={openCards.includes(item.id)}
                      toggleCard={toggleCard}
                      setOpenCards={setOpenCards}
                    />
                  ))}
                </SortableContext>

                <DragOverlay>
                  {activeItem ? (
                    <div
                      className="card open"
                      style={{ pointerEvents: "none" }}
                    >
                      <div className="card-header">
                        <span className="drag-handle">⠿</span>

                        <span className="card-title">
                          {activeItem.name || "Certification"}
                        </span>
                      </div>
                    </div>
                  ) : null}
                </DragOverlay>
              </DndContext>
            )}

            <button
              className="btn btn-secondary btn-sm"
              type="button"
              onClick={addCertification}
            >
              + Add certification
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Certification;
