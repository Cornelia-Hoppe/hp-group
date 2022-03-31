import React from 'react'
import MenuItems from './MenuItems'


export default function Menu() {

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

  return (
    <section className='menu'>
        {menuItems.map((menu, index) => (
          <MenuItems item={menu} key={index} />   
        ))}

    </section>
  )
}


