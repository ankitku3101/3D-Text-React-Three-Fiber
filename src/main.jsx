import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'


const root = ReactDOM.createRoot(document.querySelector("#root"))


root.render(
  <>
    <Canvas>
      <Experience />
    </Canvas>
  </>
)