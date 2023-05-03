import React, { useContext } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { ApiContext } from '../API/Api'
import '../Styles/Nav.css'


export const SearchBox = () => {

  const {list , onSearch , onChange } = useContext(ApiContext)
   
  const searchBoxStyle = () => {
    return{
      backgroundColor : 'white',
      width : '100%',
      display :'flex',
      alignItems : 'center',
      borderRadius : '5px'
    }
  }
  
  return (
    <div className='api-container'>
    <div style={searchBoxStyle()}>
    <input type="textBox" placeholder='Search IMDb' className='api-searchBox' onChange={onChange}/>
    <button style={{backgroundColor: 'white' , border : 'none' , width : '20px' , height : '100%' , 
    cursor : 'pointer' , fontSize : '10px'}} onClick={onSearch}> <AiOutlineSearch/> </button>
    </div>
    
    
    
      </div>
  )
}

