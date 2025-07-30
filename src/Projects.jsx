import { useState } from 'react'
import BackButton from './BackButton'
import ProjectDetail from './ProjectDetail'
import './Projects.css'

export default function Projects({onBack}) {
  const [activeProject, setActiveProject] = useState(null)

  const handleProjectClick = () => {
    setActiveProject('getyoship')
  }

  const handleBackClick = () => {
    setActiveProject(null)
  }

  switch (activeProject) {
      case 'getyoship':
        return <div className="project-container">
          <h1 className="project-title" onClick={handleBackClick}>Get Yo Ship</h1>
          <ProjectDetail />
        </div>
      default:
        return (
          <div className="projects-container">
            <h1>Projects</h1>
            <div className="tabs-container">
              <div className="project-tab" onClick={handleProjectClick}>GetYoShip</div>
              <div className="project-tab">CasaLink</div>
              <div className="project-tab">MyCards</div>
            </div>
            <div className="back-button-container">
              <BackButton onClick={onBack} />
            </div>
          </div>
        );
  }
}
