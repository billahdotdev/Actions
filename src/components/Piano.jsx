import { useState, useCallback, useEffect } from "react"
import "../styles/Piano.css"

const generateNotes = () => {
  const notes = [
    { note: "C", octave: 4, type: "white" },
    { note: "C#", altNote: "Db", octave: 4, type: "black" },
    { note: "D", octave: 4, type: "white" },
    { note: "D#", altNote: "Eb", octave: 4, type: "black" },
    { note: "E", octave: 4, type: "white" },
    { note: "F", octave: 4, type: "white" },
    { note: "F#", altNote: "Gb", octave: 4, type: "black" },
    { note: "G", octave: 4, type: "white" },
    { note: "G#", altNote: "Ab", octave: 4, type: "black" },
    { note: "A", octave: 4, type: "white" },
    { note: "A#", altNote: "Bb", octave: 4, type: "black" },
    { note: "B", octave: 4, type: "white" },
    { note: "C", octave: 5, type: "white" },
    { note: "C#", altNote: "Db", octave: 5, type: "black" },
    { note: "D", octave: 5, type: "white" },
    { note: "D#", altNote: "Eb", octave: 5, type: "black" },
    { note: "E", octave: 5, type: "white" },
    { note: "F", octave: 5, type: "white" },
    { note: "F#", altNote: "Gb", octave: 5, type: "black" },
    { note: "G", octave: 5, type: "white" },
    { note: "G#", altNote: "Ab", octave: 5, type: "black" },
    { note: "A", octave: 5, type: "white" },
    { note: "A#", altNote: "Bb", octave: 5, type: "black" },
    { note: "B", octave: 5, type: "white" },
    { note: "C", octave: 6, type: "white" },
  ]
  return notes
}

const NOTES = generateNotes()
const MAX_OCTAVES = 3

const Piano = () => {
  const [showNotes, setShowNotes] = useState(true)
  const [markMode, setMarkMode] = useState(false)
  const [markedKeys, setMarkedKeys] = useState(new Set())
  const [visibleOctaves, setVisibleOctaves] = useState(MAX_OCTAVES)

  const updateVisibleOctaves = () => {
    const width = window.innerWidth
    if (width < 768) {
      setVisibleOctaves(1)
    } else if (width < 1024) {
      setVisibleOctaves(2)
    } else {
      setVisibleOctaves(MAX_OCTAVES)
    }
  }

  useEffect(() => {
    updateVisibleOctaves()
    window.addEventListener("resize", updateVisibleOctaves)
    return () => window.removeEventListener("resize", updateVisibleOctaves)
  }, []) // Added empty dependency array to fix the warning

  const playNote = useCallback((note, octave) => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    const noteFrequencies = {
      C: 261.63,
      "C#": 277.18,
      D: 293.66,
      "D#": 311.13,
      E: 329.63,
      F: 349.23,
      "F#": 369.99,
      G: 392.0,
      "G#": 415.3,
      A: 440.0,
      "A#": 466.16,
      B: 493.88,
    }
    const baseFrequency = noteFrequencies[note]
    const frequency = baseFrequency * Math.pow(2, octave - 4)

    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime)
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.5)
  }, [])

  const handleKeyClick = (note, octave) => {
    if (markMode) {
      setMarkedKeys((prev) => {
        const newSet = new Set(prev)
        const fullNote = `${note}${octave}`
        if (newSet.has(fullNote)) {
          newSet.delete(fullNote)
        } else {
          newSet.add(fullNote)
        }
        return newSet
      })
    } else {
      playNote(note, octave)
    }
  }

  const renderKey = (noteData, index) => {
    const { note, octave, type } = noteData
    const isBlackKey = type === "black"
    const fullNote = `${note}${octave}`
    const isMarked = markedKeys.has(fullNote)

    return (
      <button
        key={fullNote}
        className={`piano-key ${isBlackKey ? "black-key" : "white-key"} ${isMarked ? "marked" : ""}`}
        onClick={() => handleKeyClick(note, octave)}
      >
        {showNotes && <span className="note-label">{note}</span>}
      </button>
    )
  }

  return (
    <div className="piano-container">
      <h1 className="piano-title">Virtual Piano</h1>

      <div className="piano-controls">
        <button className={`control-button ${markMode ? "active" : ""}`} onClick={() => setMarkMode(!markMode)}>
          Mark
        </button>
        <button className="control-button" onClick={() => setShowNotes(!showNotes)}>
          {showNotes ? "Hide" : "Show"} note names
        </button>
      </div>

      <div className="piano">
        {[...Array(visibleOctaves)].map((_, octaveIndex) => (
          <div key={octaveIndex} className="octave">
            {NOTES.filter((note) => note.octave === octaveIndex + 4).map(renderKey)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Piano

