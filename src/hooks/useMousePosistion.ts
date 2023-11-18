import { useEffect, useState } from "react";

interface MousePosition {
    x: number,
    y: number,
}

export default function useMousePosition(): MousePosition {
    const [mousePosition, setMousePosition] = useState<MousePosition>({x: 0, y: 0})

    useEffect(() => {
        const setFromEvent = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", setFromEvent);
    
        return () => {
          window.removeEventListener("mousemove", setFromEvent);
        };
      }, []);

    return mousePosition
}