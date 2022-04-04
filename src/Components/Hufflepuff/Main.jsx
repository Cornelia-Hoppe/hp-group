import React from "react";
import { useState, useContext, useEffect } from "react";
import Modal from "./Modal";
import SearchBar from "./SearchBar";
import { ApiContext } from "./ApiProvider";
import FilterMenu from "./FilterMenu"
export default function Main() {
  const [[characters, setCharacters], [filteredList, setFilteredList]] =
    useContext(ApiContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  function filter(filteredData) {
    if (!selectedFilter) {
      return filteredData;
    }
    console.log(selectedFilter);
    switch (selectedFilter) {
      case "female":
      case "male":
        const gender = filteredData.filter(
          (item) => item.gender.split(" ").indexOf(selectedFilter) !== -1
        );
        return gender;

      case "ghost":
      case "human":
        const species = filteredData.filter(
          (item) => item.species.split(" ").indexOf(selectedFilter) !== -1
        );
        return species;

      case "half-blood":
      case "pure-blood":
      case "muggleborn":
        const blood = filteredData.filter(
          (item) => item.ancestry.split(" ").indexOf(selectedFilter) !== -1
        );
        return blood;

      case "student":
        const student = filteredData.filter(
          (item) => item.hogwartsStudent === true
        );
        return student;

      case "staff":
        const staff = filteredData.filter(
          (item) => item.hogwartsStaff === true
        );
        return staff;
    }
  }

  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
  };
  useEffect(() => {
    var filteredData = filter(characters);
    setFilteredList(filteredData);
  }, [selectedFilter]);

  function handleBtns() {
    setFilteredList(characters);
  }

  return (
    <div className="main-hufflepuff">
      <div className="searchcontainer-hufflepuff">
       <p className="allbtn" 
       onClick={handleBtns}>ALL</p>  
        <SearchBar Search={setSearchTerm} />
        </div>
      <div className="filter-container">
       
        <FilterMenu onClick={handleChange} />
      </div>

   

      <div className="character-list">
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
