import React from "react";
import { useState, useContext, useEffect } from "react";
import Modal from "./Modal";
import SearchBar from "./SearchBar";
import { ApiContext } from "./ApiProvider";
import Filter from "./Filter"
export default function Main() {
  const [[characters, setCharacters], [filteredList, setFilteredList]] = useContext(ApiContext)
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBlood, setselectedBlood] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedGender, setselectedGender] = useState("");
  // filter by gender 
  const filterByGender = (filteredData) => {
   if (!selectedGender) {
     return filteredData;
   }
   const filteredGender = filteredData.filter(
     (gender) => gender.gender.split(" ").indexOf(selectedGender) !== -1
   );
   return filteredGender;

 };
 const handleGender = (event) => {
  setselectedGender(event.target.value);


}
 useEffect(() => {
   var filteredData = filterByGender(characters);
   setFilteredList(filteredData);
 }, [selectedGender]);
 


 //filter by blood 
 const filterByBlood = (filteredData) => {
 if (!selectedBlood) {
   return filteredData;
 }
 
 const filteredBlood = filteredData.filter(
   (blood) => blood.ancestry.split(" ").indexOf(selectedBlood) !== -1
 );
 return filteredBlood;
 };
 
 useEffect(() => {
   var filteredData = filterByBlood(characters);
  
   setFilteredList(filteredData);
 }, [selectedBlood]);
 
 const handleBlood = (event) => {
   setselectedBlood(event.target.value);
 
 };
 // filter by Species 
 const filterBySpecies = (filteredData) => {
   if (!selectedSpecies) {
     return filteredData;
   }
   const filteredSpecies  = filteredData.filter(
     (species) => species.species.split(" ").indexOf(selectedSpecies ) !== -1
  
   ); 
   return filteredSpecies;
 };
 
 const handleSpecies = (event) => {
   setSelectedSpecies (event.target.value);
 };
 useEffect(() => {
   var filteredData = filterBySpecies(characters);
  
   setFilteredList(filteredData);
 }, [selectedSpecies]);

////




// const filterByOccupation = (filteredData) => {
//   if (!selectedOccupation) {
//     return filteredData;
//   }
//   const filteredOccupation = filteredData.filter(
//    (item) => item.hogwartsStaff).map((item) => item.name
//    === selectedOccupation)
// return filteredOccupation;
// };
// const handleChangeFour = (event) => {
//  setSelectedOccupation (event.target.value);
// console.log(event.target.value)
//  };

// useEffect(() => {
//   var filteredData = filterByOccupation(characters);
 
//   setFilteredList(filteredData);
// }, [selectedOccupation]);

  return (
    <div className="App">
      <SearchBar  Search={setSearchTerm}  />

    <div className="filter-container">
      <Filter onChange= {handleGender} title ={"Gender"} opt1 = {"female"} opt2 = {"male"}/>
      <Filter  onChange= {handleBlood} title ={"Ancestry"} opt1 = {"half-blood"} opt2 = {"pure-blood"} opt3 ={"muggleborn"}/>
     <Filter  onChange={handleSpecies} title ={"Species"} opt1= {"ghost"} opt2={"human"}/>
       <Filter  title ={"Occupation"}  opt1= {"staff"} opt2={"student"} />
       </div>
   
       <div>
        {filteredList
          .filter((characters) => {
            if (searchTerm == "") {
              return characters;
            } else if (
              characters.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return characters;
            }
          })
          .map((characters, key) => {
            return (
              <Modal
                key={key}
                name={characters.name}
                ancestry={characters.ancestry}
                gender={characters.gender}
                yearOfBirth={characters.yearOfBirth}
                house={characters.house}
                patronus={characters.patronus}
                actor={characters.actor}
                image={characters.image}
                hogwartsStudent={characters.hogwartsStudent}
                hogwartsStaff={characters.hogwartsStaff}
              />
            );
          })}
      </div>
    </div>
  );
}
