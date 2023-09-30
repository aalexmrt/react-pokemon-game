import Card from '../Card'

import './index.css'

const CardList = ({ pokemonsWithClones, disableClick, handleClick }) => {
  if (!pokemonsWithClones) return
  return (
    <>
      {pokemonsWithClones.map((item, id) => {
        const { visible, image } = item
        return (
          <div key={id} className="pokemon-card-rounded">
            <div
              className={
                visible
                  ? 'pokemon-card-box card-inner-rotation'
                  : 'pokemon-card-box'
              }
              onClick={
                visible || disableClick
                  ? () => {}
                  : () => {
                      handleClick(item, id)
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
