import './index.css'
export const ScorePanel = ({ score, time }) => {
  return (
    <nav>
      <div className="score-box">
        <h2>Time</h2>
        <span className="timer">{time}</span>
      </div>
      <div className="score-box">
        <h2>Score</h2>
        <span className="scoring">{score}</span>
      </div>
      <button>Reset game</button>
    </nav>
  )
}
