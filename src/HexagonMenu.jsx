import './HexagonMenu.css'
import { useState } from "react";

export default function HexagonMenu(){
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCenterClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="hexagon-container">
      {}
      <div
        className="hexagon center-hex"
        onClick={handleCenterClick}
      >
        Simão Martins
      </div>

    {}
    {isExpanded && (
      <>
        <div className="hexagon surrounding-hex hex-1">About</div>
        <div className="hexagon surrounding-hex hex-2">Projects</div>
        <div className="hexagon surrounding-hex hex-3">Skills</div>
        <div className="hexagon surrounding-hex hex-4">Contacts</div>
        <div className="hexagon surrounding-hex hex-5">Music</div>
        <div className="hexagon surrounding-hex hex-6">BoardGaming</div>
      </>
    )}
    </div>
  )
}
