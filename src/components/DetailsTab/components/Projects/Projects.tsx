import { useEffect, useState } from "react";
import type { ProjectForm } from "../../../../types/resume";
import ProjectCard from "./components/ProjectCard";

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

type ProjectTabProps = {
  projects: ProjectForm[];
  setProjects: (value: ProjectForm[]) => void;
};

function Projects({ projects, setProjects }: ProjectTabProps) {
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

  // ----- START Normalize Project IDs -----
  useEffect(() => {
    const hasMissingIds = projects.some((item) => !item.id);

    if (!hasMissingIds) return;

    const normalizedProject = projects.map((item) => {
      if (item.id) return item;

      return {
        ...item,
        id: crypto.randomUUID(),
      };
    });

    setProjects(normalizedProject);
  }, [projects, setProjects]);

  // ----- END Normalize Project IDs -----

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

  // ----- START Add Project -----
  const addProject = () => {
    const newProject: ProjectForm = {
      id: crypto.randomUUID(),
      name: "",
      description: "",
      url: "",
    };

    const updated = [...projects, newProject];
    setProjects(updated);
    setOpenCards((prev) => [...prev, newProject.id]);
  };
  // ----- END Add Project -----

  // ----- START Drag Handlers -----
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(String(event.active.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveId(null);

    if (!over || active.id === over.id) return;

    const oldIndex = projects.findIndex((item) => item.id === active.id);
    const newIndex = projects.findIndex((item) => item.id === over.id);

    if (oldIndex === -1 || newIndex === -1) return;

    setProjects(arrayMove(projects, oldIndex, newIndex));
  };

  // ----- END Drag Handlers -----

  const activeItem = projects.find((item) => item.id === activeId);

  // Don't render sortable list until ids are ready
  const idsReady = projects.every((item) => !!item.id);

  return (
    <>
      <div className="section-card">
        <button
          type="button"
          className="section-header"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Projects</span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>

        {isOpen && (
          <div className="section-body">
            {idsReady && projects.length > 0 && (
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={projects.map((item) => item.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {projects.map((item, index) => (
                    <ProjectCard
                      key={item.id}
                      item={item}
                      index={index}
                      projects={projects}
                      setProjects={setProjects}
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
              onClick={addProject}
            >
              + Add project
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Projects;
