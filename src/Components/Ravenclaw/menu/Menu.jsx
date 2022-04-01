import React, { useContext } from 'react'
import MenuItems from './MenuItems'

import './Menu.css';
import { RavenclawContext } from "../../../Views/Ravenclaw";

export default function Menu() {

    const ctx = useContext(RavenclawContext);
    const { characterList, setFilteredCharacterList } = ctx;

  const menuItems = [
    {title: "All"},
    {title: "Gender",
        submenu: [
          {title: "Female"},
          {title: "Male"},
        ]
    },
    {title: "Ancestry",
        submenu: [
          {title: "Half-blood"},
          {title: "Muggleborn"},
          {title: "Pure-blood"},
        ]
    },
    {title: "Species",
        submenu: [
          {title: "Human"},
          {title: "Ghost"},
          {title: "Half-giant"},
          {title: "Werewolf"},
        ]
    },
    {title: "Occupation",
        submenu: [
          {title: "Student"},
          {title: "Staff"},
        ]
    },
  ]

    //Funktion som filtrerar vårt input-element.
    //inputString håller värdet av det som skrivs i inputfältet.
    //För att en karaktär ska visas på skärmen, måste karaktärens namn innehålla det man skrivit i inputfältet.
    const filterByInput = (inputString) =>
    {
        const filteredCharacterNameList = characterList.filter(character => character.name.toLowerCase().includes(inputString.toLowerCase()));
        setFilteredCharacterList(filteredCharacterNameList);
    }

  return (
    <section className='menu'>
      <div>
      <input className="searchbar" type="text" placeholder="Search for character" onInput={ (event) => filterByInput(event.target.value) } />
      </div>
      <div className="menuBar">
        {
            menuItems.map((menu, index) => <MenuItems item={menu} key={index} />)
        }
      </div>
    </section>
  )
}