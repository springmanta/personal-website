import './ProjectDetail.css'
import Carousel from './Carousel'

export default function ProjectDetail({ images }){
  return(
    <div className="project-detail-container">
      <div className="carousel-section">
        <Carousel images={images} />
      </div>
      <div className="info-section">
        <p>This was our first group project during Le Wagon's bootcamp, which they call the "AirBnb week", so that it serves as a preparation for the final project. Here we are incentivized to be the highly creative as possible, so we decided to create a rental service for Star Wars Spaceships. This was a Web Application that had user authentication and authorization and essentially allowed them to pick a ship - hence the name of the App - and then book it on a date-picker. One of the greatest challenges was starting to work collectively, using Git and GitHub, each one creating its own branch and then proceed to merge alltogether.</p>
      </div>
    </div>
  )
}
