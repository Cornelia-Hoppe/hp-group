import React from 'react';
import './Card.css';

//Ta emot props från förälder komponenten Memory.
//När funktionen clicked anropas ska det skapas en helt ny array som är kopierad med samma värde från vår memory-array.
//I vår for-loop (läses till höger om tilldelningsoperatorn). För varje loopvarv, så vill jag hämta ut det kortet(objektet) som finns på den positionen.
//När vi hittar som vi har tryckt på så uppdaterar vi det kortet i vår nya memory-array med det motsatta värdet i vår turned property.
//Sist uppdaterar vi vår state-variabel för att rendera ut vårt nya värde. 
export default function Card(props)
{
    const clicked = () => 
    {
        const newMemory = [...props.memory]

        for(let i = 0; i < props.memory.length; i++)
        {
            const memoryCard = props.memory[i];
            if(memoryCard.id === props.id)
            {
                newMemory[i].turned = !props.turned;
            }
        }

        props.updateMemory(newMemory)
    };

    /*
    if(props.turned)
    {
        <img src={props.image}>
    }
    else
    {
        <img src="./cardBackside.jpg">
    }
    */
    return(
        <section className="card">
            <div onClick={clicked}>
                {
                    props.turned ? <img src={props.image} /> : <img src="./cardBackside.jpg" />
                }
            </div>
        </section>
    )
}