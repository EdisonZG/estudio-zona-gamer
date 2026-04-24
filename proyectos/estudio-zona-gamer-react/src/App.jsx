import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Importamos tu nueva escena 3D
import Escena from './Escena.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* SECCIÓN 3D (WEBGL) */}
      <Escena />

      <div>
        <a href="../../index.html">Volver al Inicio</a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>

    <h1>Estudio Zona Gamer</h1>

    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        Contador de clicks: {count}
      </button>
      <p>
        ¡Mira arriba! Eso es <strong>WebGL</strong> corriendo en tiempo real.
      </p>
      </div>

      <p className="read-the-docs">
        Pulsa y arrastra la esfera para rotarla.
      </p>
    </div>
  )
}

export default App