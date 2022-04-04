import React, { useContext } from "react";
import { GlobalContext } from "../../Views/Gryffindor";
import {GryffindorLogo} from '../../images/images'

export default function Modal() {

    const ctx = useContext(GlobalContext)
    const listData = ctx.listData
    let indexModal = ctx.indexModal
    let closeModal = ctx.setOpenModal

    return(
        <section className="modalBackground" onClick={()=> closeModal(false)}>
            <div className="modal-card">
                <h2>{listData[indexModal].name}</h2>
                {listData[indexModal].image 
                    ? (<img src={listData[indexModal].image} alt={listData[indexModal].name} className='modal--image'/>) 
                    : (<img src={GryffindorLogo} alt={listData[indexModal].name} className='modal--image'/>)
                }
                <div className="modal--info">
                    {listData[indexModal].hogwartsStudent 
                        ? (<p>Student</p>) 
                        : listData[indexModal].hogwartsStaff 
                        ? (<p>Staff</p>) : (<p></p>)
                    }
                    <h2>Gender: {listData[indexModal].gender ? listData[indexModal].gender : 'N/A'}</h2>
                    <h2>Ancestry: {listData[indexModal].ancestry ? listData[indexModal].ancestry : 'N/A'}</h2>
                    <h2>Patronus: {listData[indexModal].patronus ? listData[indexModal].patronus : 'N/A'}</h2>
                    <h2>Actor: {listData[indexModal].actor ? listData[indexModal].actor : 'N/A'}</h2>
                </div>                
            </div>
        </section>
    )
}