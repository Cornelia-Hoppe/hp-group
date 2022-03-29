import React from 'react'
import logoGryffindor from '../../images/gryffindor-logo.png'

export default function Logo() {
  return (
    <section className='gryffindor-header--logo'>
        <img src={logoGryffindor} alt="Gryffindor" />
        <h1>Gryffindor House</h1>
    </section>
  )
}
