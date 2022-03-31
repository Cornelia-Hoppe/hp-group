import React, { useContext } from 'react'
import { QuizContext } from '../../Views/Quiz';

export default function AnswerButton() {

    const Questions = useContext(QuizContext).Questions
    const score = useContext(QuizContext).score
    const setScore = useContext(QuizContext).setScore
    const currentQuestion = useContext(QuizContext).currentQuestion
    
    const clickAnswer = (answer) => {
        if (answer.isCorrect === true) {
            setScore(score+ 1)
        } 
      }

  return (
    <section className='quiz-buttons'>
        {Questions[currentQuestion].answers.map((a,index)=> (
            <button key={index} className="quiz-button" onClick={()=>clickAnswer(a)}>{a.alt}</button>
        ))}
    </section>
  )
}
