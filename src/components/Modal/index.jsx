import './index.css'

export function Modal({ endGame, win, resetGame }) {
  if (!endGame) return null
  return (
    <section className="win-modal">
      <div className="box-win-msg">
        {win ? <h1>You win</h1> : <h1>Game over</h1>}
        <button onClick={resetGame} className="btn-modal">
          Play again
        </button>
      </div>
    </section>
  )
}

export default Modal
