import React from 'react'
import {GryffindorLogo} from "../../images/images"

export default function Logo() {
  return (
    <section className='gryffindor-header--logo'>
        <img src={GryffindorLogo} alt="Gryffindor" />
        <h1>Gryffindor House</h1>
    </section>
  )
}
