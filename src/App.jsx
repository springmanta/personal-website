import { useState } from 'react'
import Navbar from './Navbar.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div>
      <Navbar setActiveSection={setActiveSection} />

      {activeSection === 'home' && (
        <div>
          <h1>Simão Martins</h1>
          <img src="foto_perfil.jpeg" alt="profile picture" className="profile-picture"/>
          {/* your current content */}
        </div>
      )}

      {activeSection === 'about' && <About />}

      {activeSection === 'contacts' && <Contacts />}

      <Footer />
    </div>
  )
}

export default App
