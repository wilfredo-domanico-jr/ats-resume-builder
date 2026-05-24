import { useEffect, useState } from "react";
import type { EducationForm } from "../../../../types/resume";
import EducationCard from "./components/EducationCard";

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

type EducationTabProps = {
  education: EducationForm[];
  setEducation: (value: EducationForm[]) => void;
};
function Education({ education, setEducation }: EducationTabProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [openCards, setOpenCards] = useState<string[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 6,
      },
    }),
  );

  // ----- START Normalize Education IDs -----
  useEffect(() => {
    const hasMissingIds = education.some((item) => !item.id);

    if (!hasMissingIds) return;

    const normalizedEducation = education.map((item) => {
      if (item.id) return item;

      return {
        ...item,
        id: crypto.randomUUID(),
      };
    });

    setEducation(normalizedEducation);
  }, [education, setEducation]);

  // ----- END Normalize Education IDs -----

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

  // ----- START Add Education -----
  const addEducation = () => {
    const newEducation: EducationForm = {
      id: crypto.randomUUID(),
      degree: "",
      school: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
    };

    const updated = [...education, newEducation];
    setEducation(updated);
    setOpenCards((prev) => [...prev, newEducation.id]);
  };
  // ----- END Add Education -----

  // ----- START Drag Handlers -----
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(String(event.active.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveId(null);

    if (!over || active.id === over.id) return;

    const oldIndex = education.findIndex((item) => item.id === active.id);
    const newIndex = education.findIndex((item) => item.id === over.id);

    if (oldIndex === -1 || newIndex === -1) return;

    setEducation(arrayMove(education, oldIndex, newIndex));
  };

  // ----- END Drag Handlers -----

  const activeItem = education.find((item) => item.id === activeId);

  // Don't render sortable list until ids are ready
  const idsReady = education.every((item) => !!item.id);

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
            {idsReady && education.length > 0 && (
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={education.map((item) => item.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {education.map((item, index) => (
                    <EducationCard
                      key={item.id}
                      item={item}
                      index={index}
                      education={education}
                      setEducation={setEducation}
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
                          {activeItem.degree || "Degree"}
                          {activeItem.school && ` @ ${activeItem.school}`}
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
              onClick={addEducation}
            >
              + Add entry
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Education;
