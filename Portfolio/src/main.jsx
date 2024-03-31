import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Bio from './pages/Bio'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Home/>
   <Bio/>
   <Skills/>
   <Projects/>
   <Contact/>
  </React.StrictMode>,
)
