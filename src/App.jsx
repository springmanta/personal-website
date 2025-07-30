import { useState } from 'react'
import About from './About.jsx'
import HexagonMenu from './HexagonMenu.jsx'
import './App.css'

function App() {
  const [activeSection] = useState('home')

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
