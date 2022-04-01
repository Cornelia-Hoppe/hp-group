import React from "react";
import Menu from "../menu/Menu";

import "./Header.css";

export default function Header(props)
{

    //Här renderar vi ut vår Dropdown-meny och våra knappar.
    //Vi lägger ett onClick-event på våra knappar.
    //För att kunna ha ett onClick-event och även skicka med argument till våra funktioner, behöver vi en arrowfunktion i vårt onClick-event.
    //Input-elementet söker efter karaktärer.
    return(
        <header className="header">
            <nav className="navbar">
                <img className="houses-logo" src="houses-logo.png" alt="Harry Potter Houses Logotype" />
            </nav>
            <Menu />
        </header>
    )
}

/*
1. Skapa ett input-element där man söker efter karaktärer
2. Skapa en funktion, filterByInput(inputString)
3. Funktionen ska filtrera karaktärer vars namn innehåller inputString. Javascript-funktionen contains kan
användas. T.ex.
"Bananpannkaka".contains("pann") = true (strängen pann finns i bananpannkaka)
4. Inputfältet ska lyssna på oninput-event. T.ex:
<input oninput={ (evt) => filterByInput(evt.target.value) }
5. Till sist behöver funktionen filterByInput sätta state-variabeln filteredCharacterList
*/