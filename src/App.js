import React from "react"
import "./style.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Gryffindor from "./views/Gryffindor"
import Slytherin from "./views/Slytherin"
import Hufflepuff from "./views/Hufflepuff"
import Ravenclaw from "./views/Ravenclaw"



export default function App() {

    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gryffindor" element={<Gryffindor />}/>
            <Route path="/slytherin" element={<Slytherin />}/> 
            <Route path="/hufflepuff" element={<Hufflepuff />}/>
            <Route path="/ravenclaw" element={<Ravenclaw />}/>  
          </Routes>
        </Router>
    )
}

