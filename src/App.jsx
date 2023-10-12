import './App.css'
import { Pokemons } from 'src/components/Pokemons'
import { ScorePanel } from 'src/components/ScorePanel'
import { Modal } from 'src/components/Modals'
import { useGame } from 'src/hooks/useGame'
export default function App() {
  const {
    gameOver,
    gameModal,
    cards,
    handleCardFlip,
    disableGameClick,
    loadingCards,
    matchedCards,
    handleResetGame,
    timeLeft,
    handleStartGame,
    loadingFirstRender,
  } = useGame()

  return (
    <>
      <header>
        <ScorePanel
          matchedCards={matchedCards}
          handleResetGame={handleResetGame}
          timeLeft={timeLeft}
          loadingFirstRender={loadingFirstRender}
        />
      </header>
      <main>
        <Modal
          gameOver={gameOver}
          gameModal={gameModal}
          handleResetGame={handleResetGame}
          handleStartGame={handleStartGame}
          loadingCards={loadingCards}
        />
        <Pokemons
          loadingCards={loadingCards}
          handleCardFlip={handleCardFlip}
          cards={cards}
          disableGameClick={disableGameClick}
        />
      </main>
    </>
  )
}
