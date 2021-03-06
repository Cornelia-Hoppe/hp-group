import React from 'react'
import { Link } from 'react-router-dom'
import {HouseLogo, Sparkel} from '../images/images'
import Quote from '../Components/Quotes';

export default function Home() {
  return (
    <div className='home-body'>
      <img src={Sparkel} alt='spark' className='spark-img'/>
      <section className='home-buttons'>
      <img src={HouseLogo} alt="Houses" />
        <button> <Link className='link-a' to='house'>Houses</Link></button>
        <button> <Link className='link-a' to='sortinghat'>Sorting hat</Link></button>
        <button> <Link className='link-a' to='quiz'>Quiz</Link></button>
        <button> <Link className='link-a' to='memory'>Memory</Link></button>
      </section>
      <Quote />
    </div>
  )
}
