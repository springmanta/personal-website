import './Carousel.css'
import { useState } from 'react'

export default function Carousel({ images }){

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex === images.length - 1){
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const previous = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1)
    } else {
      setCurrentIndex(currentIndex -1)
    }
  }

  return (
    <div className="carousel-container">
      <img src={images[currentIndex]} alt="project-image" className="carousel-image" />
      <button className="carousel-button button-left" onClick={previous}>←</button>
      <button className="carousel-button button-right" onClick={next}>→</button>
    </div>
  )
}
