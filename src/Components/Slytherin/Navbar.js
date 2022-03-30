import React, {useState} from 'react'  



export function NavbarSlytherin(props){
  return (
    <nav className='navbar-slytherin'>
      <ul className='navbar-nav-slytherin'> {props.children} </ul>
    </nav>
  )
}



export function NavItem(props){

  const [open, setOpen] = useState(false);

  return (
    <li className='nav-item'>
      <button className='icon-slytherin' onClick={() => setOpen(!open)}>
        {props.icon}
      </button>
      {open && props.children}
    </li>
  );
}
