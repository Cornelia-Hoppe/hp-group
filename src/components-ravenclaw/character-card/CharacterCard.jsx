import React from "react";
import "./CharacterCard.css";

export default function CharacterCard(props)
{
    return(
        <div className="character-card">
            <p>{props.name}</p>
        </div>
    )
}