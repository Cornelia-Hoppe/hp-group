import React, { useContext } from 'react'
import { QuizContext } from '../../Views/Quiz'

export default function EndQuiz() {

  const setGameState = useContext(QuizContext).setGameState
  const score = useContext(QuizContext).score
  const setCurrentQuestion = useContext(QuizContext).setCurrentQuestion

  const restartQuiz = () => {
    setGameState('quiz')
    setCurrentQuestion(0)
  }

  return (
    <div>
      <h1>{score}</h1>
      <button onClick={restartQuiz}>Restart</button>
    </div>
  )
}
