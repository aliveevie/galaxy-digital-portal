import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';

const GlobeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    globe: THREE.Mesh;
    controls: OrbitControls;
  }>({} as any);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create globe
    const globeGeometry = new THREE.SphereGeometry(5, 64, 64);
    const globeMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        varying vec3 vNormal;
        
        void main() {
          // Create a gradient base color
          vec3 baseColor = mix(
            vec3(0.1, 0.3, 0.5),  // Deep blue
            vec3(0.2, 0.5, 0.7),  // Light blue
            vUv.y
          );
          
          // Add atmospheric glow
          float atmosphere = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          vec3 glowColor = vec3(0.3, 0.6, 1.0);
          
          // Add time-based animation
          float pattern = sin(vUv.x * 20.0 + time) * sin(vUv.y * 20.0 + time) * 0.1;
          
          // Combine effects
          vec3 finalColor = mix(baseColor, glowColor, atmosphere * 0.5 + pattern);
          
          gl_FragColor = vec4(finalColor, 0.9);
        }
      `,
      uniforms: {
        time: { value: 0 }
      },
      transparent: true,
    });

    const globe = new THREE.Mesh(globeGeometry, globeMaterial);

    // Add atmosphere effect
    const atmosphereGeometry = new THREE.SphereGeometry(5.2, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Add particle system for stars
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starVertices, 3)
    );
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(15, 15, 15);
    scene.add(pointLight);

    scene.add(globe);
    camera.position.z = 15;

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Store references
    globeRef.current = {
      scene,
      camera,
      renderer,
      globe,
      controls
    };

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;
      
      // Update shader uniforms
      globeMaterial.uniforms.time.value = time;
      
      // Rotate stars slightly
      stars.rotation.y += 0.0002;
      
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Initial animation
    gsap.from(globe.scale, {
      x: 0,
      y: 0,
      z: 0,
      duration: 2,
      ease: "elastic.out(1, 0.5)"
    });

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      scene.remove(globe);
      globeGeometry.dispose();
      globeMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #000033 0%, #000011 100%)'
      }}
    />
  );
};

export default GlobeBackground; 