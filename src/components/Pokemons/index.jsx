import { Spinner } from 'src/components/Spinner'
import coverCard from 'src/assets/cover-card.jpeg'

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
  const { id, image, visible, pokemonId } = pokemonItem
  const handleClick = (id) => {
    handleCardFlip(id)
  }

  const styles = visible ? 'flipped' : null

  const isClickable =
    !visible && !disableGameClick ? (event) => handleClick(id) : null

  return (
    <div onClick={isClickable} className={`pokemon-card-rounded ${styles}`}>
      <img className="front-card" src={coverCard}></img>
      <img className="back-card" src={image} alt="pokemon-card"></img>
    </div>
  )
}

export function ListOfPokemons({ pokemons, handleCardFlip, disableGameClick }) {
  if (pokemons === undefined) return

  return (
    <>
      {pokemons.map((item) => (
        <div key={item.id} className="overflow-hidden">
          <PokemonCard
            pokemonItem={item}
            handleCardFlip={handleCardFlip}
            disableGameClick={disableGameClick}
          />
        </div>
      ))}
    </>
  )
}

export function Pokemons({
  loadingCards,
  handleCardFlip,
  disableGameClick,
  cards,
}) {
  return (
    <section>
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
