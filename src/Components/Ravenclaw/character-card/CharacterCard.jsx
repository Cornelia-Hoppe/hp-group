import React, { useState } from "react";
import { RavenclawLogo } from "../../../images/images";
import "./CharacterCard"

export default function CharacterCard(props)
{
    //Ska man använda sig av saker i props flera gånger om, är det bra att
    //destructa ut grejerna
    const { name, image, hogwartsStaff, hogwartsStudent, gender, ancestry, species, patronous, actor } = props;

    //State-variabel för att avgöra om vi ska rendera en modal eller bara kortet
    const [isModalOpen, setModalOpen] = useState(false);

    const ModalContent = () => {
        return (
          <>
            <div className="modal">
              <div className="modal-content">
                <button onClick={() => setModalOpen(false)}> x </button>
                <div className="character-name">
                  {name}
                </div>

                <div className="modal-image">
                  {
                    image ? <img src={image} alt="no image"></img> : <img src={RavenclawLogo} />
                  }
                </div>
                {hogwartsStudent === true && <div>Student</div>}
                {hogwartsStaff === true && <div>Staff</div>}
                <ul className="modal-text">
                  <li><p> Gender: {gender ? gender : "N/A"}</p></li>
                  <li><p> Ancestry: {ancestry ? ancestry : "N/A"}</p></li>
                  <li><p> Species: {species ? species : "N/A"}</p></li>
                  <li><p> Patronous: {patronous ? patronous : "N/A"}</p></li>
                  <li><p> Actor: {actor ? actor : "N/A"}</p></li>
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