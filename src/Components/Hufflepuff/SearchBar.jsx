import React from "react";

export default function SearchBar(props) {
  return (
    <input
    id="search-hufflepuff"
      type="text"
      autofocus required
      placeholder="Search character..."
      value={props.searchTerm}
      onChange={(e) => {
        props.Search(e.target.value);
      }}
    />
  );
}

