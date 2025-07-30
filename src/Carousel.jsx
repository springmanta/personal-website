import './Carousel.css'
import { useState } from 'react'

export default function Carousel(){

  const testImages = [
    "get_yo_ship_1.png",
    "get_yo_ship_2.png"
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex === testImages.length - 1){
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const previous = () => {
    if (currentIndex === 0) {
      setCurrentIndex(testImages.length - 1)
    } else {
      setCurrentIndex(currentIndex -1)
    }
  }

  return (
    <div className="carousel-container">
      <img src={testImages[currentIndex]} alt="random-image" className="carousel-image" />
      <button className="carousel-button button-left" onClick={previous}>←</button>
      <button className="carousel-button button-right" onClick={next}>→</button>
    </div>
  )
}
