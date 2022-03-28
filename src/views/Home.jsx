import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <Link to='gryffindor'>Gryffindor</Link>
      <Link to='slytherin'>Slytherin</Link>
      <Link to='hufflepuff'>Hufflepuff</Link>
      <Link to='ravenclaw'>Ravenclaw</Link>
    </section>
  )
}
