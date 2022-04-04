import React, {useState, useEffect, createContext} from "react";
import "../styles/Ravenclaw.css"
import CharacterCard from "../Components/Ravenclaw/character-card/CharacterCard";
import Nav from '../Components/Navbar/Nav';
import Quotes from '../Components/Quotes'
import Header from '../Components/Ravenclaw/header/Header';
import {RavenclawLogo} from "../images/images"

export const RavenclawContext = createContext();

export default function RavenclawPage()
{
    //Skapa en state-variabel som heter characterList
    //Om man vill uppdatera värdet på denna variabel, måste man använda setCharacterList-funktionen
    //Initialt (från början) är värdet av characterList en tom array
    const [characterList, setCharacterList] = useState([]);

    //Vi skapar en ny state-variabel (filteredCharacterList) för att inte skriva över det man har filtrerat.
    const [filteredCharacterList, setFilteredCharacterList] = useState([]);

    //Vår callback till useEffect kommer anropas ENBART efter att första renderingen av komponenten skett.
    //Det är pga det 2a argumentet, [], som det bara sker en gång.
    useEffect(async () => 
    {
        const response = await fetch("http://hp-api.herokuapp.com/api/characters/house/ravenclaw");
        //data kommer vara vår lista med karaktärer
        const data = await response.json();
        //console.log(data);
        //vi kan nu uppdaterat värdet av våra state-variabeler med data
        setCharacterList(data);
        setFilteredCharacterList(data);
    }, []);

    //Gå igenom karaktärerna i characterList en och en.
    //För varje karaktär, skapa en CharacterCard-komponent och skicka med proppen name 
    //som fås från karaktärens namn
    //I header componenten så skickar vi med två props med värdet av vår characterList och vår setFilteredCharacterList-funktion.
    return(
        <RavenclawContext.Provider value={{characterList, setFilteredCharacterList}}>
            <div className="Ravenclaw-Page">
                <header className='gryffindor-header'>
                    <Nav />
                    <div className="hufflepuff-logo">
                    <img src={RavenclawLogo} width="100px"></img>
                    <h3>Ravenclaw house</h3></div>
                </header>
                <div className="main-container">
                    <Header />
                {
                filteredCharacterList.map(character => <CharacterCard 
                    name={character.name} 
                    image={character.image} 
                    hogwartsStaff={character.hogwartsStaff} 
                    hogwartsStudent={character.hogwartsStudent} 
                    gender={character.gender} 
                    ancestry={character.ancestry} 
                    species={character.species} 
                    patronous={character.patronous}
                    actor={character.actor}/>)
                }
                </div>
                <footer>
                    <Quotes />
                </footer>
            </div>
        </RavenclawContext.Provider>
    )
};