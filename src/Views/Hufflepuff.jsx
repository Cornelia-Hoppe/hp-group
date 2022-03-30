import "../styles/Hufflepuff.css"
import React from 'react';
import Main from '../Components/Hufflepuff/Main';
import { ApiProvider } from '../Components/Hufflepuff/ApiProvider';
import Nav from '../Components/Nav'
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
