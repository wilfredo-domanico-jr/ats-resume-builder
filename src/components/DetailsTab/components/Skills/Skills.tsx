import "./Skills.css";
import { useEffect, useState } from "react";
import type { SkillsForm } from "../../../../types/resume";
import SkillCard from "./components/SkillCard";
import { useResume } from "../../../../hooks/useResume";

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

type SkillsTabProps = {
  skills: SkillsForm[];
  setSkills: (value: SkillsForm[]) => void;
};

function Skills({ skills, setSkills }: SkillsTabProps) {
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

  // ----- START Normalize Skill IDs -----
  useEffect(() => {
    const hasMissingIds = skills.some((item) => !item.id);

    if (!hasMissingIds) return;

    const normalizedSkill = skills.map((item) => {
      if (item.id) return item;

      return {
        ...item,
        id: crypto.randomUUID(),
      };
    });

    setSkills(normalizedSkill);
  }, [skills, setSkills]);

  // ----- END Normalize Skill IDs -----

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

  // ----- START Add Skill -----
  const addSkill = () => {
    const newSkill: SkillsForm = {
      id: crypto.randomUUID(),
      groupName: "",
      skillList: [],
    };

    const updated = [...skills, newSkill];
    setSkills(updated);
    setOpenCards((prev) => [...prev, newSkill.id]);
  };
  // ----- END Add Skill -----

  // ----- START Drag Handlers -----
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(String(event.active.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveId(null);

    if (!over || active.id === over.id) return;

    const oldIndex = skills.findIndex((item) => item.id === active.id);
    const newIndex = skills.findIndex((item) => item.id === over.id);

    if (oldIndex === -1 || newIndex === -1) return;

    setSkills(arrayMove(skills, oldIndex, newIndex));
  };

  // ----- END Drag Handlers -----

  const activeItem = skills.find((item) => item.id === activeId);

  // Don't render sortable list until ids are ready
  const idsReady = skills.every((item) => !!item.id);

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
            {idsReady && skills.length > 0 && (
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={skills.map((item) => item.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {skills.map((item, index) => (
                    <SkillCard
                      key={item.id}
                      item={item}
                      index={index}
                      skills={skills}
                      setSkills={setSkills}
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
                          {activeItem.groupName || "Skill Group"}
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
              onClick={addSkill}
            >
              + Add entry
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Skills;
