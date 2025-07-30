import './HexagonMenu.css'
import About from './About.jsx'
import Contacts from './Contacts.jsx'
import Projects from './Projects.jsx'
import { useState } from "react";

export default function HexagonMenu(){
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  const handleCenterClick = () => {
    setIsExpanded(!isExpanded)
  }

  const handleAboutClick = () => {
    setActiveSection('about')
  }

  const handleContactsClick = () => {
    setActiveSection('contacts')
  }

  const handleProjectsClick = () => {
    setActiveSection('projects')
  }

  const handleBackClick = () => {
    setActiveSection(null)
  }

  switch (activeSection) {
    case 'about':
      return <About onBack={handleBackClick}/>
    case 'projects':
      return <Projects onBack={handleBackClick}/>
    // case 'skills':
    //   return <Skills />
    case 'contacts':
      return <Contacts onBack={handleBackClick}/>
    default:
      return (
        <div className="hexagon-container">
          <div
            className="hexagon center-hex"
            onClick={handleCenterClick}
          >
            Simão Martins
          </div>

    {isExpanded && (
      <>
        <div className="hexagon surrounding-hex hex-1" onClick={handleAboutClick}>About</div>
        <div className="hexagon surrounding-hex hex-2" onClick={handleProjectsClick}>Projects</div>
        <div className="hexagon surrounding-hex hex-3">Skills</div>
        <div className="hexagon surrounding-hex hex-4" onClick={handleContactsClick}>Contacts</div>
        <div className="hexagon surrounding-hex hex-5">Music</div>
        <div className="hexagon surrounding-hex hex-6">BoardGaming</div>
      </>
    )}
    </div>
    )
  }
}
