import { useEffect, useState } from 'react'
import { playMatchedSound, playFailedSound } from './utils'

import { ScorePanel } from './components/ScorePanel'
import Spinner from './components/Spinner'
import Modal from './components/Modal'
import CardList from './components/CardList'

import { usePokemons } from './hooks/usePokemons'
import { useTimer } from './hooks/useTimer'

import './App.css'

const INITIAL_TIMER = 90

function checkPokemonsMatch(pokemonArray) {
  if (pokemonArray[0].pokemonId === pokemonArray[1].pokemonId) {
    return true
  } else {
    return false
  }
}

export default function App() {
  const [pokemonsWithClones, setPokemonsWithClones] = useState()
  const [selectedPokemon, setSelectedPokemon] = useState([])
  const [selectionDisabled, setSelectionDisabled] = useState(false)
  const [score, setScore] = useState(0)
  const [endGame, setEndGame] = useState(false)
  const [win, setWin] = useState(false)

  const { pokemons, setRefresh, loading } = usePokemons(8)
  const { timeLeft, setTimeLeft } = useTimer(INITIAL_TIMER, setEndGame)

  useEffect(() => {
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
    pokemon.visible = true
    if (!pokemon.index) {
      pokemon.index = index
    }

    const newPokemons = [...pokemonsWithClones]
    newPokemons[index] = pokemon
    setPokemonsWithClones(newPokemons)

    const newSelectedPokemon = [...selectedPokemon, pokemon]
    setSelectedPokemon(newSelectedPokemon)

    if (selectedPokemon.length === 1) {
      setSelectionDisabled(true)
      if (checkPokemonsMatch(newSelectedPokemon)) {
        // matched
        const newScore = score + 1
        setScore(newScore)
        playMatchedSound()

        if (newScore === pokemons.length) {
          setWin(true)
          setEndGame(true)
        }
        setSelectedPokemon([])
        setSelectionDisabled(false)
      } else {
        // no matched

        setTimeout(() => {
          newPokemons[newSelectedPokemon[0].index].visible = false
          newPokemons[newSelectedPokemon[1].index].visible = false
          playFailedSound()
          setPokemonsWithClones(newPokemons)
          setSelectedPokemon([])
          setSelectionDisabled(false)
        }, 300)
      }
    }
  }

  const handleReset = () => {
    setRefresh(true)
    setSelectedPokemon([])
    setScore(0)
    setEndGame(false)
    setTimeLeft(INITIAL_TIMER)
    setWin(false)
  }
  return (
    <>
      <header>
        <ScorePanel
          handleReset={handleReset}
          time={timeLeft}
          score={score}
        ></ScorePanel>
      </header>
      <main>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <section>
            <CardList
              pokemonsWithClones={pokemonsWithClones}
              selectionDisabled={selectionDisabled}
              handleClick={handleClick}
            ></CardList>
            <Modal endGame={endGame} win={win} resetGame={handleReset}></Modal>
          </section>
        )}
      </main>
    </>
  )
}
