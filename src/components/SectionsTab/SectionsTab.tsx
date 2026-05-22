import "./SectionsTab.css";

import { useState } from "react";

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
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

type Section = {
  id: string;
  label: string;
  enabled: boolean;
};

type SectionsTabProps = {
  sections: Section[];
  setSections: React.Dispatch<React.SetStateAction<Section[]>>;
};

type SortableItemProps = {
  section: Section;
  toggleSection: (id: string) => void;
};

function SortableItem({ section, toggleSection }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || "transform 200ms ease",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`section-order-item ${
        section.enabled ? "enabled" : ""
      } ${isDragging ? "dragging" : ""}`}
    >
      <span
        className="drag-handle"
        style={{ fontSize: ".8rem", cursor: "grab" }}
        {...attributes}
        {...listeners}
      >
        ⠿
      </span>

      <span className="soi-label">{section.label}</span>

      <button
        className="soi-toggle"
        onClick={() => toggleSection(section.id)}
      />
    </div>
  );
}

function SectionsTab({ sections, setSections }: SectionsTabProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 6, // smoother drag start
      },
    }),
  );

  const toggleSection = (id: string) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id ? { ...section, enabled: !section.enabled } : section,
      ),
    );
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveId(null);

    if (!over || active.id === over.id) return;

    setSections((items) => {
      const oldIndex = items.findIndex((item) => item.id === active.id);

      const newIndex = items.findIndex((item) => item.id === over.id);

      return arrayMove(items, oldIndex, newIndex);
    });
  };

  const activeItem = sections.find((s) => s.id === activeId);

  return (
    <div className="form-panel-inner">
      <div className="section-title">Section Visibility & Order</div>

      <p
        style={{
          fontSize: "0.8rem",
          color: "var(--text-2)",
          marginBottom: "0.75rem",
        }}
      >
        Drag to reorder. Toggle to show/hide.
      </p>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={sections.map((s) => s.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="section-order-list">
            {sections.map((section) => (
              <SortableItem
                key={section.id}
                section={section}
                toggleSection={toggleSection}
              />
            ))}
          </div>
        </SortableContext>

        {/* FLOATING DRAG PREVIEW */}
        <DragOverlay>
          {activeItem ? (
            <div className="section-order-item enabled dragging-overlay">
              {activeItem.label}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

export default SectionsTab;
