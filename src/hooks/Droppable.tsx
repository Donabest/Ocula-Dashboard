import { useDroppable } from "@dnd-kit/react";
import type React from "react";

export function Droppable({
  id,
  children,
}: {
  id: string | number;
  children: React.ReactNode;
}) {
  const { ref } = useDroppable({
    id,
  });
  return <div ref={ref}>{children}</div>;
}
