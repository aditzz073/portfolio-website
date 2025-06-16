import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Animated Box Component
const AnimatedBox = ({ position, color, scale }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Rotation animation
    meshRef.current.rotation.x = time * 0.5;
    meshRef.current.rotation.y = time * 0.3;
    
    // Scale animation with sine wave
    const scaleMultiplier = 1 + Math.sin(time * 2) * 0.2;
    meshRef.current.scale.setScalar(scale * scaleMultiplier);
    
    // Position animation (floating effect)
    meshRef.current.position.y = position[1] + Math.sin(time * 1.5 + position[0]) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.8} 
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

// Animated Sphere Component
const AnimatedSphere = ({ position, color, scale }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Rotation animation
    meshRef.current.rotation.x = time * 0.7;
    meshRef.current.rotation.z = time * 0.4;
    
    // Scale pulsing animation
    const scaleMultiplier = 1 + Math.sin(time * 3) * 0.15;
    meshRef.current.scale.setScalar(scale * scaleMultiplier);
    
    // Orbital motion
    const radius = 2;
    meshRef.current.position.x = position[0] + Math.cos(time * 0.8) * radius;
    meshRef.current.position.z = position[2] + Math.sin(time * 0.8) * radius;
    meshRef.current.position.y = position[1] + Math.sin(time * 2) * 0.5;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.3} 
        roughness={0.3}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

// Animated Torus Component
const AnimatedTorus = ({ position, color, scale }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Complex rotation animation
    meshRef.current.rotation.x = time * 0.6;
    meshRef.current.rotation.y = time * 0.8;
    meshRef.current.rotation.z = time * 0.2;
    
    // Scale animation
    const scaleMultiplier = 1 + Math.sin(time * 2.5) * 0.1;
    meshRef.current.scale.setScalar(scale * scaleMultiplier);
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.7} 
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </mesh>
  );
};

// Animated Cone Component
const AnimatedCone = ({ position, color, scale }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Rotation animation
    meshRef.current.rotation.x = time * 0.4;
    meshRef.current.rotation.z = time * 0.6;
    
    // Scale animation
    const scaleMultiplier = 1 + Math.sin(time * 2.2) * 0.12;
    meshRef.current.scale.setScalar(scale * scaleMultiplier);
    
    // Position animation (figure-8 motion)
    meshRef.current.position.x = position[0] + Math.sin(time * 0.5) * 1.5;
    meshRef.current.position.z = position[2] + Math.sin(time * 1) * 0.8;
    meshRef.current.position.y = position[1] + Math.cos(time * 1.3) * 0.4;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <coneGeometry args={[0.5, 1.5, 8]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.6} 
        roughness={0.3}
        emissive={color}
        emissiveIntensity={0.12}
      />
    </mesh>
  );
};

// Animated Octahedron Component
const AnimatedOctahedron = ({ position, color, scale }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Multi-axis rotation
    meshRef.current.rotation.x = time * 0.8;
    meshRef.current.rotation.y = time * 0.5;
    meshRef.current.rotation.z = time * 0.3;
    
    // Scale pulsing
    const scaleMultiplier = 1 + Math.sin(time * 3.5) * 0.18;
    meshRef.current.scale.setScalar(scale * scaleMultiplier);
    
    // Spiral motion
    const radius = 1.2;
    meshRef.current.position.x = position[0] + Math.cos(time * 1.2) * radius;
    meshRef.current.position.y = position[1] + Math.sin(time * 0.7) * 0.6;
    meshRef.current.position.z = position[2] + Math.sin(time * 1.2) * radius;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.7]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.9} 
        roughness={0.1}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

