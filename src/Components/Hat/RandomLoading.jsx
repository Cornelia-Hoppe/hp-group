import React from "react";

const Loading = () => {

    let array = ["hmmm... ", "ur a tricky one....but you should fit in...", "i know exacly where u should be..."]

    const item = array[Math.floor(Math.random() * array.length)]
  return <div className="house-container"><h1>{item}</h1></div>
};

export default Loading;
