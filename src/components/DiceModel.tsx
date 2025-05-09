
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
    
    renderer.setSize(500, 500);
    
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(renderer.domElement);
    }

    // Create dice cube with slightly curved edges
    // Using BoxGeometry with more segments for better rounding effect
    const geometry = new THREE.BoxGeometry(1, 1, 1, 3, 3, 3);
    
    // Apply vertex displacement for slightly curved corners
    const positionAttribute = geometry.getAttribute('position');
    const vertex = new THREE.Vector3();
    
    for (let i = 0; i < positionAttribute.count; i++) {
      vertex.fromBufferAttribute(positionAttribute, i);
      
      // Calculate normalized position (distance from center)
      const x = Math.abs(vertex.x);
      const y = Math.abs(vertex.y);
      const z = Math.abs(vertex.z);
      
      // Reduce the radius value for less rounding - just curved edges
      const radius = 0.04; // Reduced from 0.08 for subtler edge rounding
      const factor = 1.0 - radius * (1.0 - Math.max(Math.max(x, y), z));
      
      vertex.normalize().multiplyScalar(factor);
      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    
    // Update geometry after modifications
    geometry.computeVertexNormals();

    // Load textures for each side of the dice with improved texture positioning
    const textureLoader = new THREE.TextureLoader();
    
    // Helper function to create materials with better texture positioning
    const createZoomedMaterial = (imgPath) => {
      const texture = textureLoader.load(imgPath);
      
      // Better visibility of the full image
      texture.repeat.set(0.95, 0.95);  // Less zoom for better visibility
      texture.center.set(0.5, 0.5);    // Center the texture
      texture.offset.set(0.025, 0.025); // Minimal offset
      
      return new THREE.MeshStandardMaterial({ 
        map: texture,
        roughness: 0.7,
        metalness: 0.1
      });
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
    
    // Add lights to better highlight the curved edges
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    
    // Add a directional light to create soft shadows and highlight the curved edges
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Position camera with positive z-axis value
    camera.position.z = 2.2; 

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
    // Improved mobile fallback
    return <div className="w-full aspect-square max-w-[300px] mx-auto relative">
        <img 
          src="/lovable-uploads/f57cd0fc-a889-4cd5-83df-dfd49c07e4ed.png" 
          alt="ZANS Storytelling Dice" 
          className="w-full h-full object-contain animate-pulse-slow"
        />
      </div>;
  }
  
  return <div ref={containerRef} className="w-full aspect-square max-w-[500px] mx-auto cursor-pointer" style={{
    perspective: '1000px'
  }}></div>;
};

export default DiceModel;
