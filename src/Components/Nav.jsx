import React from 'react'
import { NavLink } from 'react-router-dom'
import logoHouse from '../images/house.png'

export default function Nav() {

  return (
      <section className='navbar'>
        <NavLink to='/'><img src={logoHouse} alt="Hogwarts Houses" /></NavLink>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink ClassName="active" to='/gryffindor'>Gryffindor</NavLink>
            <NavLink ClassName="active" to='/slytherin'>Slytherin</NavLink>
            <NavLink ClassName="active" to='/hufflepuff'>Hufflepuff</NavLink>
            <NavLink ClassName="active" to='/ravenclaw'>Ravenclaw</NavLink>
        </nav>
      </section>
  )
}



