import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import spritePng from "./floatcat.png"; // Ensure this path is correct

const Header: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF5F3F4); 
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, 150); 

    mountRef.current?.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const spriteTexture = textureLoader.load(spritePng);

    const spriteMaterial = new THREE.SpriteMaterial({ map: spriteTexture });
    const sprite = new THREE.Sprite(spriteMaterial);
    scene.add(sprite);
    sprite.scale.set(1, 1, 1); 

    camera.position.z = 5;


    window.addEventListener("mousemove", (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      sprite.position.x = mouseX * (camera.aspect * camera.position.z);
      sprite.position.y = mouseY * (camera.position.z);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Clean up to prevent memory leaks
    return () => {
      window.removeEventListener("mousemove", animate);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ height: "150px", width: "100%" }} />;
};

export default Header;