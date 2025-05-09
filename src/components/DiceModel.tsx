
import React, { useEffect, useRef } from 'react';

const DiceModel: React.FC = () => {
  const diceRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (diceRef.current) {
        // Randomly rotate the dice
        const randomX = Math.floor(Math.random() * 4) * 90;
        const randomY = Math.floor(Math.random() * 4) * 90;
        diceRef.current.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg)`;
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scene w-48 h-48 md:w-64 md:h-64 mx-auto perspective-500 my-8">
      <div 
        ref={diceRef}
        className="cube w-full h-full relative transform-style-3d transition-transform duration-1000"
        style={{ transform: 'rotateX(0deg) rotateY(0deg)' }}
      >
        {/* Front - Snake */}
        <div className="absolute w-full h-full flex items-center justify-center bg-zans-lightpink rounded-xl border-4 border-zans-pink transform translate-z-[32px] md:translate-z-[48px]">
          <div className="text-3xl md:text-4xl">🐍</div>
        </div>
        
        {/* Back - Airplane */}
        <div className="absolute w-full h-full flex items-center justify-center bg-zans-lightblue rounded-xl border-4 border-zans-blue transform rotateY-180 translate-z-[32px] md:translate-z-[48px]">
          <div className="text-3xl md:text-4xl">✈️</div>
        </div>
        
        {/* Right - Castle */}
        <div className="absolute w-full h-full flex items-center justify-center bg-zans-lightpink rounded-xl border-4 border-zans-pink transform rotateY-90 translate-z-[32px] md:translate-z-[48px]">
          <div className="text-3xl md:text-4xl">🏰</div>
        </div>
        
        {/* Left - Scorpion */}
        <div className="absolute w-full h-full flex items-center justify-center bg-zans-lightblue rounded-xl border-4 border-zans-blue transform rotateY-270 translate-z-[32px] md:translate-z-[48px]">
          <div className="text-3xl md:text-4xl">🦂</div>
        </div>
        
        {/* Top - Footprint */}
        <div className="absolute w-full h-full flex items-center justify-center bg-zans-lightpink rounded-xl border-4 border-zans-pink transform rotateX-90 translate-z-[32px] md:translate-z-[48px]">
          <div className="text-3xl md:text-4xl">👣</div>
        </div>
        
        {/* Bottom - Spiral */}
        <div className="absolute w-full h-full flex items-center justify-center bg-zans-lightblue rounded-xl border-4 border-zans-blue transform rotateX-270 translate-z-[32px] md:translate-z-[48px]">
          <div className="text-3xl md:text-4xl">🌀</div>
        </div>
      </div>
    </div>
  );
};

export default DiceModel;
