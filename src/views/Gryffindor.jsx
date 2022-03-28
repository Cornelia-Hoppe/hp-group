import React, {useState, useEffect, createContext} from 'react'
import Menu from '../Components/Gryffindor/Menu'
import CharacterList from '../Components/Gryffindor/CharacterList'
import Logo from '../Components/Gryffindor/Logo'
import Modal from '../Components/Gryffindor/Modal'
import Search from '../Components/Gryffindor/Search'
import Navbar from '../Components/Gryffindor/Navbar'
import "../styles/Gryffindor.css"

export const GlobalContext = createContext()

export default function Gryffindor() {

    const apiUrl = 'http://hp-api.herokuapp.com/api/characters/house/gryffindor'
   
    const [allData, setAllData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [indexModal, setIndexModal] = useState(0)
    const [chosenMenu, setChosenMenu] = useState('All')
    const [listData,setListData] = useState([])
  
    useEffect(() => {
      const getData = async () => {
        try {
          const res = await fetch(apiUrl);
          const data = await res.json();
          setAllData(data)
          getListData(data)          
        } catch (error) {
          console.log(error);
        }
      }
      getData()
    }, [chosenMenu]);// eslint-disable-line react-hooks/exhaustive-deps
      
    const getListData = (data) => {
      switch (chosenMenu) {
        case 'Male':
        case 'Female':
          const gender = allData.filter(x => x.gender === chosenMenu.toLowerCase())
          setListData(gender);
          break;
        case 'Half-blood':
        case 'Muggleborn':
        case 'Pure-blood':
          const ancestry = allData.filter(x => x.ancestry === chosenMenu.toLowerCase())
          setListData(ancestry);
          break;
        case 'Human':
        case 'Ghost':
        case 'Half-giant':
        case 'Werewolf':
          const species = allData.filter(x => x.species === chosenMenu.toLowerCase())
          setListData(species);
          break;
        case 'Student':
          const student = allData.filter(x => x.hogwartsStudent === true)
          setListData(student);
          break;
        case 'Staff':
          const staff = allData.filter(x => x.hogwartsStaff === true)
          setListData(staff);
          break;    
        default:
          setListData(data);
          break;
      }
    }
  
  return (
    <GlobalContext.Provider value={{listData, searchTerm, setSearchTerm, openModal, setOpenModal, indexModal, setIndexModal, chosenMenu, setChosenMenu}}>
      <div className='gryffindor-body'>
        <header className='gryffindor-header'>
          <Navbar />
          <Logo />
        </header>
        <main>
        <div>
          <Menu />
          <Search />
        </div>
        <CharacterList />
        {openModal && <Modal />}
        </main>
      </div>  
    </GlobalContext.Provider>
  )
}
