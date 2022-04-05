import React, { useEffect } from 'react';
//När man importerar memoryArray behövs måsvingar runt för att den inte exporteras med default.
import { memoryArray } from '../assets/memory.js';
import Card from '../Components/memory/Card.jsx';
import "../styles/Memory.css";
import Quotes from '../Components/Quotes';
import "../Components/HomeNav";
import HomeNav from '../Components/HomeNav';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

/* Vi vill att vår memory-komponent ska framställas på nytt. Därför behöver vi en state-variabel 
inuti vår komponent för att kunna observera ändringar i vår memory-state variabel.*/
export default function Memory()
{
    /* Vi behöver en statevariabel för vårt valda kort. En statevariabel måste ha en passande datatyp. 
    I vårt fall är det ett objekt som initialt innehåller en tom array. */
    const [memory, updateMemory] = React.useState([]);
    
    /* Vi behöver också en state-variabel för det kortet som blev valt tidigare för att kunna observera ändringar -
    i vår state-variabel. Vi väljer att ge den startvärdet null för att den inte ska vara någonting.*/
    const [previouslySelectedCard, setPreviouslySelectedCard] = React.useState(null);

    // Här skapar vi en state-variabel som ska uppdatera våra poäng.
    const [count, updateCount] = React.useState(0);
    // Här skapar vi en state-variabel som ska uppdatera våra gissningar.
    const [guesses, updateGuesses] = React.useState(0);

    /*Vi skapar en funktion för när man klickar på ett kort.
    Vår arrow-function tar emot ett argumet i sin id-parameterbehållare*/
    const cardClicked = (id) =>
    {
        /*Vi skapar en konstant som ska hålla den index position som det första värdet som klarar testet har.
        Arrowfunktionen tar emot ett argument i card-parameterbehållaren. FindIndex-metoden går igenom vår memory -
        array ungefär som en for loop gör. Arrowfunktionen anropas för varje kort.
        Den jämför kortens id:n med argumentet från funktionen cardClicked*/
        const cardIndex = memory.findIndex((card) => card.id === id);
        //Här skapar vi en ny memory-array och ger den det kopierade värdet från vår memory-state-variabel.
        const newMemory = [...memory];
        //Det kortet som vi har klickat på ska ändra turned-värdet till true;
        newMemory[cardIndex].turned = true;
        //Vi deklarerar en konstant selectedCard som motsvarar det kort-objekt som vi klickat på. 
        const selectedCard = newMemory[cardIndex];

        //Det måste finnas ett tidigare valt kort för att vi ska kunna jämföra och se om man har fått ett par.
        if(previouslySelectedCard)
        {
            //Så länge man har ett föregående kort så ska state-variabeln guesses öka med 1.
            updateGuesses(prevGuess => prevGuess + 1);

            //Om kortets bildsökväg är likadant som den tidigare bilden så ska vi låta korten vara vända.
            if (selectedCard.image === previouslySelectedCard.image)
            {
                //Varje gång man hittar ett par så ska vår state-variabel updateCount öka med 1.
                updateCount(prevCount => prevCount + 1);
            }
            else 
            {
                console.log("matchar inte")
                //Om vi inte hittade något par ska vi vänta 2 sekunder och vända tillbaka båda korten.
                setTimeout(() =>
                {
                    /* Vi skapar en konstant som ska hålla den index position som det första värdet som klarar testet har.
                    Arrowfunktionen tar emot ett argument i card-parameterbehållaren. FindIndex-metoden går igenom vår memory -
                    array ungefär som en for loop gör. Arrowfunktionen anropas för varje kort.
                    Den jämför kortens id:n med det tidigare kortets id.*/
                    const previousCardIndex = newMemory.findIndex(card => card.id === previouslySelectedCard.id);
                    //Korten på de här platserna ska ha sin turned-property false.
                    newMemory[cardIndex].turned = false;
                    newMemory[previousCardIndex].turned = false;
                    console.log(newMemory)
                    //Uppdaterar vår state-variabel.
                    updateMemory(newMemory);
                    //Detta är ett argument som berättar efter hur många millisekunder som vår array-funktion ska anropas.
                }, 2000);
            } 
            //Vi måste sätta tillbaka den på null för att den ska kunna hoppa mellan olika värden. 
            setPreviouslySelectedCard(null) 
        }
        else
        {
            //Om vi inte har något tidigare kort så ska vi sätta vår state-variabel till det kortet som vi är på.
            setPreviouslySelectedCard(selectedCard);
            //Här uppdaterar vi vår state-variabel med värdet från vår nya memory-array, för att uppdatera det vi ser på skärmen.
            updateMemory(newMemory);
        }
    }

    useEffect(() => 
    {
        //Hämta ut det som vi sparat i sessionen under namnet memoryArray
        const storedMemoryArray = sessionStorage.getItem("memoryArray");
        if(storedMemoryArray)
        {
            //Om vi har ett objekt sparat i sessionen, är det detta objekt vi vill ha i vår state-variabel memory.
            //Objektet i sessionen är en sträng så vi måste börja med att göra om den till ett javascript-objekt.
            //Därav JSON.parse
            updateMemory(JSON.parse(storedMemoryArray));
        } 
        else
        {
            /* Om vi inte har ett objekt sparat i sessionen, måste vi lägga in ett där. 
            Vi kan inte lägga vår memoryArray direkt då den inte är blandad.
            Vi börjar alltså med att blanda vår memoryArray och sen sparar vi ner den till vår session.
            Vi får bara spara strängar till vår session. Alltså måste vi göra om vår memoryArray som är ett
            javascript-objekt. Därav JSON.stringify */
            shuffleArray(memoryArray);
            updateMemory(memoryArray);
            sessionStorage.setItem("memoryArray", JSON.stringify(memoryArray));
        }
    },[]);
    
    /* I vår return mappar vi igenom varje kort i vår memory-state-variabel,
    (som innehåller all vår data från vår memoryArray) och skapar upp vårt kort med hjälp av vår - 
    Card-komponent. Vi skickar även med props som vi vill att vår Card-komponent ska kunna ta emot, 
    för att den ska kunna använda våra state-variablar och data ifrån vår memory-array.
    Istället för att behöva skicka med alla properties från våra objekt (id, image och turned), så skapar vi en -
    card property som innehåller allihopa.*/
    return(
        <main className="memoryPage">
             <header>
                 <HomeNav />
                <p>Pairs: {count} /20</p>
                <p>Guesses: {guesses}</p>
            </header>
            <section className="memoryContainer">
                {
                    //Här mappar vi igenom vårt memory med en memoryCard-loopvariabel. 
                    //För varje objekt som finns i memory-arrayen skapas en Card-komponent.
                    //Varje komponent måste ha en unik nyckel.
                    //På häger sida skickar vi med det vill kunna använda oss av i Card.
                    memory.map(memoryCard => <Card 
                        key={memoryCard.id} 
                        card={memoryCard}
                        cardClicked={cardClicked}
                    />)
                }
            </section>
            <footer>
                <Quotes />
            </footer>
        </main>
    )
}