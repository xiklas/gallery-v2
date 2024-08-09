// src/components/ThreeDModel.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Center } from '@react-three/drei';

// Stelle sicher, dass die GLTF-Loader-Bibliothek installiert ist
// npm install @react-three/drei @react-three/fiber

const ThreeDModel = ({ modelPath }) => {
  // Hook nur aufrufen, wenn modelPath definiert ist
  const { scene } = useGLTF(modelPath);

  return (
    <Canvas
      style={{ height: '100vh', width: '100vw' }} // Canvas auf volle Höhe und Breite des Viewports setzen
      camera={{ position: [2, 3, -6], fov: 75 }} // Kamera in Position setzen
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />
      <pointLight position={[-10, -10, -10]} intensity={0.6} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Center>
        {/* Hier wird die Skalierung des Modells angepasst */}
        <primitive object={scene} scale={[0.2, 0.2, 0.2]} />
      </Center>
    </Canvas>
  );
};

// GLTF-Loader laden
useGLTF.preload('/models/my-model.gltf');

export default ThreeDModel;
