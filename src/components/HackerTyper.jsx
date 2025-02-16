"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import "../styles/HackerTyper.css"

const hackerText = `
function initializeHack() {
  const target = "CLASSIFIED";
  const securityLevels = ["LOW", "MEDIUM", "HIGH", "MAXIMUM"];
  let accessGranted = false;

  console.log("Initializing hack sequence...");
  
  for (let i = 0; i < securityLevels.length; i++) {
    console.log(\`Attempting to breach security level: \${securityLevels[i]}\`);
    if (bypassFirewall(securityLevels[i])) {
      console.log(\`Successfully breached \${securityLevels[i]} security\`);
    } else {
      console.log(\`Failed to breach \${securityLevels[i]} security. Attempting alternative method...\`);
      if (exploitVulnerability(securityLevels[i])) {
        console.log(\`Vulnerability exploited. \${securityLevels[i]} security bypassed\`);
      } else {
        console.log("Critical failure. Aborting hack sequence.");
        return false;
      }
    }
  }

  accessGranted = true;
  console.log(\`Access granted to \${target}. Initiating data extraction...\`);
  
  const sensitiveData = extractData(target);
  if (sensitiveData) {
    console.log("Data extraction successful. Covering tracks...");
    coverTracks();
    return sensitiveData;
  } else {
    console.log("Data extraction failed. Mission aborted.");
    return null;
  }
}

function bypassFirewall(level) {
  // Firewall bypassing logic here
  return Math.random() > 0.3; // 70% success rate
}

function exploitVulnerability(level) {
  // Vulnerability exploitation logic here
  return Math.random() > 0.5; // 50% success rate
}

function extractData(target) {
  // Data extraction logic here
  return Math.random() > 0.2 ? "Extracted sensitive data" : null;
}

function coverTracks() {
  console.log("Erasing logs...");
  console.log("Planting false leads...");
  console.log("Exiting system...");
}

// Execute the hack
const result = initializeHack();
console.log(result ? "Mission Accomplished" : "Mission Failed");
`

const HackerTyper = () => {
  const [displayedText, setDisplayedText] = useState("")
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef(null)

  const typeText = useCallback(() => {
    const charsToAdd = Math.floor(Math.random() * 5) + 1 // Add 1-5 characters at a time
    setDisplayedText((prevText) => {
      const newText = hackerText.slice(0, prevText.length + charsToAdd)
      return newText.length > hackerText.length ? hackerText : newText
    })
  }, [])

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false)
      } else {
        typeText()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [typeText, isFullscreen])

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className={`hacker-typer ${isFullscreen ? "fullscreen" : ""}`} ref={containerRef}>
      <div className="status-bar">
        <span>HackerTyper v1.0</span>
        <button onClick={toggleFullscreen}>{isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}</button>
      </div>
      <pre className="code-container">
        {displayedText}
        <span className="cursor"></span>
      </pre>
      <div className="instructions">Press any key to start hacking. Press ESC to exit fullscreen.</div>
    </div>
  )
}

export default HackerTyper

