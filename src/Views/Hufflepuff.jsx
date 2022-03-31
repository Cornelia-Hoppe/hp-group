import "../styles/Hufflepuff.css"
import React from 'react';
import Main from '../Components/Hufflepuff/Main';
import { ApiProvider } from '../Components/Hufflepuff/ApiProvider';
function Hufflepuff() {
  return (
<ApiProvider>
    <div className="Hufflepuff">
      <Main />
    </div>   
    </ApiProvider>
  );
}

export default Hufflepuff;
