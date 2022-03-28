import React from "react";
import { useState } from "react";

export default function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const ModalContent = () => {
    return (
      <>
        <div className="modal">
          <div className="modal-content">
            <button onClick={() => setIsOpen(false)}> x </button>
            {props.name}
            <div className="modal-image">
              <img src={props.image} alt="no image"></img>
            </div>
            {props.hogwartsStudent === true && <div>Student</div>}
            {props.hogwartsStaff === true && <div>Staff</div>}
            <ul className="modal-text">
              <li>{props.house && <p> house: {props.house}</p>}</li>
              <li>{props.patronus && <p> Patronus: {props.patronus}</p>}</li>
              <li>{props.yearOfBirth && ( <p> Year of birth: {props.yearOfBirth}</p>  )} </li>
              <li>{props.actor && <p> Actor: {props.actor}</p>}</li>
            </ul>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <p onClick={() => setIsOpen(true)}>{props.name}</p>
      {isOpen && <ModalContent setIsOpen={setIsOpen} />}
    </>
  );
}
