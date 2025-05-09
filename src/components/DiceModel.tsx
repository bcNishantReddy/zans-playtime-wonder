
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

const DiceModel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isMobile) return; // Don't initialize Three.js on mobile
    
    // Create scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(320, 320);
    
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(renderer.domElement);
    }
    
    // Create dice cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    
    // Load textures for each side of the dice
    const textureLoader = new THREE.TextureLoader();
    const materials = [
      new THREE.MeshBasicMaterial({ map: textureLoader.load('/lovable-uploads/fafd864b-97ef-40ef-82ba-1ee14117e0da.png') }), // Scorpion
      new THREE.MeshBasicMaterial({ map: textureLoader.load('/lovable-uploads/04901a41-5973-4747-9ecb-9dfde54a02e5.png') }), // Airplane
      new THREE.MeshBasicMaterial({ map: textureLoader.load('/lovable-uploads/12bc4bcb-4fdd-43b2-8642-71b1841f53f3.png') }), // Castle
      new THREE.MeshBasicMaterial({ map: textureLoader.load('/lovable-uploads/493a61e2-a312-4862-af80-1997023506af.png') }), // Dinosaur
      new THREE.MeshBasicMaterial({ map: textureLoader.load('/lovable-uploads/78518b91-3e33-4318-8dd1-da71db71d565.png') }), // Footprint
      new THREE.MeshBasicMaterial({ map: textureLoader.load('/lovable-uploads/04901a41-5973-4747-9ecb-9dfde54a02e5.png') })  // Spiral (using airplane as fallback)
    ];
    
    const dice = new THREE.Mesh(geometry, materials);
    scene.add(dice);
    
    camera.position.z = 2.5;
    
    // Auto-rotation
    let autoRotate = true;
    let rotationSpeed = 0.01;
    
    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      autoRotate = false;
      dice.rotation.x += mouseY * 0.03;
      dice.rotation.y += mouseX * 0.03;
      
      // Reset auto-rotation after a delay
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        autoRotate = true;
      }, 2000);
    };
    
    // Reactivate auto-rotation after mouse leave
    let timeoutId: ReturnType<typeof setTimeout>;
    
    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
    }
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (autoRotate) {
        dice.rotation.x += 0.01;
        dice.rotation.y += 0.01;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        if (containerRef.current.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement);
        }
      }
      clearTimeout(timeoutId);
      renderer.dispose();
    };
  }, [isMobile]);

  if (isMobile) {
    // Fallback static image for mobile
    return (
      <div className="w-64 h-64 mx-auto relative">
        <div className="w-full h-full bg-gradient-to-br from-zans-lightpink to-zans-lightblue rounded-2xl p-4 flex items-center justify-center shadow-lg animate-float">
          <img 
            src="/lovable-uploads/12bc4bcb-4fdd-43b2-8642-71b1841f53f3.png" 
            alt="ZANS Storytelling Dice" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="w-64 h-64 mx-auto cursor-pointer"
      style={{ perspective: '1000px' }}
    ></div>
  );
};

export default DiceModel;
