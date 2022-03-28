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
                        <button type="button" onClick={() => setDropDown((prev) => !prev)}>
                            {item.title}<i className="fa-solid fa-angle-down"></i>
                        </button>
                        <div className={`dropdown ${dropDown ? "show" : ""}`}>
                            {item.submenu.map((submenu, index) => (
                            <button onClick={()=> clickedMenu(submenu.title)}key={index}>{submenu.title}</button>
                            ))}
                        </div>
                    </>
                    ) : (
                        <button onClick={()=> clickedMenu(item.title)}>{item.title}</button>
                )}
            </div>
       )
}

