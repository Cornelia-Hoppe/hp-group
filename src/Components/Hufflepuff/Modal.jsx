import React from "react";
import { useState } from "react";
import { HufflepuffLogo } from "../../images/images";
export default function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const ModalContent = () => {
    return (
      <>
        <div className="modal-hp" onClick={() => setIsOpen(false)}>
          <div className="modal-content-hp">
            {props.name}
            <div className="modal-image-hp">
              {props.image ? (
                <img src={props.image} alt="no image"></img>
              ) : (
                <img src={HufflepuffLogo}></img>
              )}
            </div>
            {props.hogwartsStudent === true && <div>Student</div>}
            {props.hogwartsStaff === true && <div>Staff</div>}
            <ul className="modal-text-hp">
              <li>
                {props.gender ? <p> Gender: {props.gender}</p> : "Gender: N/A"}
              </li>
              <li>
                {props.ancestry ? (
                  <p> Ancestry: {props.ancestry}</p>
                ) : (
                  "Ancestry: N/A"
                )}
              </li>
              <li>
                {props.patronus ? (
                  <p> Patronus: {props.patronus}</p>
                ) : (
                  "Patronus: N/A"
                )}
              </li>
              <li>
                {props.actor ? <p> Actor: {props.actor}</p> : "Actor: N/A"}
              </li>
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
