import React from "react";
import { useState } from "react";

export default function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const ModalContent = () => {
    return (
      <>
        <div className="modal">
          <div className="modal-content">
            <p className="modalbtn-hufflepuff" onClick={() => setIsOpen(false)}> x </p>
            {props.name}
            <div className="modal-image">
              <img src={props.image} alt="no image"></img>
            </div>
            {props.hogwartsStudent === true && <div>Student</div>}
            {props.hogwartsStaff === true && <div>Staff</div>}
            <ul className="modal-text">
              <li>{props.gender && <p> Gender: {props.gender}</p>}</li>
              <li>{props.ancestry && <p> Ancestry: {props.ancestry}</p>}</li>
              <li>{props.patronus && ( <p> Patronus: {props.patronus}</p>  )} </li>
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
