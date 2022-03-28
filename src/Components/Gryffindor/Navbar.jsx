import React from 'react'
import logoHouse from '../../images/house.png'

export default function Navbar() {
  return (
      <section className='header--navbar'>
        <img src={logoHouse} alt="Hogwarts Houses" />

        <nav>
        <ul>
            <li>Gryffindor</li>
            <li>Slytherin</li>
            <li>Hufflepuff</li>
            <li>Ravenclaw</li>
        </ul>
        </nav>
      
      </section>
  )
}
