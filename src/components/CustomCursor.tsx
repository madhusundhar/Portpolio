import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPosition, setTrailingPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer desktop devices and not reduced-motion
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return;

    setIsDesktop(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = 
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') !== null ||
          target.closest('button') !== null ||
          target.getAttribute('role') === 'button';
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Trailing ring animation
  useEffect(() => {
    if (!isDesktop) return;

    let animId: number;
    const animate = () => {
      setTrailingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18
      }));
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [position, isDesktop]);

  if (!isDesktop || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Central pinpoint dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 transition-opacity duration-150 ${
          isPointer ? 'scale-150 bg-violet-400' : 'scale-100'
        }`}
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`
        }}
      />

      {/* Smooth trailing glow ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-violet-400/40 bg-violet-500/[0.04] transition-all duration-100 ease-out ${
          isPointer ? 'w-10 h-10 border-cyan-400/60 scale-125' : 'w-7 h-7'
        }`}
        style={{
          transform: `translate3d(${trailingPosition.x - (isPointer ? 20 : 14)}px, ${
            trailingPosition.y - (isPointer ? 20 : 14)
          }px, 0)`
        }}
      />
    </div>
  );
};

