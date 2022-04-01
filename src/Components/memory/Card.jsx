import React from 'react';
import './Card.css';
import {CardBackside} from "../../images/images"


//Vi skapar en Card-komponent och tar emot propsen från förälder-komponenten Memory.
export default function Card(props)
{
    //Här destruktar vi alla våra props och sparar ner det för att slippa skriva props i början av användandet.
    const {card, cardClicked} = props;

    return(
        <section className="card">
            {
                /*För att kunna skicka med vårt id till koret som ett argument till vår onClick-funktion 
                behöver vi göra det via en arrow-function. */
            }
            <div onClick={ () => cardClicked(card.id)}>
                {
                    /* Här använder vi en ternary-operator som ska rendera ut fram eller baksida beroende på om -
                    turned är sant eller falskt. */ 
                    card.turned ? <img src={card.image} /> : <img src={CardBackside} />
                }
            </div>
        </section>
    )
}