import React from 'react'



export function WizardCard(props,index) {


    return (
    <div> 
    
     {props.data}
     <p>{props.name} </p>
      {props.image}
      {props.dateOfBirth}
      {props.actor}
    </div>
  )
}



