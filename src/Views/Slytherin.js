import React, { useEffect, useState } from 'react'
import {WizardCard} from '../Components/Slytherin/WizardCard';
import {NavItem, NavbarSlytherin} from "../Components/Slytherin/Navbar"
import Modal from '../Components/Slytherin/Modal';
import "../styles/Slytherin.css"
import "../style.css"
import Navbar from "../Components/Navbar/Nav"
import logoSlytherin from '../images/slytherin-logo.png'
import Quote from '../Components/Quotes';


function App() {

const [wizards, setWizards] = useState([]);

const apiUrl = 'http://hp-api.herokuapp.com/api/characters/house/slytherin';

useEffect(() => {
  const getData = async () => {
    try {
      const res = await fetch(apiUrl);
      let data = await res.json();
      console.log(data);
      setWizards(data);
    } catch (err) {
      console.log('det blev fel');
    }
  }
  getData()
}, []);

function DropdownMenuGender(){

  return (
 <div className='dropdown-slytherin'>
    <button onClick={()=> setActive("FemaleCard")} >Female</button>
    <button onClick={()=> setActive("MaleCard")} >Male</button>
 </div>
  );
}

function DropdownMenuOccupation(){

  return (
 <div className='dropdown-slytherin'>
    <button onClick={()=> setActive("StudentCard")} >Student</button>
    <button onClick={()=> setActive("StaffCard")} >Staff</button>
 </div>
  );
}
function DropdownMenuSpecies(){

  return (
 <div className='dropdown-slytherin'>
    <button onClick={()=> setActive("HumanCard")} >Human</button>
    <button onClick={()=> setActive("OtherCard")} >Other</button>
 </div>
  );
}

function DropdownMenuAncestry(){

  return (
 <div className='dropdown-slytherin'>
    <button onClick={()=> setActive("HalfBloodCard")} >Half-blood</button>
    <button onClick={()=> setActive("PureBloodCard")} >Pure-blood</button>
    <button onClick={()=> setActive("MuggleCard")} >Muggleborn</button>
 </div>
  );
}
  
const [active, setActive] = useState("FirstCard");

const [isOpen, setIsOpen] = useState (false);

const [clickedIndex, setClickedIndex] = useState(0);

const [searchTerm, setSerchTerm] = useState('');

return (
  <div className='slytherin-body'>
  <header className='slytherin-header'>
  <Navbar />
  <img src={logoSlytherin} alt="Slytherin" />
  <h1>Slytherin House</h1>
  <NavbarSlytherin>
  <NavItem icon= "Species" >
    < DropdownMenuSpecies />
      </NavItem>
    <NavItem icon= "Ancestry" >
    < DropdownMenuAncestry />
      </NavItem>
    <NavItem icon= "Occupation" >
    < DropdownMenuOccupation />
      </NavItem>
    <NavItem icon= "Gender">
     < DropdownMenuGender />
    </NavItem>
  </NavbarSlytherin>
  <input className='slytherin-input' type="text" placeholder='Search...' onChange={event =>{setSerchTerm(event.target.value)}} />
  </header>
 
  


  <Modal open={isOpen} onClose={() => setIsOpen(false)}>

  {wizards.map((data, index) =>{ 
   if (index === clickedIndex) {
     return <div className='modal-slytherin'>
       <img src={wizards[clickedIndex].image} alt='caracter'/>
       {wizards[clickedIndex].hogwartsStudent 
                        ? (<p>Student</p>) 
                        : wizards[clickedIndex].hogwartsStaff 
                        ? (<p>Staff</p>) : (<p></p>)
                    }
  <div className='modal-row'>  <p>Name:</p><WizardCard data={wizards[clickedIndex].name} /> </div>
  <div className='modal-row'>  <p>Gender:</p><WizardCard gender={wizards[clickedIndex].gender}/> </div>
  <div className='modal-row'>  <p>Actor:</p><WizardCard actor={wizards[clickedIndex].actor}/> </div>
  <div className='modal-row'>  <p>Patronus:</p><WizardCard patronus={wizards[clickedIndex].patronus}/> </div>
  <div className='modal-row'>  <p>Born:</p><WizardCard age={wizards[clickedIndex].dateOfBirth}/> </div>
  
        </div>
    }
 })}

  </Modal>
<div className='slytherin-cards'>
  {active === "FirstCard" && 
  <card className='alWizardDisp , SlytherinDisp'>
    {wizards.filter((data)=>{
    if (searchTerm == '' ) {
      return data
    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return data
    }
  }).map((data, index) => {
  return <button onClick={()=> {setIsOpen(true); setClickedIndex(index)}} > <WizardCard key={index} data={data.name}/> </button>
      
    
    })}
  
  </card> }
  {active === "FemaleCard" && 
  <card className='femaleDisp , SlytherinDisp'>
 {wizards.filter((data)=>{
    if (searchTerm === '' ) {
      return data
    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return data
    }
  }).map((data, index) => { 
   if (data.gender === "female") {
     return <button onClick={()=> {setIsOpen(true); setClickedIndex(index)}} > <WizardCard key={index} data={data.name}/> </button>
    }
 })}
  </card> }
  {active === "MaleCard" && 
  <card className='maleDisp  , SlytherinDisp'>
 {wizards.filter((data)=>{
    if (searchTerm == '' ) {
      return data
    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return data
    }
    }).map((data, index) => { 
   if (data.gender === "male") {
    return <button onClick={()=> {setIsOpen(true); setClickedIndex(index)}} > <WizardCard key={index} data={data.name}/> </button>
    }
 })}
  </card> }
  {active === "StaffCard" && 
  <card className='StaffDisp  , SlytherinDisp'>
 {wizards.filter((data)=>{
    if (searchTerm == '' ) {
      return data
    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return data
    }
    }).map((data, index) =>{ if (data.hogwartsStaff === true) {
     return <button onClick={()=> {setIsOpen(true); setClickedIndex(index)}} > <WizardCard key={index} data={data.name}/> </button>
    }
 })}
  </card> }
  {active === "StudentCard" && 
  <card className='StudentDisp  , SlytherinDisp'>
 {wizards.filter((data)=>{
    if (searchTerm == '' ) {
      return data
    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return data
    }
    }).map((data, index) => { if (data.hogwartsStudent === true) {
    return <button onClick={()=> {setIsOpen(true); setClickedIndex(index)}} > <WizardCard key={index} data={data.name}/> </button>
    }
 })}
  </card> }
  {active === "HalfBloodCard" && 
  <card className='StudentDisp  , SlytherinDisp'>
 {wizards.filter((data)=>{
    if (searchTerm == '' ) {
      return data
    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return data
    }
    }).map((data, index) => { 
   if (data.ancestry === "half-blood") {
    return <button onClick={()=> {setIsOpen(true); setClickedIndex(index)}} > <WizardCard key={index} data={data.name}/> </button>
    }
 })}
  </card> }
  {active === "PureBloodCard" && 
  <card className='StudentDisp  , SlytherinDisp'>
 {wizards.filter((data)=>{
    if (searchTerm === '' ) {
      return data
    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return data
    }
    }).map((data, index) => { 
   if (data.ancestry === "pure-blood") {
    return <button onClick={()=> {setIsOpen(true); setClickedIndex(index)}} > <WizardCard key={index} data={data.name}/> </button>
    }
 })}
  </card> }
  {active === "MuggleCard" && 
  <card className='StudentDisp  , SlytherinDisp'>
 {wizards.filter((data)=>{
    if (searchTerm === '' ) {
      return data
    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return data
    }
    }).map((data, index) => { 
   if (data.ancestry === "muggleborn") {
    return <button onClick={()=> {setIsOpen(true); setClickedIndex(index)}} > <WizardCard key={index} data={data.name}/> </button>
    }
 })}
  </card> }
  {active === "HumanCard" && 
  <card className='StudentDisp , SlytherinDisp'>
 {wizards.filter((data)=>{
    if (searchTerm === '' ) {
      return data
    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return data
    }
    }).map((data, index) => { 
   if (data.species === "human") {
    return <button onClick={()=> {setIsOpen(true); setClickedIndex(index)}} > <WizardCard key={index} data={data.name}/> </button>
    }
 })}
  </card> }
  {active === "OtherCard" && 
  <card className='StudentDisp , SlytherinDisp'>
 {wizards.filter((data)=>{
    if (searchTerm === '' ) {
      return data
    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return data
    }
    }).map((data, index) => { 
   if (data.species === "ghost") {
    return <button onClick={()=> {setIsOpen(true); setClickedIndex(index)}} > <WizardCard key={index} data={data.name}/> </button>
    }
 })}
  </card> }
  </div>
  <Quote/>
  
  </div>
  
);
    }

  


export default App;
