import React, { useState, useEffect, useRef, useCallback } from "react"
import "../styles/Project4.css"

const Project4 = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }])
  const [food, setFood] = useState({ x: 15, y: 15 })
  const [direction, setDirection] = useState({ x: 1, y: 0 })
  const [isGameOver, setIsGameOver] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [isGameVisible, setIsGameVisible] = useState(false)
  const [difficulty, setDifficulty] = useState(200)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [showInstructions, setShowInstructions] = useState(false)
  const intervalRef = useRef(null)
  const boardRef = useRef(null)
  const touchStartRef = useRef(null)

  const handleKeyDown = useCallback(
    (event) => {
      switch (event.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 })
          break
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 })
          break
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 })
          break
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 })
          break
        default:
          break
      }
    },
    [direction],
  )

  const handleTouchStart = (event) => {
    touchStartRef.current = event.touches[0].clientY
  }

  const handleTouchMove = (event) => {
    if (!touchStartRef.current) return

    const touchEnd = event.touches[0].clientY
    const diff = touchStartRef.current - touchEnd

    if (Math.abs(diff) < 5) return

    if (diff > 0) {
      if (direction.y === 0) setDirection({ x: 0, y: -1 })
    } else {
      if (direction.y === 0) setDirection({ x: 0, y: 1 })
    }

    touchStartRef.current = null
  }

  const handleTouchEnd = () => {
    touchStartRef.current = null
  }

  useEffect(() => {
    const handleMove = () => {
      if (isGameOver || !isRunning) return

      const newSnake = [...snake]
      const head = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y,
      }

      const boardWidth = boardRef.current.clientWidth
      const boardHeight = boardRef.current.clientHeight
      const cellSize = boardWidth / 25 // Assuming 25x25 grid
      const numCellsX = Math.floor(boardWidth / cellSize)
      const numCellsY = Math.floor(boardHeight / cellSize)

      if (head.x < 0) head.x = numCellsX - 1
      if (head.x >= numCellsX) head.x = 0
      if (head.y < 0) head.y = numCellsY - 1
      if (head.y >= numCellsY) head.y = 0

      for (const segment of snake) {
        if (segment.x === head.x && segment.y === head.y) {
          setIsGameOver(true)
          setIsRunning(false)
          setHighScore(Math.max(highScore, score))
          return
        }
      }

      newSnake.unshift(head)

      if (head.x === food.x && head.y === food.y) {
        setScore(score + 1)
        setFood({
          x: Math.floor(Math.random() * numCellsX),
          y: Math.floor(Math.random() * numCellsY),
        })
      } else {
        newSnake.pop()
      }

      setSnake(newSnake)
    }

    if (isRunning) {
      intervalRef.current = setInterval(handleMove, difficulty)
      return () => clearInterval(intervalRef.current)
    }
  }, [snake, direction, isGameOver, isRunning, difficulty, food, score, highScore])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  const handleStart = () => setIsRunning(true)
  const handlePause = () => setIsRunning(false)
  const handleClose = () => {
    setIsGameVisible(false)
    setIsRunning(false)
    resetGame()
  }

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }])
    setFood({ x: 15, y: 15 })
    setDirection({ x: 1, y: 0 })
    setIsGameOver(false)
    setScore(0)
  }

  const handleToggleGame = () => setIsGameVisible(!isGameVisible)
  const handleDifficultyChange = (event) => setDifficulty(Number(event.target.value))

  const handleDirectionChange = (newDirection) => {
    if ((newDirection.x === 0 && direction.y === 0) || (newDirection.y === 0 && direction.x === 0)) {
      setDirection(newDirection)
    }
  }

  return (
    <div className="project4-container">
      {!isGameVisible && (
        <button className="project4-toggleButton" onClick={handleToggleGame}>
          🐍 Play Snake Game
        </button>
      )}
      {isGameVisible && (
        <div className="project4-gameContainer">
          <div className="project4-header">
            <h2>Snake Game</h2>
            <div className="project4-scoreBoard">
              <span>Score: {score}</span>
              <span>High Score: {highScore}</span>
            </div>
          </div>
          <div className="project4-controls">
            <label>
              Difficulty:
              <select onChange={handleDifficultyChange} value={difficulty}>
                <option value="300">Easy</option>
                <option value="200">Medium</option>
                <option value="100">Hard</option>
              </select>
            </label>
            <button onClick={handleStart}>▶️</button>
            <button onClick={handlePause}>⏸️</button>
            <button onClick={handleClose}>❌</button>
            <button onClick={() => setShowInstructions(true)}>ℹ️</button>
          </div>
          <div
            className="project4-gameBoard"
            ref={boardRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {isGameOver && (
              <div className="project4-gameOver">
                <h3>Game Over</h3>
                <p>Your Score: {score}</p>
                <button onClick={resetGame}>Play Again</button>
              </div>
            )}
            {snake.map((segment, index) => (
              <div
                key={index}
                className="project4-snakeSegment"
                style={{
                  left: `${segment.x * 4}%`,
                  top: `${segment.y * 4}%`,
                }}
              ></div>
            ))}
            <div
              className="project4-food"
              style={{
                left: `${food.x * 4}%`,
                top: `${food.y * 4}%`,
              }}
            ></div>
          </div>
          <div className="project4-mobileControls">
            <button onClick={() => handleDirectionChange({ x: 0, y: -1 })}>⬆️</button>
            <div className="project4-horizontalControls">
              <button onClick={() => handleDirectionChange({ x: -1, y: 0 })}>⬅️</button>
              <button onClick={() => handleDirectionChange({ x: 1, y: 0 })}>➡️</button>
            </div>
            <button onClick={() => handleDirectionChange({ x: 0, y: 1 })}>⬇️</button>
          </div>
          {showInstructions && (
            <div className="project4-instructions">
              <h3>How to Play</h3>
              <p>Use arrow keys or on-screen buttons to control the snake.</p>
              <p>Eat the food to grow and increase your score.</p>
              <p>Don't hit the walls or yourself!</p>
              <button onClick={() => setShowInstructions(false)}>Close</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Project4

