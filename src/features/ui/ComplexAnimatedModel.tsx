// ThreeScene.tsx
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Group, type Object3DEventMap } from 'three';

interface RotatingGLBModelProps {
  rotationSpeed?: number;
  scale?: number;
}

function RotatingGLBModel({ 
  rotationSpeed = 1,
  scale = 1 
}: RotatingGLBModelProps) {
  const groupRef = useRef<Group<Object3DEventMap>>(null!);
  

  const { scene } = useGLTF('/src/assets/lottie/abstrart.glb');

  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  );
}

export interface ThreeSceneProps {
  className?: string;
  rotationSpeed?: number;
  modelScale?: number;
  showControls?: boolean;
}

export default function ThreeScene({
  className = "w-full h-[1000px]",
  rotationSpeed = 0.5,
  modelScale = 1,
  showControls = true
}: ThreeSceneProps) {
  return (
    <div className={`rounded-lg ${className}`}>
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        
        {/* 1. KEY LIGHT - основной свет (спереди-слева) */}
        <directionalLight
          position={[4, 4, 4]}
          intensity={1.2}
          color="#ffffff"
          castShadow
        />
        
        {/* 2. FILL LIGHT - заполняющий свет (спереди-справа) */}
        <directionalLight
          position={[-3, 2, 3]}
          intensity={1}
          color="#ffffff"
        />
        
        {/* 3. BACK LIGHT - контровой свет (сзади) */}
        <directionalLight
          position={[0, 3, -4]}
          intensity={1}
          color="#aaccff"
        />
        
        {/* 4. RIM LIGHT - ободковый свет (сзади-по бокам) */}
        <directionalLight
          position={[-5, 2, -2]}
          intensity={1}
          color="#ffaacc"
        />
        <directionalLight
          position={[5, 2, -2]}
          intensity={1}
          color="#aaccff"
        />
        
        <RotatingGLBModel 
          rotationSpeed={rotationSpeed}
          scale={modelScale}
        />
        
        {showControls && (
          <OrbitControls 
            enableZoom={false}           // Отключаем зум колесиком
            enablePan={false}            // Отключаем перемещение
            enableRotate={true}          // Включаем вращение
          />
        )}
      </Canvas>
    </div>
  );
}