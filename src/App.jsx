import './App.css'
import { Pokemons } from 'src/components/pokemons'
import { GameInfo } from 'src/components/game-info'
import { useGame } from 'src/hooks/useGame'
import { WelcomeMenu } from 'src/components/welcome-menu'
import { GameModals } from 'src/components/game-modals'
export default function App() {
  const {
    gameOver,
    gameModalType,
    isFirstGame,
    cards,
    handleCardFlip,
    disableGameClick,
    toggleDisableGameClick,
    loadingCards,
    matchedCards,
    handleResetGame,
    timeLeft,
    handleStartGame,
    loadingFirstRender,
    toggleTimer,
  } = useGame()
  return (
    <div className="app">
      {isFirstGame ? (
        <WelcomeMenu handleStartGame={handleStartGame} />
      ) : (
        <>
          <header>
            <GameInfo
              matchedCards={matchedCards}
              handleResetGame={handleResetGame}
              timeLeft={timeLeft}
              loadingFirstRender={loadingFirstRender}
              toggleTimer={toggleTimer}
              toggleDisableGameClick={toggleDisableGameClick}
            />
          </header>
          <main>
            {gameModalType !== '' && (
              <GameModals
                gameOver={gameOver}
                gameModalType={gameModalType}
                handleResetGame={handleResetGame}
                loadingCards={loadingCards}
              />
            )}

            {gameModalType === '' && (
              <Pokemons
                loadingCards={loadingCards}
                handleCardFlip={handleCardFlip}
                cards={cards}
                disableGameClick={disableGameClick}
              />
            )}
          </main>
        </>
      )}
    </div>
  )
}

// }
// {

// }
