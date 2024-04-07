import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import spritePng from "./floatcat.png";

const FloatingSprite: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    let mouseY = 0;
    // Scene, camera, and renderer setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF5F3F4); 
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth , window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    // Adjust camera
    camera.position.z = 5;

    const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x222222 }), 
      new THREE.MeshBasicMaterial({ color: 0x444444 }),
      new THREE.MeshBasicMaterial({ color: 0x666666 }),
      new THREE.MeshBasicMaterial({ color: 0x888888 }),
      new THREE.MeshBasicMaterial({ color: 0xAAAAAA }),
      new THREE.MeshBasicMaterial({ color: 0xCCCCCC })  
    ];

    
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    window.addEventListener("mousemove", (event: MouseEvent) => {
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });


    // Animation loop
    const animate = (time: number) => {
      requestAnimationFrame(animate);

      // Floating effect with bounds
      const amplitude = 0.24; // Control the movement extent
      const speed = 0.001; // Control the movement speed
      cube.position.x = amplitude * Math.sin(time * speed);
      // Ensure the sprite follows the mouse vertically within bounds
      cube.position.y = Math.max(Math.min(mouseY * camera.position.z, 3.5), -3.5);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
     
      renderer.render(scene, camera);
    };
    animate(0);

    // Mouse move event
    const onMouseMove = (event: MouseEvent) => {
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      cube.position.y = mouseY * (camera.aspect * camera.position.z);
    };
    window.addEventListener("mousemove", onMouseMove);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}    style={{ 
    height: "100vh", 
    width: "100%", 
    position: 'fixed',
    top: 0, 
    left: 0, 
  }}  />;
};

export default FloatingSprite;
