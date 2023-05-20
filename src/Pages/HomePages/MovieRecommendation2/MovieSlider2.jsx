import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import {Navigation , Pagination} from 'swiper'
import { useMediaQuery } from 'react-responsive'

export const MovieSlider2 = (props) => {
  const {id , rank , i } = props.data
  const isTabletorMobile = useMediaQuery({query: '(max-width: 1024px)'})
  const isMobile = useMediaQuery({query: '(max-width: 724px)'})

  return (
    <Swiper>
      <SwiperSlide>
      <img src={i.imageUrl} alt="" style={{width:'100%' , height : `${isMobile ? "200px" : '350px'}`}}/>
      </SwiperSlide>
    
    </Swiper>
  )
}
