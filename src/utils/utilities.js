import matchedSound from '../assets/sounds/correct.mp3'
import failedSound from '../assets/sounds/fail.mp3'

import { GAME_CONFIG_BASED_ON_SCREEN } from './consts'

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

export function getConfigurationGameBasedOnScreenWidth(width) {
  const keys = Object.keys(GAME_CONFIG_BASED_ON_SCREEN)
    .map(Number)
    .sort((a, b) => a - b)
  const result = keys.find((key) => width <= key) || keys[keys.length - 1]

  return GAME_CONFIG_BASED_ON_SCREEN[result]
}
