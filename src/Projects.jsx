import { useState } from 'react'
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
      case 'getyoship': {
        const getYoShipImages = [
          "/get_yo_ship_1.png",
          "/get_yo_ship_2.png",
          "/get_yo_ship_3.png",
          "/get_yo_ship_4.png",
        ]

        return <div className="project-container">
          <h1 className="project-title" onClick={handleBackClick}>Get Yo Ship</h1>
          <ProjectDetail images={getYoShipImages}/>
        </div>
      }
      default:
        return (
          <div className="projects-container">
            <h1 className="project-title" onClick={onBack}>Projects</h1>
            <div className="tabs-container">
              <div className="project-tab" onClick={handleProjectClick}>GetYoShip</div>
              <div className="project-tab">CasaLink</div>
              <div className="project-tab">MyCards</div>
            </div>
          </div>
        );
  }
}
