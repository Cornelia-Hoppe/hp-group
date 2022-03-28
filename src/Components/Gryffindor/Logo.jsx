import React from 'react'
import logoGryffindor from '../../images/gryffindor-logo.png'

export default function Logo() {
  return (
    <section className='header--logo'>
        <img src={logoGryffindor} alt="Gryffindor" />
    </section>
  )
}
