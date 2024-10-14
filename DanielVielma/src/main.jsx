import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Intro from './presentacion.jsx'
import App from './App.jsx'
import Social from './social.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    <Intro imgSrc='https://lh3.googleusercontent.com/a/ACg8ocIqJd-Im2Yqn0gq2-j6i6XQmvvV1FADCfegj4LRVWn6Q5lLaeE=s288-c-no'/>
    <Social></Social>
  </StrictMode>,
)
