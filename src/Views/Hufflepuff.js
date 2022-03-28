import "./Hufflepuff.css" 
import React from 'react';
import Main from '../Components/Hufflepuff/Main';
import Nav from '../Components/Hufflepuff/Nav';
import { ApiProvider } from '../Components/Hufflepuff/ApiProvider';
function Hufflepuff() {
  return (
<ApiProvider>
    <div className="Hufflepuff">
      <Nav />
      <Main />
    </div>   
    </ApiProvider>
  );
}

export default Hufflepuff;
