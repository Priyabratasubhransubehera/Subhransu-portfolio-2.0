import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail point
      const newPoint = { x: e.clientX, y: e.clientY, id: trailId++ };
      setTrail((prev) => [...prev.slice(-15), newPoint]);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Trail Effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed w-2 h-2 rounded-full pointer-events-none z-[9998] mix-blend-screen"
          style={{
            left: point.x,
            top: point.y,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, rgba(0, 245, 255, ${0.6 - index * 0.04}) 0%, transparent 70%)`,
            opacity: 0.6 - index * 0.04,
          }}
        />
      ))}
      
      {/* Main Cursor */}
      <div
        className="fixed w-8 h-8 pointer-events-none z-[9999] transition-transform duration-200"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#00F5FF] animate-pulse" 
          style={{
            boxShadow: '0 0 20px rgba(0, 245, 255, 0.6), inset 0 0 20px rgba(0, 245, 255, 0.3)',
          }}
        />
        <div className="absolute inset-2 rounded-full bg-[#00F5FF] opacity-20 blur-sm" />
      </div>

      {/* Outer Ring */}
      <div
        className="fixed w-12 h-12 pointer-events-none z-[9997] transition-all duration-300"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.8 : 1})`,
        }}
      >
        <div className="absolute inset-0 rounded-full border border-[#7B2EFF] opacity-30" 
          style={{
            boxShadow: '0 0 30px rgba(123, 46, 255, 0.4)',
          }}
        />
      </div>
    </>
  );
}
