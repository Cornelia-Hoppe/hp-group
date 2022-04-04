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
        <div className="gryffindor-menu-item">
            {item.submenu ? (
                <>
                    <button type="button" onClick={() => setDropDown((prev) => !prev)} className='gryffindor-menu-button gryffindor-menu-button--title'>
                        {item.title}<i className={`fa-solid fa-angle-down ${dropDown ? "fa-rotate-180" : ""}`}></i>
                    </button>
                    <div className={`gryffindor-dropdown ${dropDown ? "show" : ""}`}>
                        {item.submenu.map((submenu, index) => (
                        <button onClick={()=> clickedMenu(submenu.title)} key={index} className='gryffindor-menu-button gryffindor-menu-button--subtitle'>{submenu.title}</button>
                        ))}
                    </div>
                </>
            ) : (
                <button onClick={()=> clickedMenu(item.title)} className='gryffindor-menu-button gryffindor-menu-button--title'>{item.title}</button>                )}
        </div>
    )
}

