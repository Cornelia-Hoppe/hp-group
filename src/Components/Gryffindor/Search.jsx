import React, {useContext} from 'react'
import { GlobalContext } from '../../Views/Gryffindor'

export default function Search() {

  const ctx = useContext(GlobalContext)
  const search = ctx.setSearchTerm

  return (
    <section className='search'>
      <input type='text' placeholder="Search here...." className="search--input" onChange={(e) => {search(e.target.value)}} />
    </section>
  )
}
