"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  // Throttle mouse move events for better performance
  const throttledMouseMove = useCallback((e: MouseEvent) => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    
    animationFrameId.current = requestAnimationFrame(() => {
      setPos({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", throttledMouseMove);
    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [throttledMouseMove]);

  useEffect(() => {
    // Only animate if position actually changed
    if (pos.x === 0 && pos.y === 0) return;
    
    // lingkaran besar
    gsap.to(".cursor", {
      x: pos.x,
      y: pos.y,
      duration: 0.2,
      ease: "power3.out",
    });
    // titik kecil di tengah (lebih lambat sedikit)
    gsap.to(".cursor-inner", {
      x: pos.x,
      y: pos.y,
      duration: 0.4,
      ease: "power2.out",
    });
  }, [pos]);

  return (
    <>
      {/* Titik kecil di tengah */}
      <div className="cursor fixed z-50 bg-white w-1 h-1 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"></div>
      {/* Lingkaran besar */}
      <div className="cursor-inner fixed z-50 border border-white rounded-full w-14 h-14 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"></div>
    </>
  );
}
