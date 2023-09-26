import { useEffect, useState } from 'react'
import { getRandomNumbers } from '../utils'
import getPokemons from '../services/getPokemons'
export function usePokemons() {
  const randomsNum = getRandomNumbers(8)

  const [pokemondata, setPokemondata] = useState([])

  useEffect(() => {
    getPokemons(randomsNum).then(setPokemondata)
  }, [])

  return { pokemons: pokemondata }
}
