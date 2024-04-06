import React, { useEffect, useRef } from "react";
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
      window.innerWidth / 6 / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 6, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    // Adjust camera
    camera.position.z = 5;

    // Create a sprite
    const spriteMap = new THREE.TextureLoader().load(spritePng);
    const spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap });
    const sprite = new THREE.Sprite(spriteMaterial);
    scene.add(sprite);

    window.addEventListener("mousemove", (event: MouseEvent) => {
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Animation loop
    const animate = (time: number) => {
      requestAnimationFrame(animate);

      // Floating effect with bounds
      const amplitude = 0.3; // Control the movement extent
      const speed = 0.001; // Control the movement speed
      sprite.position.x = amplitude * Math.sin(time * speed);
      // Ensure the sprite follows the mouse vertically within bounds
      sprite.position.y = Math.max(Math.min(mouseY * camera.position.z, 2), -2);

      renderer.render(scene, camera);
    };
    animate(0);

    // Mouse move event
    const onMouseMove = (event: MouseEvent) => {
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      sprite.position.y = mouseY * (camera.aspect * camera.position.z);
    };
    window.addEventListener("mousemove", onMouseMove);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ height: "100vh", width: "100%" }} />;
};

export default FloatingSprite;
