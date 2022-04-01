import {useEffect, useState} from 'react'
import QuotesData from '../assets/quotesData.json'
import {DeathlyHallows} from '../images/images'


export default function Quote() {
   
  const [activeQuote, setActiveQuote] = useState(0);

 
 useEffect(() => {
    let number = Math.floor(Math.random()*10)
    setActiveQuote(number);
 }, []);

    
    return (
        <div className='quote-footer'>
        <img src={DeathlyHallows} alt="Deathly Hallows"/>
        <p className='styleQuote' key={QuotesData.id}>{QuotesData[activeQuote].quote}</p>
      </div>
    )
}