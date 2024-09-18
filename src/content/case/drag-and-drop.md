---
title: "Case study: Implementing Drag and Drop for wish reordering on oenskelisten.dk
"
description: "A case study on developing a user-friendly, feature-rich online wishlist platform for the Danish market."
publishDate: 2024-09-24
image:
  src: "/images/cases/drag-and-drop.png"
  alt: "Screenshot of Ønskelisten homepage"
productionUrl: "https://oenskelisten.dk/changelog/drag-and-drop"
featured: true
---

oenskelisten.dk is a website that allows users to create and manage wish lists. As the platform grew, users expressed a desire for more control over the order of their wishes.

# Problem Statement
Users wanted the ability to reorder their wishes easily, but the existing system did not provide this functionality. This limitation was causing user frustration and potentially impacting user engagement with the platform.

# Objectives

1. Implement a user-friendly way for users to reorder their wishes
2. Improve user satisfaction and engagement with the wish list feature
3. Maintain or improve the overall user experience of the website

# Solution
After considering various options, the decision was made to implement a drag and drop component. This solution would allow users to intuitively reorder their wishes by simply clicking and dragging items to new positions within their list.

**See the solution code in the bottom of the page**



# Key Features of the Solution:

* Created a reusable component for the functionality
* Automatic saving of the new order after each change
* Responsive design to work on both desktop and mobile devices

# Implementation Process

1. Research and selection of an appropriate drag and drop library
2. Design of the user interface for the drag and drop functionality
3. Integration of the drag and drop component into the existing wish list page
4. Development of backend API to save the new order
5. Extensive testing on various devices and browsers
6. Gradual rollout to users with feedback collection

# Solution code

