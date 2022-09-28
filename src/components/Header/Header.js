import React from 'react';
import Images from '../../images/colorlogo2.png';
import './Header.css';

const Header = () => {
    return (
        <div className='logo'>
            <img src={Images} alt="" />
            <h1>The Dream Club</h1>
        </div>
    );
};

export default Header;