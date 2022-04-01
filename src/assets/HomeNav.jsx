import React from 'react'
import { Link } from 'react-router-dom'
import {HouseLogo} from '../images/images'

export default function HomeNav() {
    return (
      <div className='home-nav-body'>
        <section className='home-nav'>
        <img src={HouseLogo} alt="Houses" />
        <Link className='link-b' to='/'>Home</Link>
        </section>
      </div>
    )
  }