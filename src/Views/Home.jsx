import React from 'react'
import { Link } from 'react-router-dom'
import {HouseLogo} from '../images/images'
import HomeNav from '../assets/HomeNav'

export default function Home() {
  return (
    <div className='home-body'>
      <section className='home-buttons'>
        <HomeNav/>
      <img src={HouseLogo} alt="Houses" />
        <button> <Link className='link-a' to='house'>Houses</Link></button>
        <button> <Link className='link-a' to='quiz'>Quiz</Link></button>
        <button> <Link className='link-a' to='sortinghat'>Sorting hat</Link></button>
        <button> <Link className='link-a' to='memory'>Memory</Link></button>
      </section>
    </div>
  )
}
