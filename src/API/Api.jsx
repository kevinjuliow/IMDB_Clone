import React, { createContext, useState } from 'react'
import axios from 'axios';
import '../Styles/Nav.css'
import { MovieDisplay } from './MovieDisplay';

export const ApiContext = createContext(null)


export const ApiProvider = (props) =>{

  const [search , setSearch] = useState('')
  const [list , setList ] = useState({})
  const [movies , setMovies] = useState(MovieDisplay)


  const onSearch = async () =>{
    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: {q: search},
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'c1d3d5401dmshada64a455451ddcp1e71fejsn5aa822de3477',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      const lists = response.data.d
      setList(lists)
      console.log(lists);
    } catch (error) {
      console.error(error);
    }
  }

  const onChange = (e) =>{
    setSearch(e.target.value)
  }
  

  const value = {list , onSearch , onChange , movies}

  return (
  <ApiContext.Provider value={value}>
    {props.children}
  </ApiContext.Provider>
  )

  }