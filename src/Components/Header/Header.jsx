import React from 'react';
import './Header.css';
import Icon from '../../Assets/logo2.png'
import Profile from '../../Assets/profile.png'
import Filter from '../../Assets/filter.png'

function Header({onSearchChange, toggleSideBar}) {
  return (
    <div className='header'>
        <div className='logo-div'><img className='logo' src={Icon} alt='Logo'></img><p>Giraffe</p></div>
      <input placeholder='Search' onChange={onSearchChange} className='search-bar'></input>
      <div className='app-profile'>
        <p>Welcome, Guest!</p>
        <img className='filter-icon' src={Filter} onClick={toggleSideBar} alt='fliter'></img>
        <img className='profile' src={Profile} alt='Profile'></img>
      </div>
        

    </div>
  );
}

export default Header;
