import React, { useContext } from 'react'
import { QuizContext } from '../../Views/Quiz'

export default function EndQuiz() {

  const Questions = useContext(QuizContext).Questions
  const setGameState = useContext(QuizContext).setGameState
  const score = useContext(QuizContext).score
  const setScore = useContext(QuizContext).setScore
  const setCurrentQuestion = useContext(QuizContext).setCurrentQuestion
  const setSelected = useContext(QuizContext).setSelected

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setGameState('quiz')
    setSelected(false)
  }

  return (
    <div className='quizend quiz-main--content'>
      <h3>{score} out of total {Questions.length} was correct</h3>
      <button className="start-end-button quiz-main--button" onClick={restartQuiz}>Try again!</button>
    </div>
  )
}
