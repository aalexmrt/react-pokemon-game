import { useEffect, useState, useCallback, useRef } from 'react'
import { usePokemons } from 'src/hooks/usePokemons'
import { useTimer } from 'src/hooks/useTimer'
import { INITIAL_TIME, GAME_MODAL_TYPES } from 'src/utils/consts'

export function useGame() {
  const { getPokemons } = usePokemons()

  const [cards, setCards] = useState([])
  const [loadingCards, setLoadingCards] = useState(false)
  const [matchedCards, setMatchedCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const { timeLeft, runTimer, finishTimer } = useTimer({ setGameOver })
  const [gameModal, setGameModal] = useState('')
  const [win, setWin] = useState(false)
  const [disableGameClick, setDisableGameClick] = useState(false)
  const loadingFirstRender = useRef(true)

  const updateCards = async () => {
    try {
      setLoadingCards(true)
      const newCards = await getPokemons()
      setCards(newCards)
    } catch (e) {
      throw new Error(e.message)
    } finally {
      setLoadingCards(false)
    }
  }

  const showCard = useCallback(
    (index) =>
      cards.map((card) =>
        card.id === index ? { ...card, visible: true } : card
      ),
    [cards]
  )

  const hideCards = useCallback(
    (card1, card2) =>
      cards.map((card) =>
        card.id === card1.id || card.id === card2.id
          ? { ...card, visible: false }
          : card
      ),
    [cards]
  )

  // Handle card flip
  const handleCardFlip = useCallback(
    (index) => {
      const newCards = showCard(index)
      setCards(newCards)

      const newFlippedCards = [...flippedCards, index]
      setFlippedCards(newFlippedCards)

      // Check if there are 2 flipped cards
      if (flippedCards.length === 0) return

      // Get the 2 flipped cards
      const card1 = newCards.find((card) => card.id === newFlippedCards[0])
      const card2 = newCards.find((card) => card.id === newFlippedCards[1])

      const isSameCard = card1.pokemonId === card2.pokemonId
      if (isSameCard) {
        const newMatchedCards = [...matchedCards, ...newFlippedCards]
        setMatchedCards(newMatchedCards)

        const areAllCardsMatched = newMatchedCards.length === cards.length
        if (areAllCardsMatched) {
          setWin(true)
          setGameModal(GAME_MODAL_TYPES.WIN)
          finishTimer()
        }
      }

      // Hide cards if don't match
      if (card1.pokemonId !== card2.pokemonId) {
        // Disable click on Cards during transition to avoid bugs
        setDisableGameClick(true)
        const newCards = hideCards(card1, card2)

        setTimeout(() => {
          setCards(newCards)
          setDisableGameClick(false)
        }, 300)
      }

      setFlippedCards([])
    },
    [cards, flippedCards, matchedCards, finishTimer]
  )

  const handleResetGame = useCallback(() => {
    setCards([])
    updateCards()
    setFlippedCards([])
    setMatchedCards([])
    setGameModal('')
    setGameOver(false)
    setWin(false)
    if (!loadingCards) runTimer(INITIAL_TIME)
  }, [])

  const handleStartGame = useCallback(() => {
    setGameModal('')
    if (!loadingCards) runTimer(INITIAL_TIME)
  }, [])

  // Starting game for   first time

  const showMenuGame = useCallback(() => {
    setGameModal(GAME_MODAL_TYPES.MENU)
  }, [])

  // First time of render, show the modal MENU and set `loadingFirstRender` to false
  if (loadingFirstRender.current) {
    setGameModal(GAME_MODAL_TYPES.MENU)
    updateCards()
    loadingFirstRender.current = false
  }

  // Check if game is over because of time out
  useEffect(() => {
    if (gameOver) {
      setGameModal(GAME_MODAL_TYPES.LOSE)
    }
  }, [gameOver])

  return {
    cards,
    disableGameClick,
    matchedCards,
    timeLeft,
    gameModal,
    loadingCards,
    gameOver,
    loadingFirstRender,
    win,
    handleCardFlip,
    handleResetGame,
    showCard,
    showMenuGame,
    handleStartGame,
  }
}