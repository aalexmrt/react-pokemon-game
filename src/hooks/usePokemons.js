import { useState } from 'react'
import { retrievePokemons } from 'src/services/retrieve-pokemons'

export function usePokemons() {
  const [loadingPokemons, setLoadingPokemons] = useState(false)
  const [errorPokemons, setErrorPokemons] = useState(null)

  const shufflePokemonsList = (pokemons) => {
    return pokemons.sort(() => Math.random() - 0.5)
  }
  const generateClones = (pokemons) => {
    const clonedPokemons = [...pokemons, ...pokemons]
    return clonedPokemons.map((item, index) => ({ ...item, id: index }))
  }
  const getPokemons = async () => {
    try {
      setLoadingPokemons(true)
      const pokemons = await retrievePokemons()
      const pokemonsWithClones = generateClones(pokemons)

      return shufflePokemonsList(pokemonsWithClones)
    } catch (e) {
      setErrorPokemons(e.message)
    } finally {
      setLoadingPokemons(false)
    }
  }

  return { getPokemons, loadingPokemons, errorPokemons }
}
