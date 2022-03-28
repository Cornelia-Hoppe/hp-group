import React from 'react'

export default function Filter(props) {
  
  return (
    <div className="select"> 
      <select
   id="standard-select"
    onChange={props.onChange}
  >
    <option value="" disabled selected>{props.title}</option>
    <option value={props.opt1}>{props.opt1}</option>
    <option value={props.opt2}>{props.opt2}</option>
    {props.opt3 && <option value={props.opt3}>{props.opt3} </option>}
  </select>
  </div>
  
  )
}
