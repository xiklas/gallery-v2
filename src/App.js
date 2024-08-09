// src/App.js
import React from 'react';
import './App.css';
import ThreeDModel from './components/ThreeDModel';

const App = () => {
  return (
    <div>
      {/* Pfad zum Modell im `public`-Verzeichnis */}
      <ThreeDModel modelPath="/models/my-model.gltf" />
    </div>
  );
};

export default App;
