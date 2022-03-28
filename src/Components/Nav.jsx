import React from 'react'
import { NavLink } from 'react-router-dom'
import logoHouse from '../images/house.png'
import './Nav.css'

export default function Nav() {

  return (
      <section className='navbar'>
        <NavLink to='/'><img src={logoHouse} alt="Hogwarts Houses" /></NavLink>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink activeClassName="active" to='/gryffindor'>Gryffindor</NavLink>
            <NavLink activeClassName="active" to='/slytherin'>Slytherin</NavLink>
            <NavLink activeClassName="active" to='/hufflepuff'>Hufflepuff</NavLink>
            <NavLink activeClassName="active" to='/ravenclaw'>Ravenclaw</NavLink>
        </nav>
      
      </section>
  )
}



