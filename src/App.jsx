import { useState } from 'react'
import { playMatchedSound, playFailedSound } from './utils'

import { ScorePanel } from './components/ScorePanel'
import Spinner from './components/Spinner'
import Modal from './components/Modal'
import CardList from './components/CardList'

import { usePokemons } from './hooks/usePokemons.js'
import { useTimer } from './hooks/useTimer.js'
import { usePokemonsClone } from './hooks/usePokemonsClone'

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
  const { pokemons, refreshPokemons, loading } = usePokemons({
    totalPokemons: 8,
  })
  const { pokemonsWithClones, setPokemonsWithClones } = usePokemonsClone({
    pokemons,
  })
  const [selectedPokemon, setSelectedPokemon] = useState([])
  const [disableClick, setDisableClick] = useState(false)
  const [score, setScore] = useState(0)
  const [endGame, setEndGame] = useState(false)
  const [win, setWin] = useState(false)

  const { timeLeft, setTimeLeft } = useTimer(INITIAL_TIMER, setEndGame)

  const handleClick = (pokemon, id) => {
    pokemon.visible = true

    const newPokemons = [...pokemonsWithClones]
    newPokemons[id] = pokemon
    setPokemonsWithClones(newPokemons)

    const newSelectedPokemon = [...selectedPokemon, pokemon]
    setSelectedPokemon(newSelectedPokemon)

    if (selectedPokemon.length === 1) {
      setDisableClick(true)
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
        setDisableClick(false)
      } else {
        // no matched

        setTimeout(() => {
          newPokemons[newSelectedPokemon[0].id].visible = false
          newPokemons[newSelectedPokemon[1].id].visible = false
          playFailedSound()
          setPokemonsWithClones(newPokemons)
          setSelectedPokemon([])
          setDisableClick(false)
        }, 300)
      }
    }
  }

  const handleReset = () => {
    refreshPokemons()
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
              disableClick={disableClick}
              handleClick={handleClick}
            ></CardList>
            <Modal endGame={endGame} win={win} resetGame={handleReset}></Modal>
          </section>
        )}
      </main>
    </>
  )
}
