import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, MeshDistortMaterial } from '@react-three/drei'

export default function Escena() {
  return (
      <div style={{ height: '400px', width: '100%', background: '#050505', borderRadius: '15px', overflow: 'hidden' }}>
            <Canvas camera={{ position: [0, 0, 4] }}>
                    <Stars radius={100} depth={50} count={5000} factor={4} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />

                    <mesh>
                        <sphereGeometry args={[1, 64, 64]} />
                        <MeshDistortMaterial color="#00ffcc" speed={2} distort={0.4} />
                    </mesh>

                    <OrbitControls enableZoom={false} />
                </Canvas>
            </div>
        )
    }