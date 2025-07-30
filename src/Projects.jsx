import { useState } from 'react'
import BackButton from './BackButton'
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
        return <div>
          <h1 className="project-title" onClick={handleBackClick}>Get Yo Ship</h1>
            <p>This was our first group project during Le Wagon's bootcamp, which they call the "AirBnb week", so that it serves as a preparation for the final project.</p>
            <p>Here we are incentivized to be the highly creative as possible, so we decided to create a rental service for Star Wars Spaceships.</p>
            <p>This was a Web Application that had user authentication and authorization and essentially allowed them to pick a ship - hence the name of the App - and then book it on a date-picker.</p>
            <p>One of the greatest challenges was starting to work collectively, using Git and GitHub, each one creating its own branch and then proceed to merge alltogether.</p>
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
