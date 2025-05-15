import avatar from './assets/avatar-user.png'
import Contact from './pages/Contact'
import React from 'react'
import {Routes, Route, BrowserRouter, NavLink} from 'react-router-dom'
import './App.css'

function App() {
  const linkStyle = ({isActive}) => ({
    color: isActive ? 'blue' : 'black',
    textDecoration: isActive ? 'underline' : 'none'
  })

  return (
    <>
      <div id="root">
        <div id="header">
          <div id="header-content">
           <img src={avatar} alt="Marianne's Avatar" id="avatar" />
           <h2>Marianne's Portfolio</h2>
           <BrowserRouter>
            <nav>
              <NavLink to="" className="nav-link" style={linkStyle} end>Home</NavLink>
              <NavLink to="" className="nav-link">Projects</NavLink>
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </nav>
            <Routes>
             {/* <Route path='portfolio-site\src\pages\Projects.jsx' element={<Projects />} /> */}
             <Route path="/contact" element={<Contact />} />
            </Routes>
           </BrowserRouter>
          </div>

        </div>
        <div id="description">
          <p>Hi, I'm Marianne!</p>
          <p>I'm a passionate full stack developer who loves building interactive gamified apps and systems.</p>
          <p>Currently working on: Discord Character Companion Bot</p>
        </div>
      </div>
    </>
  )
}

export default App
