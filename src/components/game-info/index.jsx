import { useState } from 'react'
import './styles.css'

export const GameInfo = ({
  matchedCards = null,
  handleResetGame,
  toggleTimer,
  toggleDisableGameClick,
  timeLeft = null,
}) => {
  const [statusButton, setStatusButton] = useState(false)

  const handleToggleTimer = () => {
    toggleDisableGameClick()
    toggleTimer()
    setStatusButton(!statusButton)
  }
  const score = matchedCards.length / 2 // matchedCards has both original and cloned pokemon so we divide by 2
  return (
    <section className="game-info">
      <div>
        <button
          className="game-info__button game-info__button--pause-game"
          onClick={handleToggleTimer}
        >
          {statusButton ? 'Resume' : 'Pause'}
        </button>
      </div>
      <div className="game-info__details-container">
        <div className="game-info__timer-container">
          <h2 className="game-info__timer-title">Time</h2>
          <span className="game-info__timer-value">{timeLeft}</span>
        </div>
        <div className="game-info__scoring-container">
          <h2 className="game-info__scoring-title">Score</h2>
          <span className="game-info__scoring-value">{score}</span>
        </div>
      </div>
      <div className="game-info__button-container">
        <button
          className="game-info__button game_info__button--reset-game"
          onClick={() =>
            handleResetGame() ||
            setStatusButton(false) ||
            toggleDisableGameClick()
          }
        >
          Reset
        </button>
      </div>
    </section>
  )
}
