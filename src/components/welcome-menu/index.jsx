import './styles.css'
import pokeball from 'src/assets/pokeball.webp'
export function WelcomeMenu({ handleStartGame }) {
  return (
    <section className="welcome-menu">
      <div className="welcome-menu__container">
        <h1 className="welcome-menu__title">
          Welcome to the Pokemon Memory Game
        </h1>
        <div className="welcome-menu__img-container">
          <img src={pokeball} alt="image of pokeball" />
        </div>
        <p className="welcome-menu__text">
          The game ends when all pairs of pokeballs are found.
        </p>
        <button onClick={handleStartGame} className="welcome-menu__button">
          Start Game
        </button>
      </div>
    </section>
  )
}
