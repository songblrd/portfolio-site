import avatar from './assets/avatar-user.png'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import {Routes, Route, BrowserRouter, NavLink} from 'react-router-dom'
import './App.css'

function App() {
  const linkStyle = ({isActive}) => ({
    color: isActive ? 'black' : 'blue',
    textDecoration: isActive ? 'underline' : 'none'
  })

  return (
    <>
      <BrowserRouter>
      <div id="header">
        <div id="header-content">
          <img src={avatar} alt="Marianne's Avatar" id="avatar" />
          <h2>Marianne's Portfolio</h2>
           <nav>
              <NavLink to="/" className="nav-link" style={linkStyle} end>Home</NavLink>
              <NavLink to="/projects" className="nav-link" style={linkStyle}>Projects</NavLink>
              <NavLink to="/contact" className="nav-link" style={linkStyle}>Contact</NavLink>
            </nav>
          </div>
      </div>
      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='portfolio-site\src\pages\Projects.jsx' element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
