import { useEffect, useState } from 'react'
import { USE_TIMER_INITIAL_STATE } from 'src/utils/consts'

export function useTimer({ setGameOver }) {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(USE_TIMER_INITIAL_STATE)
  const [timerOn, setTimerOn] = useState(false)

  const finishTimer = () => {
    setTimerOn(false)
  }

  const runTimer = (seconds) => {
    setTimeLeft(seconds)
    setTimerOn(true)
  }

  useEffect(() => {
    if (!timerOn) return

    if (timerOn && !timeLeft) return setGameOver(true) && setTimerOn(false)

    // exit early when we reach 0
    if (!timeLeft) return

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId)
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft])
  return { timeLeft, runTimer, finishTimer }
}
