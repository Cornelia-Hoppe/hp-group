import React, {useState} from 'react'  



export function Navbar(props){
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'> {props.children} </ul>
    </nav>
  )
}



export function NavItem(props){

  const [open, setOpen] = useState(false);

  return (
    <li className='nav-item'>
      <button className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </button>
      {open && props.children}
    </li>
  );
}
