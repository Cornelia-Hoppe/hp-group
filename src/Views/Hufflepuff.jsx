import "../styles/Hufflepuff.css";
import React from "react";
import { HufflepuffLogo } from "../images/images";
import Nav from "../Components/Navbar/Nav";
import Main from "../Components/Hufflepuff/Main";
import { ApiProvider } from "../Components/Hufflepuff/ApiProvider";
import Quotes from "../Components/Quotes";
function Hufflepuff() {
  return (
    <ApiProvider>
      <div className="Hufflepuff">
        <div className="nav-hufflepuff">
        <Nav />
        <div className="hufflepuff-logo"></div>
          <img src={HufflepuffLogo} width="100px"></img>
          <h3>Hufflepuff house</h3>
        </div>
        <Main />
        <Quotes />
      </div>
    </ApiProvider>
  );
}

export default Hufflepuff;
