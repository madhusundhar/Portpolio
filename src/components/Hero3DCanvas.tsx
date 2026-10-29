import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for entire geometric object
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Core Icosahedron Wireframe
    const icosahedronGeometry = new THREE.IcosahedronGeometry(1.6, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const icosahedron = new THREE.Mesh(icosahedronGeometry, wireframeMaterial);
    mainGroup.add(icosahedron);

    // 2. Inner Glowing Core Polyhedron
    const innerGeometry = new THREE.OctahedronGeometry(0.9, 0);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x0f3050,
      emissiveIntensity: 0.6,
      wireframe: true
    });
    const innerCore = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerCore);

    // 3. Orbital Ring 1
    const ring1Geometry = new THREE.TorusGeometry(2.1, 0.015, 16, 100);
    const ring1Material = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.4
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ring1Material);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    // 4. Orbital Ring 2 (Tilted Cyan Ring)
    const ring2Geometry = new THREE.TorusGeometry(2.3, 0.012, 16, 100);
    const ring2Material = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.35
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // 5. Starfield / Orbital Node Particles
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorViolet = new THREE.Color(0xa78bfa);
    const colorCyan = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.5 ? colorViolet : colorCyan;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLightViolet = new THREE.PointLight(0x8b5cf6, 2, 50);
    pointLightViolet.position.set(4, 4, 3);
    scene.add(pointLightViolet);

    const pointLightCyan = new THREE.PointLight(0x06b6d4, 2, 50);
    pointLightCyan.position.set(-4, -3, 3);
    scene.add(pointLightCyan);

    // Interactive mouse positioning
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = (event.clientY / innerHeight - 0.5) * 2;
      targetRotationY = mouseX * 0.8;
      targetRotationX = mouseY * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Animation loop
    let animationFrameId: number;
    const speedMultiplier = prefersReducedMotion ? 0.2 : 1;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth dampening towards target rotation
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      // Continuous ambient rotation
      icosahedron.rotation.y += 0.003 * speedMultiplier;
      icosahedron.rotation.x += 0.002 * speedMultiplier;

      innerCore.rotation.y -= 0.006 * speedMultiplier;
      innerCore.rotation.z += 0.004 * speedMultiplier;

      ring1.rotation.z += 0.005 * speedMultiplier;
      ring2.rotation.z -= 0.004 * speedMultiplier;

      particles.rotation.y += 0.001 * speedMultiplier;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      icosahedronGeometry.dispose();
      innerGeometry.dispose();
      ring1Geometry.dispose();
      ring2Geometry.dispose();
      particleGeometry.dispose();
      wireframeMaterial.dispose();
      innerMaterial.dispose();
      ring1Material.dispose();
      ring2Material.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] md:min-h-[460px] flex items-center justify-center pointer-events-none">
      {/* Background ambient radial glow */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-violet-600/20 via-indigo-500/15 to-cyan-400/20 blur-3xl" />
      <div ref={mountRef} className="w-full h-full absolute inset-0 z-10" />
    </div>
  );
};

