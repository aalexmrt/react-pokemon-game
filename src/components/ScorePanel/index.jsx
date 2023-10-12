import './index.css'
export const ScorePanel = ({
  loadingFirstRender,
  matchedCards = null,
  handleResetGame,
  timeLeft = null,
}) => {
  const score = matchedCards.length / 2
  return (
    <nav>
      <div className="score-box">
        <h2 className="subtitles-score-panel">Time</h2>
        <span className="timer">{timeLeft}</span>
      </div>
      <div className="score-box">
        <h2 className="subtitles-score-panel">Score</h2>
        <span className="scoring">{score}</span>
      </div>
      <button className="btn-score-panel" onClick={handleResetGame}>
        Reset game
      </button>
    </nav>
  )
}
