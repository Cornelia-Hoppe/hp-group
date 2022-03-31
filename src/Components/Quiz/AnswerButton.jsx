import React, { useContext } from 'react'
import { QuizContext } from '../../Views/Quiz';

export default function AnswerButton() {

    const Questions = useContext(QuizContext).Questions
    const score = useContext(QuizContext).score
    const setScore = useContext(QuizContext).setScore
    const currentQuestion = useContext(QuizContext).currentQuestion
    const setSelected = useContext(QuizContext).setSelected
    
    const clickAnswer = (answer) => {
      if (answer.isCorrect === true) {
        setScore(score+ 1)
      } 
        setSelected(true)
    }

  return (
    <section className='answer-buttons'>
        {Questions[currentQuestion].answers.map((a,index)=> (
            <button key={index} className="answer-button" onClick={()=>clickAnswer(a)}>{a.alt}</button>
        ))}
    </section>
  )
}
