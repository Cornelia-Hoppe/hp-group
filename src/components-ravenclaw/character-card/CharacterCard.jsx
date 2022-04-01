import React, { useState } from "react";
import "./CharacterCard.css";

export default function CharacterCard(props)
{
    //Ska man använda sig av saker i props flera gånger om, är det bra att
    //destructa ut grejerna
    const { name, image, hogwartsStaff, hogwartsStudent, gender, ancestry, species } = props;

    //State-variabel för att avgöra om vi ska rendera en modal eller bara kortet
    const [isModalOpen, setModalOpen] = useState(false);

    const ModalContent = () => {
        return (
          <>
            <div className="modal">
              <div className="modal-content">
                <button onClick={() => setModalOpen(false)}> x </button>
                {name}
                <div className="modal-image">
                  <img src={image} alt="no image"></img>
                </div>
                {hogwartsStudent === true && <div>Student</div>}
                {hogwartsStaff === true && <div>Staff</div>}
                <ul className="modal-text">
                  <li>{gender && <p> Gender: {gender}</p>}</li>
                  <li>{ancestry && <p> Ancestry: {ancestry}</p>}</li>
                  <li>{species && ( <p> Species: {species}</p>  )} </li>
                </ul>
              </div>
            </div>
          </>
        );
      };

    return(
        <>
            <div className="character-card" onClick={() => setModalOpen(true)}>
                <p>{props.name}</p>
            </div>
            {
                isModalOpen && <ModalContent setModalOpen={setModalOpen} />
            }
        </>
    )
}