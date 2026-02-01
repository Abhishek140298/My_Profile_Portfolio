import React, { useEffect, useRef, useState } from "react";
import "./CursorGlow.css";

function lerp(current, target, factor) {
  return current + (target - current) * factor;
}

function CursorGlow() {
  const glowRef = useRef(null);
  const dotRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const animate = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.15);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.15);
      const { x, y } = pos.current;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    document.body.classList.add("cursor-glow-active");
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("cursor-glow-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="cursor-glow-wrapper">
      <div
        ref={glowRef}
        className={`cursor-glow ${visible ? "cursor-glow--visible" : ""}`}
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className={`cursor-glow-dot ${visible ? "cursor-glow--visible" : ""}`}
        aria-hidden="true"
      />
    </div>
  );
}

export default CursorGlow;
