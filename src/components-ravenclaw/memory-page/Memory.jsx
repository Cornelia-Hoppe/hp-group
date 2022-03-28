import React from 'react';
//När man importerar memoryCards behövs måsvingar runt för att den inte exporteras med default.
import { memoryCards } from '../../assets/memory.js';
import Card from './Card.jsx';
import "./Memory.css"

//We want our Memory-component to re-render. 
//Therefore we need a state-variable inside our component to observe any changes in our memory-state-variable.
export default function Memory()
{
    const [memory, updateMemory] = React.useState(memoryCards);

    return(
        <main className="memoryContainer">
            {
                memory.map(memoryCard => <Card key={memoryCard.id} id={memoryCard.id} image={memoryCard.image} turned={memoryCard.turned} memory={memory} updateMemory={updateMemory}/>)
            }
        </main>
    )
}