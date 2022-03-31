import React, { createContext, useState } from 'react'
import '../styles/Quiz.css'
import StartQuiz from '../Components/Quiz/StartQuiz';
import QuizGame from '../Components/Quiz/QuizGame';
import EndQuiz from '../Components/Quiz/EndQuiz';
import {Questions} from "../assets/Questions"

export const QuizContext = createContext()
export default function Quiz() {

  const [gameState, setGameState] = useState('start')
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  return (
    <QuizContext.Provider value={{Questions, gameState, setGameState, score, setScore, currentQuestion, setCurrentQuestion}} >
      <section className='quiz-body'>
        <h1>Hogwarts quiz</h1>
          {gameState === 'start' && <StartQuiz />}
          {gameState === 'quiz' && <QuizGame />}
          {gameState === 'end' && <EndQuiz />}
      </section>
    </QuizContext.Provider>
  )
}



