import React, { useContext } from 'react'
import { QuizContext } from '../../Views/Quiz'

export default function StartQuiz() {

  const setGameState = useContext(QuizContext).setGameState
    
  return (
    <div className='quizstart quiz-main--content'>
      <h3>Are you a harry potter fan or not?</h3>
      <h3>Try out your knowledge!</h3>
    <div className='quiz-main--button'>
      <button className="start-end-button" onClick={()=> setGameState('quiz')}>Start Quiz here</button>
    </div>
    </div>
  )
}
