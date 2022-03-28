import React, { useEffect, useState } from 'react'
import {WizardCard} from '../Components/Slytherin/WizardCard';
import {NavItem, Navbar} from "../Components/Slytherin/Navbar"
import Modal from '../Components/Slytherin/Modal';

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
 <div className='dropdown'>
    <button onClick={()=> setActive("FemaleCard")} >Female</button>
    <button onClick={()=> setActive("MaleCard")} >Male</button>
 </div>
  );
}

function DropdownMenuOccupation(){

  return (
 <div className='dropdown'>
    <button onClick={()=> setActive("StudentCard")} >Student</button>
    <button onClick={()=> setActive("StaffCard")} >Staff</button>
 </div>
  );
}
function DropdownMenuSpecies(){

  return (
 <div className='dropdown'>
    <button onClick={()=> setActive("HumanCard")} >Human</button>
    <button onClick={()=> setActive("OtherCard")} >Other</button>
 </div>
  );
}

function DropdownMenuAncestry(){

  return (
 <div className='dropdown'>
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
  <>
  <Navbar>
  <input type="text" placeholder='Search...' onChange={event =>{setSerchTerm(event.target.value)}} />
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
  </Navbar>

 
  


  <Modal className='modaal' open={isOpen} onClose={() => setIsOpen(false)}>

  {wizards.map((data, index) =>{ 
   if (index === clickedIndex) {
     return <div>
     <h2>Name:</h2> <WizardCard 
        data={wizards[clickedIndex].name} 
      />
     <h3>Actor:</h3> <WizardCard 
        actor={wizards[clickedIndex].actor}
      />
        <img src={wizards[clickedIndex].image} alt='caracter'/>
        </div>
    }
 })}

  </Modal>

  {active === "FirstCard" && 
  <card className='alWizardDisp'>
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
  <card className='femaleDisp'>
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
  <card className='maleDisp'>
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
  <card className='StaffDisp'>
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
  <card className='StudentDisp'>
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
  <card className='StudentDisp'>
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
  <card className='StudentDisp'>
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
  <card className='StudentDisp'>
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
  <card className='StudentDisp'>
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
  <card className='StudentDisp'>
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
  </>
);
    }

  


export default App;
