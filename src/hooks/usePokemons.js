import { useEffect, useState } from 'react'
import { getRandomNumbers } from '../utils'
import getPokemons from '../services/getPokemons'
export function usePokemons({ totalPokemons }) {
  const randomsNum = getRandomNumbers(totalPokemons)
  const [pokemondata, setPokemondata] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [refresh, setRefresh] = useState(false)

  const refreshPokemons = () => {
    return setRefresh(true)
  }

  useEffect(() => {
    if (refresh) {
      setRefresh(false)
    }
    try {
      setLoading(true)
      getPokemons(randomsNum).then(setPokemondata)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [setPokemondata, refresh])

  return { pokemons: pokemondata, refreshPokemons, loading, error }
}
