import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Intro from './presentacion.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Intro />
  </StrictMode>,
)
