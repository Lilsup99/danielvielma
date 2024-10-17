import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Intro from './presentacion.jsx'
import App from './App.jsx'
import Social from './social.jsx'
import About from './about.jsx'
import FileUpload from './form.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    <Intro imgSrc='https://attic.sh/ulx8q81iw6pzv32wc86cuhg97v34'/>
    <About></About>
    <Social className="social"></Social>
    <FileUpload></FileUpload>
  </StrictMode>,
)
