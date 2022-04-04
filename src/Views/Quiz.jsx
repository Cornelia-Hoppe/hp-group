import React, { createContext, useState } from 'react'
import '../styles/Quiz.css'
import StartQuiz from '../Components/Quiz/StartQuiz';
import QuizGame from '../Components/Quiz/QuizGame';
import EndQuiz from '../Components/Quiz/EndQuiz';
import {Questions} from "../assets/Questions"
import HomeNav from '../Components/HomeNav';

export const QuizContext = createContext()
export default function Quiz() {

  const [gameState, setGameState] = useState('start')
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selected, setSelected] = useState(false)

  return (
    <QuizContext.Provider value={{Questions, gameState, setGameState, score, setScore, currentQuestion, setCurrentQuestion,selected, setSelected}} >
      <section className='quiz-body'>
        <header className='quiz-header'>
          <HomeNav />
          <h1>Hogwarts quiz</h1>
        </header>
          <main className='quiz-main'>
            {gameState === 'start' && <StartQuiz />}
            {gameState === 'quiz' && <QuizGame />}
            {gameState === 'end' && <EndQuiz />}
          </main>
      </section>
    </QuizContext.Provider>
  )
}



