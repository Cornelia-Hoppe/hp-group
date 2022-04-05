import React, { useState, useEffect } from "react";
import House from "./RandomHouse";
import Loading from "./RandomLoading";

export default function Random() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const Sort = () => {
    setLoading(!loading);
    setShow(!show);
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);

  if (loading) return <Loading />;

  return (
    <div className="house-container">
      {!show && <h1>Which house will the sorting hat choose for you?</h1>}
      {!show && (
        <button className="sortingbutton" onClick={Sort}>
          Begin
        </button>
      )}
      {show && <House />}
    </div>
  );
}
