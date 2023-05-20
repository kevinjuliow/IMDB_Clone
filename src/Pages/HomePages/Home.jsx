import React, { useContext } from 'react'
import { ApiContext } from '../../API/Api'
import { MovieRecommendation1 } from './MovieRecommendation1/MovieRecommendation1'
import TopMovies from './TopMovies/TopMovies'
import { MovieRecommendation2 } from './MovieRecommendation2/MovieRecommendation2'
import { MovieTable } from './MovieTable/MovieTable'


const Home = () => {

  return (
    <div>
        <TopMovies/>
        <MovieRecommendation1/>
        <MovieRecommendation2/>
        <MovieTable/>
    </div>
  )
}

export default Home