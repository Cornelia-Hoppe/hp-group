import React from 'react'



export function WizardCard(props,index) {


    return (
    <div> 
      {props.patronus}
      {props.ancestry}
      {props.data}
      {props.name}
      {props.image}
      {props.dateOfBirth}
      {props.actor}
      {props.gender}
    </div>
  )
}



