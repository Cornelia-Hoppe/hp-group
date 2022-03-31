import React, { useContext } from 'react'
import { QuizContext } from '../../Views/Quiz'
import AnswerButton from './AnswerButton';


export default function QuizGame() {

    const Questions = useContext(QuizContext).Questions
    const setGameState = useContext(QuizContext).setGameState
    const currentQuestion = useContext(QuizContext).currentQuestion
    const setCurrentQuestion = useContext(QuizContext).setCurrentQuestion

    const nextquestion = () => {
        if (currentQuestion < Questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1) 
        } else {
            setGameState('end')
        }
    }

  return (
    <section className='quizgame'>

      <h2>{Questions[currentQuestion].question}</h2>
      <AnswerButton />
      <button onClick={nextquestion}>Next Question</button>
    
    </section>
  )
}
