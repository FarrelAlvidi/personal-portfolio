"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import gsap from "gsap";

interface SpotlightTextProps {
  children: string;
  className?: string;
  spotlightSize?: number; // dalam pixel, default 150
}

export default function SpotlightText({ 
  children, 
  className = "",
  spotlightSize = 150 
}: SpotlightTextProps) {
  // State untuk posisi mouse dalam PERSENTASE
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    
    // Hitung posisi relatif
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Konversi ke persentase
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    
    setMousePos({ x: xPercent, y: yPercent });
  }, []);

  // Animate clip-path dengan GSAP
  useEffect(() => {
    if (!highlightRef.current || !isHovering) return;
    
    gsap.to(highlightRef.current, {
      clipPath: `circle(${spotlightSize}px at ${mousePos.x}% ${mousePos.y}%)`,
      duration: 2,
      ease: "power2.out"
    });
  }, [mousePos, isHovering, spotlightSize]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative ${className}`}
    >
      {/* Layer 1: Dark Text */}
      <div className="text-neutral-500">
        {children}
      </div>
      
      {/* Layer 2: Light Text with Spotlight */}
      <div
        ref={highlightRef}
        className="absolute top-0 left-0  text-white/50 pointer-events-none"
        style={{
          clipPath: isHovering 
            ? `circle(${spotlightSize}px at ${mousePos.x}% ${mousePos.y}%)`
            : 'circle(0px at 50% 50%)'
        }}
      >
        {children}
      </div>
    </div>
  );
}