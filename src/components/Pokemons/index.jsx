import { Spinner } from 'src/components/Spinner'
import pokeball from 'src/assets/pokeball.webp'
import './styles.css'

export function LoadSpinner() {
  return (
    <>
      <div className="spinner-box">
        <Spinner />
      </div>
    </>
  )
}
export function PokemonCard({ pokemonItem, handleCardFlip, disableGameClick }) {
  const { id, image, visible, pokemonId, name } = pokemonItem
  const handleClick = (id) => {
    if (!visible && !disableGameClick) {
      handleCardFlip(id)
    }
  }

  const pokemonCardStyle = visible
    ? 'pokemons__card pokemons__card--flipped '
    : 'pokemons__card'

  return (
    <div onClick={() => handleClick(id)} className={pokemonCardStyle}>
      <img
        className="pokemons__cover-img"
        src={pokeball}
        alt="image of a pokeball"
      />

      <img
        className="pokemons__back-img"
        src={image}
        alt={`Pokemon ${name} with id ${pokemonId}`}
      />
    </div>
  )
}

export function ListOfPokemons({ pokemons, handleCardFlip, disableGameClick }) {
  if (pokemons === undefined) return

  return (
    <ul className="pokemons__list">
      {pokemons.map((item) => (
        <li key={item.id} className="pokemons__item">
          <PokemonCard
            key={item.id}
            pokemonItem={item}
            handleCardFlip={handleCardFlip}
            disableGameClick={disableGameClick}
          />
        </li>
      ))}
    </ul>
  )
}

export function Pokemons({
  loadingCards,
  handleCardFlip,
  disableGameClick,
  cards,
}) {
  return (
    <section className="pokemons">
      {loadingCards ? (
        <LoadSpinner />
      ) : (
        <ListOfPokemons
          pokemons={cards}
          handleCardFlip={handleCardFlip}
          disableGameClick={disableGameClick}
        />
      )}
    </section>
  )
}
