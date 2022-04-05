import React from "react";

const House = () => {
  let array = ["Gryffindor!!!", "Hufflepuff!!!", "Slytherin!!!"];
  const item = array[Math.floor(Math.random() * array.length)];
  return (
    <div>
      <h1>{item}</h1>
    </div>
  );
};

export default House;
