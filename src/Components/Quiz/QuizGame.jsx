import React, { useContext } from 'react'
import { QuizContext } from '../../Views/Quiz'
import AnswerButton from './AnswerButton';

export default function QuizGame() {

    const Questions = useContext(QuizContext).Questions
    const setGameState = useContext(QuizContext).setGameState
    const currentQuestion = useContext(QuizContext).currentQuestion
    const setCurrentQuestion = useContext(QuizContext).setCurrentQuestion
    const selected = useContext(QuizContext).selected
    const setSelected = useContext(QuizContext).setSelected

    const nextquestion = () => {
      if (selected === false) {
        // alert('you havent selected your answer')
      } else {
        if (currentQuestion < Questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1) 
          setSelected(false)
        } else {
          setGameState('end')
        }
      }
    }


  return (
    <section className='quizgame quiz-main--content'>
      <p>Question {currentQuestion +1}/{Questions.length}</p>
      <h2>{Questions[currentQuestion].question}</h2>
      {selected === false && <p>Select your answer</p>}
      <AnswerButton />
      <button className="next-button" onClick={nextquestion}>Next Question</button>
    </section>
  )
}
