
import React from 'react'
import { NavLink } from 'react-router-dom'
const Navlink = () => {
  return ( 
      <ul>
   <li> <NavLink to='/'>Home</NavLink></li>
  <li>  <NavLink to='/gryffindor'>Gryffindor</NavLink></li>
  <li>  <NavLink to='/slytherin'>Slytherin</NavLink></li>
  <li>  <NavLink to='/hufflepuff'>Hufflepuff</NavLink></li>
  <li>  <NavLink to='/ravenclaw'>Ravenclaw</NavLink></li>
   </ul> 
   
  )
  
}
 export default Navlink;

 