import { useEffect, useState } from "react";
import type { ExperienceForm } from "../../../../types/resume";
import ExperienceCard from "./components/ExperienceCard";

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

type ExperienceTabProps = {
  experience: ExperienceForm[];
  setExperience: (value: ExperienceForm[]) => void;
};

function Experience({ experience, setExperience }: ExperienceTabProps) {
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

  // ----- START Normalize Experience IDs -----
  useEffect(() => {
    const hasMissingIds = experience.some((item) => !item.id);

    if (!hasMissingIds) return;

    const normalizedExperience = experience.map((item) => {
      if (item.id) return item;

      return {
        ...item,
        id: crypto.randomUUID(),
      };
    });

    setExperience(normalizedExperience);
  }, [experience, setExperience]);

  // ----- END Normalize Experience IDs -----

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

  // ----- START Add Role -----
  const addRole = () => {
    const newRole: ExperienceForm = {
      id: crypto.randomUUID(),
      jobTitle: "",
      company: "",
      employmentType: "",
      startDate: "",
      endDate: null,
      currentlyWorking: false,
      bulletPoints: [],
    };

    const updated = [...experience, newRole];
    setExperience(updated);
    setOpenCards((prev) => [...prev, newRole.id]);
  };
  // ----- END Add Role -----

  // ----- START Drag Handlers -----
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(String(event.active.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveId(null);

    if (!over || active.id === over.id) return;

    const oldIndex = experience.findIndex((item) => item.id === active.id);
    const newIndex = experience.findIndex((item) => item.id === over.id);

    if (oldIndex === -1 || newIndex === -1) return;

    setExperience(arrayMove(experience, oldIndex, newIndex));
  };

  // ----- END Drag Handlers -----
  const activeItem = experience.find((item) => item.id === activeId);

  // Don't render sortable list until ids are ready
  const idsReady = experience.every((item) => !!item.id);

  return (
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
          {idsReady && experience.length > 0 && (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={experience.map((item) => item.id)}
                strategy={verticalListSortingStrategy}
              >
                {experience.map((item, index) => (
                  <ExperienceCard
                    key={item.id}
                    item={item}
                    index={index}
                    experience={experience}
                    setExperience={setExperience}
                    isOpen={openCards.includes(item.id)}
                    toggleCard={toggleCard}
                    setOpenCards={setOpenCards}
                  />
                ))}
              </SortableContext>

              <DragOverlay>
                {activeItem ? (
                  <div className="card open" style={{ pointerEvents: "none" }}>
                    <div className="card-header">
                      <span className="drag-handle">⠿</span>

                      <span className="card-title">
                        {activeItem.jobTitle || "New Role"}
                        {activeItem.company && ` @ ${activeItem.company}`}
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
            onClick={addRole}
          >
            + Add role
          </button>
        </div>
      )}
    </div>
  );
}

export default Experience;
