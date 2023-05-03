import React, { useContext, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation , Pagination, A11y , Autoplay} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ApiContext } from '../../../API/Api';
import { TopMoviesSlider } from './TopMoviesSlider';
import '../../../Styles/TopMovies.css'



const TopMovies = () => {
  const {movies} = useContext(ApiContext)
  const isTabletorMobile = useMediaQuery({query: '(max-width: 1024px)'})
  const isMobile = useMediaQuery({query: '(max-width: 724px)'})
  return (
    <div style={{margin:`${isTabletorMobile? '0 0 ' : '0 10%'}` , color : 'white'}}>
    <div>
    <Swiper
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          rewind={true}
          modules={[Navigation , Pagination , Autoplay]}
          spaceBetween={20}
          loop = {true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          >
        {movies.map((e)=>{
        return (
          <SwiperSlide>
            <TopMoviesSlider data={e}/>
            <div className='TopMovieDescription' style={{height : `${isMobile? '100px' : '200px'}`}}>
              <img src={e.image} alt="" style={{width:`${isMobile? '50%' : '30%'}`}}/>
              <div>
              <h1>{e.title}</h1>
              <p>Cast : {e.cast}</p>
              <p>Year : {e.year}</p>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
        </Swiper>
    </div>
    </div>
  )
}

export default TopMovies