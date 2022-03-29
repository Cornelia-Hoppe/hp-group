import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Views/Gryffindor";

export default function MenuItems({item}) {

const [dropDown, setDropDown] = useState(false)

const ctx = useContext(GlobalContext)
const setChosenMenu = ctx.setChosenMenu

const clickedMenu = (menuTitle) => {
    setChosenMenu(menuTitle)
}

    return(
        <div className="menu-item">
            {item.submenu ? (
                <>
                    <button type="button" onClick={() => setDropDown((prev) => !prev)} className='menu-button menu-button--title'>
                        {item.title}<i className={`fa-solid fa-angle-down ${dropDown ? "fa-rotate-180" : ""}`}></i>
                    </button>
                    <div className={`dropdown ${dropDown ? "show" : ""}`}>
                        {item.submenu.map((submenu, index) => (
                        <button onClick={()=> clickedMenu(submenu.title)} key={index} className='menu-button menu-button--subtitle'>{submenu.title}</button>
                        ))}
                    </div>
                </>
            ) : (
                <button onClick={()=> clickedMenu(item.title)} className='menu-button menu-button--title'>{item.title}</button>                )}
        </div>
    )
}

