import { useEffect, useState, useCallback } from 'react'
import './App.css'
import { BoardGame } from './components/BoardGame'
import { getRandomNumbers } from './utils'
import { ScorePanel } from './components/ScorePanel'
import { usePokemons } from './hooks/usePokemons'

import getPokemons from './services/getPokemons'
import Card from './components/Card'
import CardList from './components/CardList'
const TIME = 30
const SCORE = 0

// function useSelectedPokemons() {
//   const [selectedPokemon, setSelectedPokemon] = useState([])

//   const resetSelectedPokemons = () => {
//     setSelectedPokemon([])
//   }

//   return { selectedPokemon, setSelectedPokemon, resetSelectedPokemons }
// }

// function checkPokemons(pokemonArray) {
//   console.log('je')
//   if (pokemonArray[0].pokemonId === pokemonArray[1].pokemonId) {
//     console.log('matched')
//     return true
//   } else {
//     console.log('no matched')
//     return false
//   }
// }

export default function App() {
  const { pokemons } = usePokemons()
  const [pokemonsWithClones, setPokemonsWithClones] = useState()

  useEffect(() => {
    console.log('use effect')
    if (pokemons) {
      setPokemonsWithClones(
        pokemons.reduce((acc, value, index) => {
          const pokemon = {
            id: index + 1,
            visible: false,
            ...value,
          }
          const clonedPokemon = {
            ...pokemon,
            id: index + 100,
          }
          acc.push(pokemon)
          acc.push(clonedPokemon)
          acc.sort(() => Math.random() - 0.5)
          return acc
        }, [])
      )
    }
  }, [pokemons])

  const handleClick = (pokemon, index) => {
    console.log(pokemon)
    pokemon.visible = true

    const newPokemons = [...pokemonsWithClones]
    newPokemons[index] = pokemon
    console.log(newPokemons)
    setPokemonsWithClones(newPokemons)
  }
  console.log(pokemonsWithClones)
  return (
    <>
      <main>
        <section>
          <CardList
            pokemonsWithClones={pokemonsWithClones}
            handleClick={handleClick}
          ></CardList>
        </section>
      </main>
    </>
  )
}
