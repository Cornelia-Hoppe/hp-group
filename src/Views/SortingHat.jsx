import React from 'react';
import {Hat} from "../images/images"
import Random from '../Components/Hat/RandomReturn';
import HomeNav from "../assets/HomeNav"
function Sortinghat() {
  

  return (
    <div className="sortinghat-container">
      <HomeNav />
      <h1>The sortinghat</h1>
<img className='sortinghat-img' src={Hat}></img>
<Random />
    </div>
  );
}

export default Sortinghat;