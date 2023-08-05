import React from 'react';
import homeIcon from '../assets/icons/Group 2918.png';
import bellIcon from '../assets/icons/Layer_28.png';
import bookmarkIcon from '../assets/icons/Group.png';
import profileIcon from '../assets/icons/Group1.png';

const Navbar = () => {
    return(
        <div className='navbar-container'>
            <h2>TravelMedia.in</h2>
            <div className='navbar-icon-container'>
                <img src={homeIcon} alt='homeIcon' />
                <img src={bellIcon} alt='bellIcon' />
                <img src={bookmarkIcon} alt='bookmarkIcon' />
                <img src={profileIcon} alt='profileIcon' />
            </div>
        </div>
    )
}

export default Navbar;