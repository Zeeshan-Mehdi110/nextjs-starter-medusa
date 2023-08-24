//@ts-nocheck
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
const chestVertexCount = 1000; // Replace with the actual number of chest vertices
const hipsVertexCount = 1000; // Replace with the actual number of hips vertices

function Model({ measurements }) {
  const { scene } = useGLTF(`https://models.readyplayer.me/64d0f0fa01a02e7d2cf6a21c.glb`);

  useEffect(() => {
    if (scene && measurements) {
      const avatarMesh = scene.getObjectByName('Wolf3D_Avatar'); // Replace with the actual name of your avatar mesh
      if (avatarMesh && avatarMesh.geometry) {
        const chestScaleX = measurements.chestScaleX;
        const hipsScaleX = measurements.hipsScaleX;

        // Get the vertices of the chest and hips parts
        const chestVertices = avatarMesh.geometry.attributes.position.array.slice(0, chestVertexCount * 3);
        const hipsVertices = avatarMesh.geometry.attributes.position.array.slice(
          chestVertexCount * 3,
          (chestVertexCount + hipsVertexCount) * 3
        );

        // Modify the vertices to adjust the chest and hips scales
        for (let i = 0; i < chestVertices.length; i += 3) {
          chestVertices[i] *= chestScaleX;
        }
        for (let i = 0; i < hipsVertices.length; i += 3) {
          hipsVertices[i] *= hipsScaleX;
        }

        // Update the positions of the chest and hips vertices
        avatarMesh.geometry.attributes.position.needsUpdate = true;
        avatarMesh.geometry.computeVertexNormals();
      }
    }
  }, [scene, measurements]);

  return <primitive object={scene} />;
}

function AvatarViewer() {
  const [measurements, setMeasurements] = useState({
    chestScaleX: 4.9,
    hipsScaleX: 5.9,
  });

  useEffect(() => {
    // Update the measurements state variable
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      const { chestScaleX, hipsScaleX } = savedFormData;
      setMeasurements({
        chestScaleX: chestScaleX,
        hipsScaleX: hipsScaleX,
      });
    }
  }, []);

  return (
    <Canvas
      className='step step3 mt-5 mb-5'
      style={{ width: '100%', height: '600px' }}
      camera={{ position: [2, 0, 14.25], fov: 15 }}
      onCreated={({ gl }) => {
        gl.setClearColor('#f0f0f0'); // Set background color if needed
      }}
    >
      <ambientLight intensity={5} />
      <Suspense fallback={null}>
        <Model position={[0.025, -0.9, 0]} measurements={measurements} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default AvatarViewer;
