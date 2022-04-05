import React from "react";
import classes from "./NavBar.module.css";
import NavLink from "./NavLinks";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <div className={classes.Hamburger}>
      <i className="fa-solid fa-bars fa-1x" onClick={() => setOpen(!open)}></i>
    </div>
  );
  const closeIcon = (
    <div className={classes.Hamburger} onClick={() => setOpen(!open)}>
      x
    </div>
  );

  return (
    <nav className={classes.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}

      {open && <NavLink />}
    </nav>
  );
};
export default MobileNavigation;
