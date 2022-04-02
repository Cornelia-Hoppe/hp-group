import React from 'react'
import classes from "./NavBar.module.css"
import NavLink from './NavLinks'
import { useState } from 'react';

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)
    const hamburgerIcon =  <i class="fa-solid fa-bars fa-2x"  
    onClick={() => setOpen(!open)}
    ></i>
    const closeIcon =  <div className={classes.Hamburger}
    onClick={() => setOpen(!open)}
    >x</div>
    
  return (
    <nav className={classes.MobileNavigation}>
      
     
      {open ? closeIcon : hamburgerIcon}

  { open && <NavLink />}
   </nav>
  )
}
 export default MobileNavigation