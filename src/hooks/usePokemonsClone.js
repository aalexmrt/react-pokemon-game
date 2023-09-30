import { useState, useEffect } from 'react'
export function usePokemonsClone({ pokemons }) {
  const [pokemonsWithClones, setPokemonsWithClones] = useState([])
  useEffect(() => {
    if (!pokemons) return
    const updatedPokemons = pokemons.map((value, index) => ({
      id: index,
      visible: false,
      ...value,
    }))
    const clonedPokemons = [
      ...updatedPokemons,
      ...updatedPokemons.map((item) => ({
        ...item,
        id: item.id + updatedPokemons.length,
      })),
    ]
    setPokemonsWithClones(clonedPokemons)
  }, [pokemons])
  return { pokemonsWithClones, setPokemonsWithClones }
}
