import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "./Header.css";
export default function Header(props)
{
    //Här skapar vi en filteredByGender arrow-function med en gender-parameterbehållare.
    //Behållaren ska ta emot argumenten "male" och "female".
    const filteredByGender = (gender) => 
    {
        //Propsen vi är intresserade av är characterList och setFilteredCharacterList funktionen.
        //Här skapar vi en lista som ska filtrera karaktärerna och via det logiska uttrycket spara ner propertyn gender i vår filteredCharacterList.
        const filteredCharacterList = props.characterList.filter(character => character.gender === gender)

        //Med hjälp av vår funktion så uppdaterar vi vårt state med vår nya filtrerade lista.
        //Varje gång vårt state updateras renderas vår komponent om. 
        props.setFilteredCharacterList(filteredCharacterList);
    }
    //Här skapar vi en filteredBySpecies arrow-function med en species-parameterbehållare.
    //Behållaren ska ta emot argumenten "human", "ghost", "werewolf" & "half-giant".
    const filteredBySpecies = (species) =>
    {
        const filteredSpeciesList = props.characterList.filter(character => character.species === species)
        props.setFilteredCharacterList(filteredSpeciesList);
    }

    //Här skapar vi en filteredByAncestry arrow-function med en ancestry-parameterbehållare.
    //Behållaren ska ta emot argumenten "pure-blodd", "muggleborn" & "half-blood".
    const filteredByAncestry = (ancestry) =>
    {
        const filteredAncestryList = props.characterList.filter(character => character.ancestry === ancestry)
        props.setFilteredCharacterList(filteredAncestryList);
    }

    //Här skapar vi en filteredByOccupation arrow-function med en occupation-parameterbehållare.
    //Behållaren ska ta emot argumenten "hogwartsStudent" och "hogwartsStaff".
    //Om occupation får in hogwartsStudent som sitt argument så ska funktionen filtrera alla studenterna.
    const filteredByOccupation = (occupation) =>
    {
        if(occupation === "hogwartsStudent")
        {
            const filteredOccupationList = props.characterList.filter(character => character.hogwartsStudent)
            props.setFilteredCharacterList(filteredOccupationList);
        }
        else
        {
            const filteredOccupationList = props.characterList.filter(character => character.hogwartsStaff)
            props.setFilteredCharacterList(filteredOccupationList);
        }
    }

     //Funktion som filtrerar vårt input-element.
     //inputString håller värdet av det som skrivs i inputfältet.
     //För att en karaktär ska visas på skärmen, måste karaktärens namn innehålla det man skrivit i inputfältet.
     const filterByInput = (inputString) =>
    {
        const filteredCharacterNameList = props.characterList.filter(character => character.name.toLowerCase().includes(inputString.toLowerCase()));
        props.setFilteredCharacterList(filteredCharacterNameList);
    }

    //Här renderar vi ut vår Dropdown-meny och våra knappar.
    //Vi lägger ett onClick-event på våra knappar.
    //För att kunna ha ett onClick-event och även skicka med argument till våra funktioner, behöver vi en arrowfunktion i vårt onClick-event.
    //Input-elementet söker efter karaktärer.
    return(
        <nav className="navbar">
            <img className="houses-logo" src="houses-logo.png" alt="Harry Potter Houses Logotype" />
            <DropdownButton id="dropdown-basic-button" title="Gender">
            <Dropdown.Item onClick={ () => filteredByGender("male")}>Man</Dropdown.Item>
            <Dropdown.Item onClick={ () => filteredByGender("female")}>Female</Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="Species">
            <Dropdown.Item onClick={ () => filteredBySpecies("human")}>Human</Dropdown.Item>
            <Dropdown.Item onClick={ () => filteredBySpecies("ghost")}>Ghost</Dropdown.Item>
            <Dropdown.Item onClick={ () => filteredBySpecies("werewolf")}>Werewolf</Dropdown.Item>
            <Dropdown.Item onClick={ () => filteredBySpecies("half-giant")}>Half-Giant</Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="Ancestry">
            <Dropdown.Item onClick={ () => filteredByAncestry("pure-blood")}>Pure-Blood</Dropdown.Item>
            <Dropdown.Item onClick={ () => filteredByAncestry("half-blood")}>Half-Blood</Dropdown.Item>
            <Dropdown.Item onClick={ () => filteredByAncestry("muggleborn")}>Muggleborn</Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="dropdown-basic-button" title="Occupation">
            <Dropdown.Item onClick={ () => filteredByOccupation("hogwartsStudent")}>Student</Dropdown.Item>
            <Dropdown.Item onClick={ () => filteredByOccupation("hogwartsStaff")}>Staff</Dropdown.Item>
            </DropdownButton>

            <input className="searchbar" type="text" placeholder="Search for character" onInput={ (event) => filterByInput(event.target.value) } />
        </nav>
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