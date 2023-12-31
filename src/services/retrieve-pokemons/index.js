import { getListOfUniqueNumbers } from 'src/utils/utilities'

const APIURL = 'https://pokeapi.co/api/v2/pokemon/'

const getListOfPromises = async (listOfUniqueNumbers) => {
  return Array.from(listOfUniqueNumbers, async (uniqueNumber) => {
    const retrieveId = uniqueNumber
    const response = await fetch(`${APIURL}${retrieveId}`)
    const json = await response.json()

    const { id, name, sprites } = json
    const image = sprites.other.dream_world.front_default
    return { id: null, pokemonId: id, name, image, visible: false }
  })
}
const resolveListOfPromises = async (listOfPromises) => {
  return Promise.all(listOfPromises)
}
export async function retrievePokemons({ totalPokemons }) {
  const listOfUniqueNumbers = getListOfUniqueNumbers(totalPokemons)
  const listOfPromises = await getListOfPromises(listOfUniqueNumbers)
  const listOfPokemons = await resolveListOfPromises(listOfPromises)

  return listOfPokemons
}
