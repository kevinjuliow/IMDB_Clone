import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { useState , useEffect } from 'react';
import axios from 'axios';
import {MovieRecommendation2RightContainer} from './MovieRecommendation2RightContainer'
import {MovieRecommendation2LeftContainer} from './MovieRecommendation2LeftContainer'

export const MovieRecommendation2 = () => {
  const [movies, setMovies] = useState({});
  const [isLoaded , setIsLoaded] = useState(false);
  const isTabletorMobile = useMediaQuery({query: '(max-width: 1024px)'})
  const isMobile = useMediaQuery({query: '(max-width: 724px)'})


  const onSearch = async () =>{
    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: {q: 'Spiderman'},
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'c1d3d5401dmshada64a455451ddcp1e71fejsn5aa822de3477',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      const lists = response.data.d
      setMovies(lists)
      setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  }

 useEffect(() => {
  onSearch();
 },[])
  return (
    
    <div>
      {isLoaded && 
      <div>
        {movies.map((e)=>{
          return (
            <div className='mainContainer' data = {e}> 
              <MovieRecommendation2LeftContainer/>
              <MovieRecommendation2RightContainer/>
            </div>
          )
        })}
      </div>
      }
    </div>
  )
}
