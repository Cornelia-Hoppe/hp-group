import React, { useState, createContext, useEffect} from 'react'

export const ApiContext = createContext();

export const ApiProvider = (props) =>{
    const [characters, setCharacters] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        const getData = async () => {
          try {
            const res = await fetch(
              `https://hp-api.herokuapp.com/api/characters/house/hufflepuff`
            );
            let data = await res.json();
            setCharacters(data);
            setFilteredList(data);
          } catch (err) {
            console.log("det blev fel");
          }
        };
        getData();
      }, []);
    
return(
<ApiContext.Provider value={[  [filteredList, setFilteredList],  [characters, setCharacters] ]}>
    {props.children}
</ApiContext.Provider>
);
    
}
