import React from "react"
import "./style.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Views/Home"
import Gryffindor from "./Views/Gryffindor"
import Slytherin from "./Views/Slytherin"
import Hufflepuff from "./Views/Hufflepuff"
import Ravenclaw from "./Views/Ravenclaw"
import Quiz from "./Views/Quiz"

export default function App() {

    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gryffindor" element={<Gryffindor />}/>
            <Route path="/slytherin" element={<Slytherin />}/> 
            <Route path="/hufflepuff" element={<Hufflepuff />}/>
            <Route path="/ravenclaw" element={<Ravenclaw />}/>  
            <Route path="/quiz" element={<Quiz />}/>  
          </Routes>
        </Router>
    )
}

