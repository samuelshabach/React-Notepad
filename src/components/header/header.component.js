import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/react.svg';

import './header.styles.scss';


const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>
            <Link className='option' to='/addnotes'>
                ADD NOTES
            </Link>
        </div>
    </div>
)

export default Header;