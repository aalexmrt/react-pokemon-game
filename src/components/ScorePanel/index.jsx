import './index.css'
export const ScorePanel = ({ score, time, handleReset }) => {
  return (
    <nav>
      <div className="score-box">
        <h2 className="subtitles-score-panel">Time</h2>
        <span className="timer">{time}</span>
      </div>
      <div className="score-box">
        <h2 className="subtitles-score-panel">Score</h2>
        <span className="scoring">{score}</span>
      </div>
      <button className="btn-score-panel" onClick={handleReset}>
        Reset game
      </button>
    </nav>
  )
}
