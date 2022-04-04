import React from 'react';
import {Hat} from "../images/images";
import Random from '../Components/Hat/RandomReturn';
import HomeNav from "../assets/HomeNav";
import Quote from "../Components/Quotes";
import "../styles/Sortinghat.css"

function Sortinghat() {
  

  return (
    <div className="sortinghat-container">
      <HomeNav />

      <h1>The sortinghat</h1>
<img className='sortinghat-img' src={Hat}></img>
<Random />

<Quote />
    </div>
  );
}

export default Sortinghat;