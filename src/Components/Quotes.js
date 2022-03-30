import {useEffect, useState} from 'react'
import QuotesData from '../assets/quotesData.json'


export default function Quote() {
   
  const [activeQuote, setActiveQuote] = useState(0);

 
 useEffect(() => {
    let number = Math.floor(Math.random()*10)
    setActiveQuote(number);
 }, []);

    
    return (
        <>
        <p className='styleQuote'>{QuotesData[activeQuote].quote}</p>
      </>
    )
}