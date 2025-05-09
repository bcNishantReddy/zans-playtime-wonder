
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

const DiceModel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!containerRef.current || isMobile) return; // Don't initialize Three.js on mobile
    
    // Create scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    
    // Set size based on device
    const size = 500;
    renderer.setSize(size, size);
    
    // Clear container and append renderer
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);

    // Create dice cube with slightly curved edges
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

      // Reduced radius value for subtler edge rounding
      const radius = 0.04;
      const factor = 1.0 - radius * (1.0 - Math.max(Math.max(x, y), z));
      vertex.normalize().multiplyScalar(factor);
      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    // Update geometry after modifications
    geometry.computeVertexNormals();

    // Load textures for each side of the dice
    const textureLoader = new THREE.TextureLoader();

    // Helper function to create materials with better texture positioning
    const createZoomedMaterial = imgPath => {
      const texture = textureLoader.load(imgPath);

      // Better visibility of the full image
      texture.repeat.set(0.92, 0.92); // Less zoom for better visibility
      texture.center.set(0.5, 0.5); // Center the texture
      texture.offset.set(0.04, 0.04); // Minimal offset

      return new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.7,
        metalness: 0.1
      });
    };
    
    const materials = [
      createZoomedMaterial('/lovable-uploads/f57cd0fc-a889-4cd5-83df-dfd49c07e4ed.png'),
      createZoomedMaterial('/lovable-uploads/6dd6e906-d9c9-44ff-afac-b92ac8a23311.png'),
      createZoomedMaterial('/lovable-uploads/29e149c3-32db-4156-90c7-8b3ce07baa74.png'),
      createZoomedMaterial('/lovable-uploads/e51611a5-c960-4216-8dee-b69478e399ce.png'),
      createZoomedMaterial('/lovable-uploads/87e724dd-c150-4a33-9767-8fb6ef1ae72b.png'),
      createZoomedMaterial('/lovable-uploads/a67b729b-291e-422f-8fca-9498c1792fcd.png')
    ];
    
    const dice = new THREE.Mesh(geometry, materials);
    scene.add(dice);

    // Improved lighting to make the dice brighter and clearer
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    // Add brighter directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Position camera with positive z-axis value as requested
    camera.position.z = 100;

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
  
  // Mobile view - static image instead of 3D animation
  if (isMobile) {
    return (
      <div className="w-full flex items-center justify-center my-6">
        <img 
          src="/lovable-uploads/d53ae836-3b93-4660-b442-cff017f47c91.png" 
          alt="ZANS Logo" 
          className="w-48 h-48 object-contain"
        />
      </div>
    );
  }
  
  return (
    <div 
      ref={containerRef} 
      className="w-full aspect-square max-w-[500px] mx-auto cursor-pointer" 
      style={{ perspective: '1000px' }}
    />
  );
};

export default DiceModel;
