"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
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
      <div className="cursor-inner fixed z-50 border border-white rounded-full w-12 h-12 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"></div>
    </>
  );
}
