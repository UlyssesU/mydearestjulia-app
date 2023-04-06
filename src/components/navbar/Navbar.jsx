import React from 'react'
import './navbar.css';
import logo from '../../assets/profilepic.jpg';
// import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='mydearest__navbar'>
        <div className='mydearest__navbar-logo'>
            <a href='/'>
                <img src={logo} alt="logo" />
                MyDearestJulia
            </a>
        </div>
        <div className='mydearest__navbar-searchbar'>
            {/* insert searchbar */}
            <button type='button' className='searchbar'>Search</button>
        </div>
        <div className='mydearest__navbar-menu'>
            {/* insert menu for sidebar */}
            {/* <Sidebar /> */}
            <button type='button' className='menu'>Menu</button>
        </div>
    </div>
  )
}

export default Navbar