import React from "react";

export default function SearchBar(props) {
  return (
    <input
      type="text"
      placeholder="Search character"
      value={props.searchTerm}
      onChange={(e) => {
        props.Search(e.target.value);
      }}
    />
  );
}