```ts
"use client";

import type {
  DndContextProps,
  DraggableSyntheticListeners,
  DropAnimation,
  UniqueIdentifier,
} from "@dnd-kit/core";
import type { SortableContextProps } from "@dnd-kit/sortable";
import type { SlotProps } from "@radix-ui/react-slot";
import * as React from "react";
import {
  closestCenter,
  defaultDropAnimationSideEffects,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Slot } from "@radix-ui/react-slot";

import type { ButtonProps } from "./button";
import { composeRefs } from "../../compose-refs";
import { cn } from "../../utils";
import { Button } from "./button";

interface SortableProps<TData extends { id: UniqueIdentifier }>
  extends DndContextProps {
  /**
   * An array of data items that the sortable component will render.
   * @example
   * value={[
   *   { id: 1, name: 'Item 1' },
   *   { id: 2, name: 'Item 2' },
   * ]}
   */
  value: TData[];

  /**
   * An optional callback function that is called when the order of the data items changes.
   * It receives the new array of items as its argument.
   * @example
   * onValueChange={(items) => console.log(items)}
   */
  onValueChange?: (items: TData[]) => void;

  /**
   * An optional callback function that is called when an item is moved.
   * It receives an event object with `activeIndex` and `overIndex` properties, representing the original and new positions of the moved item.
   * This will override the default behavior of updating the order of the data items.
   * @type (event: { activeIndex: number; overIndex: number }) => void
   * @example
   * onMove={(event) => console.log(`Item moved from index ${event.activeIndex} to index ${event.overIndex}`)}
   */
  onMove?: (event: { activeIndex: number; overIndex: number }) => void;

  /**
   * A collision detection strategy that will be used to determine the closest sortable item.
   * @default closestCenter
   * @type DndContextProps["collisionDetection"]
   */
  collisionDetection?: DndContextProps["collisionDetection"];

  /**
   * An array of modifiers that will be used to modify the behavior of the sortable component.
   * @default
   * [restrictToVerticalAxis, restrictToParentElement]
   * @type Modifier[]
   */
  modifiers?: DndContextProps["modifiers"];

  /**
   * A sorting strategy that will be used to determine the new order of the data items.
   * @default verticalListSortingStrategy
   * @type SortableContextProps["strategy"]
   */
  strategy?: SortableContextProps["strategy"];

  /**
   * An optional React node that is rendered on top of the sortable component.
   * It can be used to display additional information or controls.
   * @default null
   * @type React.ReactNode | null
   * @example
   * overlay={<Skeleton className="w-full h-8" />}
   */
  overlay?: React.ReactNode | null;
}

function Sortable<TData extends { id: UniqueIdentifier }>({
  value,
  onValueChange,
  collisionDetection = closestCenter,
  modifiers = [restrictToParentElement],
  strategy = rectSortingStrategy,
  onMove,
  children,
  overlay,
  ...props
}: SortableProps<TData>) {
  const [activeId, setActiveId] = React.useState<UniqueIdentifier | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor),
  );

  return (
    <DndContext
      modifiers={modifiers}
      sensors={sensors}
      onDragStart={({ active }) => setActiveId(active.id)}
      onDragEnd={({ active, over }) => {
        if (over && active.id !== over?.id) {
          const activeIndex = value.findIndex((item) => item.id === active.id);
          const overIndex = value.findIndex((item) => item.id === over.id);

          if (onMove) {
            onMove({ activeIndex, overIndex });
          } else {
            onValueChange?.(arrayMove(value, activeIndex, overIndex));
          }
        }
        setActiveId(null);
      }}
      onDragCancel={() => setActiveId(null)}
      collisionDetection={collisionDetection}
      {...props}
    >
      <SortableContext items={value} strategy={strategy}>
        {children}
      </SortableContext>
      {overlay ? (
        <SortableOverlay activeId={activeId}>{overlay}</SortableOverlay>
      ) : null}
    </DndContext>
  );
}

const dropAnimationOpts: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.4",
      },
    },
  }),
};

interface SortableOverlayProps
  extends React.ComponentPropsWithRef<typeof DragOverlay> {
  activeId?: UniqueIdentifier | null;
}

function SortableOverlay({
  activeId,
  dropAnimation = dropAnimationOpts,
  children,
  ...props
}: SortableOverlayProps) {
  return (
    <DragOverlay dropAnimation={dropAnimation} {...props}>
      {activeId ? (
        <SortableItem value={activeId} asChild>
          {children}
        </SortableItem>
      ) : null}
    </DragOverlay>
  );
}

interface SortableItemContextProps {
  attributes: React.HTMLAttributes<HTMLElement>;
  listeners: DraggableSyntheticListeners | undefined;
}

const SortableItemContext = React.createContext<SortableItemContextProps>({
  attributes: {},
  listeners: undefined,
});

function useSortableItem() {
  const context = React.useContext(SortableItemContext);

  if (!context) {
    throw new Error("useSortableItem must be used within a SortableItem");
  }

  return context;
}

interface SortableItemProps extends SlotProps {
  value: UniqueIdentifier;
  asChild?: boolean;
}

const SortableItem = React.forwardRef<HTMLDivElement, SortableItemProps>(
  ({ asChild, className, value, ...props }, ref) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id: value });

    const context = React.useMemo(
      () => ({
        attributes,
        listeners,
      }),
      [attributes, listeners],
    );
    const style: React.CSSProperties = {
      opacity: isDragging ? 0.4 : undefined,
      transform: CSS.Translate.toString(transform),
      transition,
    };

    const Comp = asChild ? Slot : "div";

    return (
      <SortableItemContext.Provider value={context}>
        <Comp
          className={cn(isDragging && "cursor-grabbing", className)}
          ref={composeRefs(ref, setNodeRef as React.Ref<HTMLDivElement>)}
          style={style}
          {...props}
        />
      </SortableItemContext.Provider>
    );
  },
);
SortableItem.displayName = "SortableItem";

interface SortableDragHandleProps extends SlotProps {
  asChild?: boolean;
}

const SortableDragHandle = React.forwardRef<
  HTMLDivElement,
  SortableDragHandleProps
>(({ className, asChild, ...props }, ref) => {
  const { attributes, listeners } = useSortableItem();

  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={composeRefs(ref)}
      className={cn("cursor-grab", className)}
      {...attributes}
      {...listeners}
      {...props}
    />
  );
});
SortableDragHandle.displayName = "SortableDragHandle";

export { Sortable, SortableDragHandle, SortableItem, SortableOverlay };
```