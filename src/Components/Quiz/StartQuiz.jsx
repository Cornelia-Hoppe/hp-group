import React, { useContext } from 'react'
import { QuizContext } from '../../Views/Quiz'

export default function StartQuiz() {

  const setGameState = useContext(QuizContext).setGameState
    
  return (
    
    <button onClick={()=> setGameState('quiz')}>Start Quiz here</button>
    
  )
}
