import React from "react";
import classes from "./NavBar.module.css";
import NavLinks from "./NavLinks";
import { HouseLogo } from "../../images/images";

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <img src={HouseLogo} width="100vw"></img>
      <NavLinks />
    </nav>
  );
};
export default Navigation;
