import Card from '../Card'

import './index.css'

const CardList = ({ pokemonsWithClones, selectionDisabled, handleClick }) => {
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
          <div key={index} className="pokemon-card-rounded">
            <div
              className={
                visible
                  ? 'pokemon-card-box card-inner-rotation'
                  : 'pokemon-card-box'
              }
              onClick={
                visible || selectionDisabled
                  ? () => {}
                  : () => {
                      handleClick(item, index)
                    }
              }
            >
              <Card image={image} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default CardList
