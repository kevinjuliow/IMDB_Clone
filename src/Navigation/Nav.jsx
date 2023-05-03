import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Nav.css'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsBookmarkPlusFill} from 'react-icons/bs'
import {SearchBox} from './SearchBox'
import { useMediaQuery } from 'react-responsive'



export const Nav = () => {
  const isTabletorMobile = useMediaQuery({query: '(max-width: 1024px)'})

  return (
    <div className='nav-container' style={{padding:`${isTabletorMobile? '0 0' : '0 10%'}`}}>

      {isTabletorMobile? 
       <>

       <div className="hamburgerMenu">
       <RxHamburgerMenu className='hamburgerMenu'/>
       </div>
       <Link to={'/'} className='navLogo'>IMDb</Link>
 
       </> 
      :
      <>

      <Link to={'/'} className='navLogo' style={{marginRight:'10px'}}>IMDb</Link>
      <div className="hamburgerMenu">
      <RxHamburgerMenu className='hamburgerMenu'/>
      <p style={{fontSize : '10px' , fontWeight:'bold' , marginLeft:'3px'}}>MENU</p> 
      </div>
      </> 
      }
     
    
      <SearchBox/>
      
      
      <>
      <p style={{position:'absolute', left: '70%'}}><BsBookmarkPlusFill/> Watchlist</p>
      <p style={{position:'absolute', left: `${isTabletorMobile ? '90%' : '80%'}`}}>Sign In</p>
      </>
      
    </div>
  )
}
