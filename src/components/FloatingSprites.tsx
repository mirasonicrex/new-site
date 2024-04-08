import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const FloatingSprites: React.FC = () => {

  const mountRef = useRef<HTMLDivElement>(null);
  const current = mountRef.current;
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const convertTo3DSpace = (mouseX: number, mouseY: number) => {
      let vector = new THREE.Vector3(
        (mouseX / window.innerWidth) * 2 - 1,
        -(mouseY / window.innerHeight) * 2 + 1,
        0.5
      );
      vector = vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      return { x: pos.x, y: pos.y };
    };

    // Track mouse movement
    const onMouseMove = (event: { clientX: any; clientY: any; }) => {
      const { clientX, clientY } = event;
      const mouse3D = convertTo3DSpace(clientX, clientY);
      mousePosition.current = mouse3D;
    };
    window.addEventListener("mousemove", onMouseMove);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF5F3F4);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);
    camera.position.z = 5;

    const spheres: { mesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>; speed: number; }[] = [];
    const numberOfSpheres = 200;
    for (let i = 0; i < numberOfSpheres; i++) {
      const geometry = new THREE.SphereGeometry(0.03, 8, 16);
      const greyShade = Math.floor(Math.random() * 255);
      const material = new THREE.MeshBasicMaterial({
        color: `rgb(${greyShade},${greyShade},${greyShade})`,
        opacity: 0.5,
        transparent: true,
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.x = (Math.random() - 0.5) * 20;
      sphere.position.y = Math.random() * 5 + 5;
      spheres.push({ mesh: sphere, speed: Math.random() * 0.005 + 0.005 });
      scene.add(sphere);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      spheres.forEach(({ mesh, speed }) => {
    
        mesh.position.y -= speed;

        // Check distance from the mouse
        const dist = mesh.position.distanceTo(new THREE.Vector3(mousePosition.current.x, mousePosition.current.y, mesh.position.z));
        const threshold = 1.5; // Threshold for magnetization
        if (dist < threshold) {
      
          mesh.position.x += (mousePosition.current.x - mesh.position.x) * 0.005; 
          mesh.position.y += (mousePosition.current.y - mesh.position.y) * 0.005;
        }

        // Reset position if it falls below the view
        if (mesh.position.y < -5) {
          mesh.position.y = 5;
          mesh.position.x = (Math.random() - 0.5) * 20;
        }
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ height: "100vh", width: "100%", position: 'fixed', top: 0, left: 0 }} />;
};

export default FloatingSprites;