import React from 'react'
import './header.css'
import banner from '../../assets/profile-banner.jpg';


const Header = () => {
  return (
    <div className='mydearest__header'>
        <div className='mydearest__header-banner'>
            <img src={banner} alt="welcome banner" className="responsive" />
        </div>
    </div>
  )
}

export default Header