import React from "react"
import "./style.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Views/Home"
import Gryffindor from "./Views/Gryffindor"
import Slytherin from "./Views/Slytherin"
import Hufflepuff from "./Views/Hufflepuff"
import Ravenclaw from "./Views/Ravenclaw"
import House from "./Views/House"
import Quiz from "./Views/Quiz"
import SortingHat from "./Views/SortingHat"
import Memory from "./Views/Memory"

export default function App() {

    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gryffindor" element={<Gryffindor />}/>
            <Route path="/slytherin" element={<Slytherin />}/> 
            <Route path="/hufflepuff" element={<Hufflepuff />}/>
            <Route path="/ravenclaw" element={<Ravenclaw />}/>  
            <Route path="/house" element={<House />}/>  
            <Route path="/quiz" element={<Quiz />}/>
            <Route path="/sortinghat" element={<SortingHat />}/>
            <Route path="/memory" element={<Memory />}/>
          </Routes>
        </Router>
    )
}

