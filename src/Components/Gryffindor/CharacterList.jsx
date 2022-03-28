import React, { useContext } from 'react'
import { GlobalContext } from '../../views/Gryffindor'

export default function CharacterList() {

  const ctx = useContext(GlobalContext)
  const listData = ctx.listData
  const search = ctx.searchTerm
  const openModal = ctx.setOpenModal
  const indexModal = ctx.setIndexModal

  const handleClick = (index) => {
    openModal(true)
    indexModal(index)
  }

  return (
    <section className='characters'>
        {listData.map((data,index)=>(
          listData[index].name.toLowerCase().includes(search.toLowerCase())
            &&
            
          <h3 key={index} onClick={()=>handleClick(index)}>{data.name}</h3>
         
        ))}
      
    </section>
  )
}
