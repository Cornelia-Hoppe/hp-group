import React, { useContext, useState } from "react";
import { RavenclawContext } from "../../components-ravenclaw/ravenclaw-page/RavenclawPage";

import './MenuItems.css';

export default function MenuItems({item}) {

const [dropDown, setDropDown] = useState(false)

const ctx = useContext(RavenclawContext);
const { characterList, setFilteredCharacterList } = ctx;

//Här skapar vi en filteredByGender arrow-function med en gender-parameterbehållare.
//Behållaren ska ta emot argumenten "male" och "female".
const filteredByGender = (gender) => 
{
    //Propsen vi är intresserade av är characterList och setFilteredCharacterList funktionen.
    //Här skapar vi en lista som ska filtrera karaktärerna och via det logiska uttrycket spara ner propertyn gender i vår filteredCharacterList.
    const filteredCharacterList = characterList.filter(character => character.gender === gender)

    //Med hjälp av vår funktion så uppdaterar vi vårt state med vår nya filtrerade lista.
    //Varje gång vårt state updateras renderas vår komponent om. 
    setFilteredCharacterList(filteredCharacterList);
}

//Här skapar vi en filteredBySpecies arrow-function med en species-parameterbehållare.
//Behållaren ska ta emot argumenten "human", "ghost", "werewolf" & "half-giant".
const filteredBySpecies = (species) =>
{
    const filteredSpeciesList = characterList.filter(character => character.species === species)
    setFilteredCharacterList(filteredSpeciesList);
}

//Här skapar vi en filteredByAncestry arrow-function med en ancestry-parameterbehållare.
//Behållaren ska ta emot argumenten "pure-blodd", "muggleborn" & "half-blood".
const filteredByAncestry = (ancestry) =>
{
    const filteredAncestryList = characterList.filter(character => character.ancestry === ancestry)
    setFilteredCharacterList(filteredAncestryList);
}

//Här skapar vi en filteredByOccupation arrow-function med en occupation-parameterbehållare.
//Behållaren ska ta emot argumenten "hogwartsStudent" och "hogwartsStaff".
//Om occupation får in hogwartsStudent som sitt argument så ska funktionen filtrera alla studenterna.
const filteredByOccupation = (occupation) =>
{
    if(occupation === "hogwartsStudent")
    {
        const filteredOccupationList = characterList.filter(character => character.hogwartsStudent)
        setFilteredCharacterList(filteredOccupationList);
    }
    else
    {
        const filteredOccupationList = characterList.filter(character => character.hogwartsStaff)
        setFilteredCharacterList(filteredOccupationList);
    }
}

const clickedMenu = (menuTitle) => {
    setDropDown(false);
    switch (menuTitle) {
        case 'Male':
        case 'Female':
          filteredByGender(menuTitle.toLowerCase());
          break;
        case 'Half-blood':
        case 'Muggleborn':
        case 'Pure-blood':
          filteredByAncestry(menuTitle.toLowerCase());
          break;
        case 'Human':
        case 'Ghost':
        case 'Half-giant':
        case 'Werewolf':
          filteredBySpecies(menuTitle.toLowerCase());
          break;
        case 'Student':
          filteredByOccupation('hogwartsStudent');
          break;
        case 'Staff':
          filteredByOccupation('hogwartsStaff');
          break;    
        default:
            setFilteredCharacterList(characterList);
          break;
      }
}

       return(
            <div className="menu-item">
                {item.submenu ? (
                    <>
                        <button type="button" onClick={() => setDropDown((prev) => !prev)}>
                            {item.title}<i className="fa-solid fa-angle-down"></i>
                        </button>
                        <div className={`dropdown ${dropDown ? "show" : ""}`}>
                            {item.submenu.map((submenu, index) => (
                            <button onClick={()=> clickedMenu(submenu.title)}key={index}>{submenu.title}</button>
                            ))}
                        </div>
                    </>
                    ) : (
                        <button onClick={()=> clickedMenu(item.title)}>{item.title}</button>
                )}
            </div>
       )
}