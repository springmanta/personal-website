import { useState } from 'react'
import Navbar from './Navbar.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'
import HexagonMenu from './HexagonMenu.jsx'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div>
      {/* <Navbar setActiveSection={setActiveSection} /> */}

      {activeSection === 'home' && (
        <HexagonMenu />
      )}

      {activeSection === 'about' && <About />}

      {/* <Footer /> */}
    </div>
  )
}

export default App
