import React from 'react'
import { Link } from 'react-router-dom'
import alHouses from '../images/house.png'

export default function HomeNav() {
    return (
      <div className='home-nav-body'>
        <section className='home-nav'>
        <img src={alHouses} alt="Houses" />
        <Link className='link-b' to='/'>Home</Link>
        </section>
      </div>
    )
  }