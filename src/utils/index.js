import matchedSound from '../assets/sounds/correct.mp3'
import failedSound from '../assets/sounds/fail.mp3'

// Utils
export const shuffleArray = (array) => {
  let currentIndex = array.length
  let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element using destructuring assignment.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

export const getRandomNumbers = ({ totalPokemons }) => {
  const randomNumbers = []
  // Fill randomNumbers with uniques numbers
  while (randomNumbers.length < totalPokemons) {
    const randomNumber = Math.floor(Math.random() * (200 - 1) + 1)
    if (randomNumbers.indexOf(randomNumber) === -1) {
      randomNumbers.push(randomNumber)
    }
  }
  return randomNumbers
}

export const playMatchedSound = () => {
  const audio = new Audio(matchedSound)
  audio.play()
}

export const playFailedSound = () => {
  const audio = new Audio(failedSound)
  audio.play()
}
