import React from 'react'
import { useMediaQuery } from 'react-responsive'


export const TopMoviesSlider = (props) => {
  const isTabletorMobile = useMediaQuery({query: '(max-width: 1024px)'})
  const isMobile = useMediaQuery({query: '(max-width: 724px)'})
  const {title , cast , year , qid , image} = props.data 
 

  return (
    <div style={{height : `${ isMobile ? '300px':isTabletorMobile? '400px' :'600px'}`}}>
      <img src={image} alt="" style={{width : '100%' , height : '100%'}}/>
    </div>
  )
}
