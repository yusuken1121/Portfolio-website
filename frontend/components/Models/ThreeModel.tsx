"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import * as motion from "framer-motion/client";
const Model = ({
  url,
  scale,
  rotation,
}: {
  url: string;
  scale: number;
  rotation: number[];
}) => {
  const { scene } = useGLTF(url);

  if (!scene) {
    console.error("モデルが読み込まれませんでした。");
    return null;
  }
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.6;

      // 回転を加える (y, zの順で傾きや回転を設定)
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2; // y軸で回転
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime) * 0.1; // z軸で軽く傾ける
    }
  });
  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={scale} rotation={rotation} />
    </group>
  );
};

const ThreeModel = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full"
    >
      <Canvas camera={{ position: [-15, 5, 20], fov: 50 }}>
        <ambientLight intensity={2} />
        {/* <axesHelper args={[5]} />
        <gridHelper args={[10, 10]} /> */}
        <OrbitControls enableZoom={false} />
        <Model
          url="/models/scene.gltf"
          scale={2.5}
          rotation={[0, 0, Math.PI / 6]}
        />
      </Canvas>
    </motion.div>
  );
};

export default ThreeModel;
