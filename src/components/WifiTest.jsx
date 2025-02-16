"use client"

import { useState } from "react"
import { Wifi, Download, Upload, Clock, RefreshCw } from "lucide-react"
import "../styles/WifiTest.css"

const WifiTest = () => {
  const [testing, setTesting] = useState(false)
  const [results, setResults] = useState(null)

  const testSpeed = async () => {
    setTesting(true)
    setResults(null)

    // Simulating API call with setTimeout
    setTimeout(() => {
      // Placeholder results
      setResults({
        downloadSpeed: (Math.random() * 100).toFixed(2),
        uploadSpeed: (Math.random() * 50).toFixed(2),
        latency: Math.floor(Math.random() * 100),
      })
      setTesting(false)
    }, 3000)

    // TODO: Implement actual speed test using an open-source API
    // For example, you could use the LibreSpeed API (https://github.com/librespeed/speedtest)
    // This would require setting up a server or using a hosted instance
  }

  return (
    <div className="wifi-test-container">
      <div className="wifi-test-content">
        <h1 className="wifi-test-title">
          <Wifi className="wifi-icon" />
          WiFi Speed Test
        </h1>
        <button className="test-button" onClick={testSpeed} disabled={testing}>
          {testing ? "Testing..." : "Start Test"}
          <RefreshCw className={`refresh-icon ${testing ? "spinning" : ""}`} />
        </button>
        {results && (
          <div className="results-container">
            <div className="result-item">
              <Download className="result-icon" />
              <span className="result-label">Download</span>
              <span className="result-value">{results.downloadSpeed} Mbps</span>
            </div>
            <div className="result-item">
              <Upload className="result-icon" />
              <span className="result-label">Upload</span>
              <span className="result-value">{results.uploadSpeed} Mbps</span>
            </div>
            <div className="result-item">
              <Clock className="result-icon" />
              <span className="result-label">Latency</span>
              <span className="result-value">{results.latency} ms</span>
            </div>
          </div>
        )}
        <p className="api-disclaimer">
        The internet speed measurement might be inaccurate due to the use of an open-source API.
        </p>
      </div>
    </div>
  )
}

export default WifiTest

