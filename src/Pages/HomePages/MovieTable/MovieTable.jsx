import React, { useEffect , useState} from 'react'
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import MovieTableLeft from './MovieTableLeft';
import MovieTableRight from './MovieTableRight';
import '../../../Styles/TopMovies.css'

export const MovieTable = () => {
  const isTabletorMobile = useMediaQuery({query: '(max-width: 1024px)'})
  const isMobile = useMediaQuery({query: '(max-width: 724px)'})

  
  
  return (
    <div style={{color:'var(--imdbColor)' , margin:`${isTabletorMobile? '40px 0 ' : '80px 10%'}`}}>
      <h1>Marvel Avengers</h1>
      <div> 
      
          <div className='movieTable-container'>
            <MovieTableLeft/>
            <MovieTableRight/>
          </div>
      
      </div>
    </div>
  )
}
