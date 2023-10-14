import './styles.css'
import confetti from 'canvas-confetti'

import { GAME_MODAL_TYPES } from 'src/utils/consts'

function LoseModal() {
  return <h1 className="end-game-modal__msg">Game over</h1>
}

function WinModal() {
  confetti()
  return <h1 className="end-game-modal__msg">You win!</h1>
}

export function GameModals({ gameModalType, loadingCards, handleResetGame }) {
  // TODO: check if gameModalType is not in GAME_MODAL_TYPES
  const gameModalTypeIsValid =
    Object.values(GAME_MODAL_TYPES).includes(gameModalType)
  if (!gameModalTypeIsValid) {
    return null
  }
  // WinModal, GameOverModal, StartGameModal
  return (
    <>
      {!loadingCards && (
        <section className="end-game-modal">
          <div className="end-game-modal__container">
            {gameModalType === GAME_MODAL_TYPES.WIN && <WinModal />}
            {gameModalType === GAME_MODAL_TYPES.LOSE && <LoseModal />}
            <button
              className="end-game-modal__button"
              onClick={handleResetGame}
            >
              Play again
            </button>
          </div>
        </section>
      )}
    </>
  )
}
