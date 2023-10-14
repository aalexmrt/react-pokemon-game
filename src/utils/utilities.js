import matchedSound from '../assets/sounds/correct.mp3'
import failedSound from '../assets/sounds/fail.mp3'

// Utils
export function getListOfUniqueNumbers(totalUniqueNumbers) {
  const randomNumbers = []
  // Fill randomNumbers with uniques numbers
  while (randomNumbers.length < totalUniqueNumbers) {
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
