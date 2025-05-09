
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
    
    // Increased size from 320 to 400
    renderer.setSize(400, 400);
    
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(renderer.domElement);
    }

    // Create dice cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // Load textures for each side of the dice with texture transformations
    const textureLoader = new THREE.TextureLoader();
    
    // Helper function to create materials with texture transformation
    const createZoomedMaterial = (imgPath) => {
      const texture = textureLoader.load(imgPath);
      
      // Center the texture and zoom in
      texture.repeat.set(0.8, 0.8);  // This zooms in the texture
      texture.center.set(0.5, 0.5);  // This centers the texture
      texture.offset.set(0.1, 0.1);  // Fine-tune the position
      
      return new THREE.MeshBasicMaterial({ map: texture });
    };
    
    const materials = [
      createZoomedMaterial('/lovable-uploads/f57cd0fc-a889-4cd5-83df-dfd49c07e4ed.png'),  // Spiral (purple)
      createZoomedMaterial('/lovable-uploads/6dd6e906-d9c9-44ff-afac-b92ac8a23311.png'),  // Scorpion (purple)
      createZoomedMaterial('/lovable-uploads/29e149c3-32db-4156-90c7-8b3ce07baa74.png'),  // Airplane (yellow)
      createZoomedMaterial('/lovable-uploads/e51611a5-c960-4216-8dee-b69478e399ce.png'),  // Castle (pink)
      createZoomedMaterial('/lovable-uploads/87e724dd-c150-4a33-9767-8fb6ef1ae72b.png'),  // Dinosaur (orange)
      createZoomedMaterial('/lovable-uploads/a67b729b-291e-422f-8fca-9498c1792fcd.png')   // Footprint (green)
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
      const mouseX = (event.clientX - rect.left) / rect.width * 2 - 1;
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
    return <div className="w-80 h-80 mx-auto relative">
        <img 
          src="/lovable-uploads/f57cd0fc-a889-4cd5-83df-dfd49c07e4ed.png" 
          alt="ZANS Storytelling Dice" 
          className="w-full h-full object-contain"
        />
      </div>;
  }
  
  // Increased size from w-64 h-64 to w-80 h-80
  return <div ref={containerRef} className="w-80 h-80 mx-auto cursor-pointer" style={{
    perspective: '1000px'
  }}></div>;
};

export default DiceModel;
