import coverCard from '../../assets/cover-card.jpeg'

import './index.css'

export const Card = ({ image }) => {
  return (
    <>
      <img className="front-card" src={coverCard}></img>
      <img className="back-card" src={image} alt="pokemon-card"></img>
    </>
  )
}

export default Card
