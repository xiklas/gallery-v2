import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Center } from '@react-three/drei';

const ThreeDModel = ({ modelPath }) => {
  if (!modelPath) {
    console.error('modelPath is undefined');
    return null;
  }

  const { scene } = useGLTF(modelPath);

  return (
    <Canvas
      style={{ height: '100vh', width: '100vw' }} // Canvas auf volle Höhe und Breite des Viewports setzen
      camera={{ position: [0, 0, 5], fov: 75 }} // Kamera in Position setzen
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />
      <pointLight position={[-10, -10, -10]} intensity={0.6} />
      <OrbitControls enableZoom={false} />
      <Center>
        <primitive object={scene} scale={[0.6, 0.6, 0.6]}/>
      </Center>
    </Canvas>
  );
};

export default ThreeDModel;
