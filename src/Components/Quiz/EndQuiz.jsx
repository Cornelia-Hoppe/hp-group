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

  const scoreQuote = () => {
    switch (score) {
      case 0:
        return 'Ehhhh... you´r should probably die...Avada Kedavra!'
        // break;
      case 1:
        return 'Hmmm... you´r quite embarrassing...'
        // break;
      case 2:
        return 'Have you even seen any of the movies?!'
        // break;
      case 3:
        return 'You can do better!'
        // break;
      case 4:
        return 'Almost perfect score!'
        // break;
      case 5:
        return 'WOW!!!! Perfect score!!! 10 Points to your house!'
        // break;
      default:
        break;
    } 
  }

  return (
    <div className='quizend quiz-main--content'>
      <h3>{score} out of total {Questions.length} was correct</h3>
      <p>{scoreQuote()}</p>
      <button className="start-end-button quiz-main--button" onClick={restartQuiz}>Try again!</button>
    </div>
  )
}
