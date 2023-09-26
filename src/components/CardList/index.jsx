import Card from '../Card'

import './index.css'

const CardList = ({ pokemonsWithClones, handleClick }) => {
  // Check if pokemonsListIdClones is truthy
  if (!pokemonsWithClones) {
    return null // Return null or some other fallback component
  }
  // Use map to render the list items
  return (
    <>
      {pokemonsWithClones.map((item, index) => {
        const { visible, image } = item
        return (
          <div
            className={
              visible
                ? 'pokemon-card-box card-inner-rotation'
                : 'pokemon-card-box'
            }
            key={index}
            onClick={
              visible
                ? () => {}
                : () => {
                    handleClick(item, index)
                  }
            }
          >
            <Card image={image} />
          </div>
        )
      })}
    </>
  )
}

export default CardList
