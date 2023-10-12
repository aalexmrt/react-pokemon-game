import './index.css'
import confetti from 'canvas-confetti'

import { GAME_MODAL_TYPES } from 'src/utils/consts'

function ButtonModal({ handleStartGame, handleResetGame, gameModal }) {
  const handleClick =
    GAME_MODAL_TYPES.MENU === gameModal ? handleStartGame : handleResetGame

  const textButton =
    GAME_MODAL_TYPES.MENU === gameModal ? 'Play Game' : 'Play Again'
  return (
    <button onClick={handleClick} className="btn-modal">
      {textButton}
    </button>
  )
}
function MenuModal() {
  return <h1>Start game</h1>
}
function LoseModal() {
  return <h1>Game over</h1>
}

function WinModal() {
  confetti()
  return <h1>You win!</h1>
}

export function Modal({
  gameModal,
  loadingCards,
  handleResetGame,
  handleStartGame,
}) {
  // TODO: check if gameModal is not in GAME_MODAL_TYPES
  const gameModalIsValid = Object.values(GAME_MODAL_TYPES).includes(gameModal)
  if (!gameModalIsValid) {
    return null
  }
  // WinModal, GameOverModal, StartGameModal
  return (
    <>
      {!loadingCards && (
        <section className="modal">
          <div className="box-modal">
            {gameModal === GAME_MODAL_TYPES.WIN && <WinModal />}
            {gameModal === GAME_MODAL_TYPES.LOSE && <LoseModal />}
            {gameModal === GAME_MODAL_TYPES.MENU && <MenuModal />}
            <ButtonModal
              handleStartGame={handleStartGame}
              handleResetGame={handleResetGame}
              gameModal={gameModal}
            />
          </div>
        </section>
      )}
    </>
  )
}
