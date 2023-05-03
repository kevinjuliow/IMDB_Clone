import React, { useEffect , useState} from 'react'
import axios from 'axios';
import { MovieSlider1 } from './MovieSlider1';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation , Pagination, A11y} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const MovieRecommendation1 = () => {
  const [movies, setMovies] = useState({});
  const [isLoaded , setIsLoaded] = useState(false);
  const isTabletorMobile = useMediaQuery({query: '(max-width: 1024px)'})
  const isMobile = useMediaQuery({query: '(max-width: 724px)'})

  const onSearch = async () =>{
    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: {q: 'fast and furious'},
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
    <div style={{color:'var(--imdbColor)' , margin:`${isTabletorMobile? '40px 0 ' : '80px 10%'}`}}>
      <h1>The Fast Saga Series</h1>
      <div> 
        <Swiper
          slidesPerView={isMobile ? 3.3 : isTabletorMobile? 3.3 : 4.3}
          navigation={true}
          pagination={{ clickable: true }}
          rewind={true}
          modules={[Navigation]}
          spaceBetween={20}
          >
        {isLoaded && movies.map((e)=>{
        return (
          <SwiperSlide>
            <MovieSlider1 data={e}/>
          </SwiperSlide>
        )
      })}
        </Swiper>
      
      </div>
    </div>
  )
}