// Animated Ring Component
const AnimatedRing = ({ position, color, scale }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Wobbling rotation
    meshRef.current.rotation.x = Math.sin(time * 0.8) * 0.5;
    meshRef.current.rotation.y = time * 0.7;
    meshRef.current.rotation.z = Math.cos(time * 0.6) * 0.3;
    
    // Scale animation
    const scaleMultiplier = 1 + Math.sin(time * 2.8) * 0.08;
    meshRef.current.scale.setScalar(scale * scaleMultiplier);
    
    // Vertical oscillation
    meshRef.current.position.y = position[1] + Math.sin(time * 1.8) * 0.5;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <ringGeometry args={[0.8, 1.2, 16]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.5} 
        roughness={0.4}
        emissive={color}
        emissiveIntensity={0.08}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Animated Cylinder Component
const AnimatedCylinder = ({ position, color, scale }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Rolling animation
    meshRef.current.rotation.x = time * 1.2;
    meshRef.current.rotation.z = time * 0.4;
    
    // Scale animation
    const scaleMultiplier = 1 + Math.sin(time * 3.2) * 0.1;
    meshRef.current.scale.setScalar(scale * scaleMultiplier);
    
    // Circular path
    const radius = 1.8;
    meshRef.current.position.x = position[0] + Math.cos(time * 0.9) * radius;
    meshRef.current.position.z = position[2] + Math.sin(time * 0.9) * radius;
    meshRef.current.position.y = position[1] + Math.cos(time * 2.1) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[0.3, 0.3, 1.2, 16]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.7} 
        roughness={0.25}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

// Floating Particles Component
const FloatingParticles = () => {
  const groupRef = useRef();
  const particleCount = 80; // Increased particle count
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    groupRef.current.rotation.y = time * 0.1;
    groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
  });

  const particles = [];
  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 25;
    const y = (Math.random() - 0.5) * 25;
    const z = (Math.random() - 0.5) * 25;
    
    // Vary particle colors
    const colors = ["#00D4FF", "#FF6B6B", "#FFE66D", "#4ECDC4", "#A8E6CF"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particles.push(
      <mesh key={i} position={[x, y, z]}>
        <sphereGeometry args={[0.015 + Math.random() * 0.02, 8, 8]} />
        <meshBasicMaterial color={color} opacity={0.7} transparent />
      </mesh>
    );
  }

  return <group ref={groupRef}>{particles}</group>;
};

// Main Animation Scene
const AnimationScene = () => {
  return (
    <>
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.9} color="#FF6B6B" />
      <pointLight position={[10, -10, 10]} intensity={0.9} color="#4ECDC4" />
      <pointLight position={[0, 10, 0]} intensity={0.6} color="#FFE66D" />
      <pointLight position={[0, -10, 0]} intensity={0.5} color="#A8E6CF" />
      
      {/* Enhanced Floating Particles */}
      <FloatingParticles />
      
      {/* Original Animated Objects */}
      <AnimatedBox position={[-2, 0, 0]} color="#FF6B6B" scale={0.8} />
      <AnimatedSphere position={[2, 0, 0]} color="#4ECDC4" scale={0.6} />
      <AnimatedTorus position={[0, 0, -2]} color="#FFE66D" scale={0.7} />
      
      {/* Additional Original Elements */}
      <AnimatedBox position={[0, 2, 1]} color="#A8E6CF" scale={0.5} />
      <AnimatedSphere position={[-1, -2, 1]} color="#FF8B94" scale={0.4} />
      
      {/* New Animated Elements */}
      <AnimatedCone position={[3, 1, 2]} color="#9B59B6" scale={0.6} />
      <AnimatedOctahedron position={[-3, -1, -1]} color="#E74C3C" scale={0.5} />
      <AnimatedRing position={[1, -3, 0]} color="#F39C12" scale={0.7} />
      <AnimatedCylinder position={[-2, 3, -2]} color="#2ECC71" scale={0.4} />
      
      {/* More decorative elements */}
      <AnimatedCone position={[4, -2, 1]} color="#3498DB" scale={0.45} />
      <AnimatedOctahedron position={[-1, 0, 3]} color="#E67E22" scale={0.35} />
      <AnimatedRing position={[2, 2, -3]} color="#1ABC9C" scale={0.55} />
      <AnimatedCylinder position={[-4, 0, 2]} color="#8E44AD" scale={0.5} />
      
      {/* Small accent elements */}
      <AnimatedBox position={[3, -1, -3]} color="#F1C40F" scale={0.3} />
      <AnimatedSphere position={[-2, -3, 2]} color="#E91E63" scale={0.25} />
      <AnimatedTorus position={[1, 3, 1]} color="#00BCD4" scale={0.4} />
    </>
  );
};

// Main Canvas Component
const AnimationCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ background: 'transparent' }}
    >
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={1}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
      <AnimationScene />
    </Canvas>
  );
};

export default AnimationCanvas;
