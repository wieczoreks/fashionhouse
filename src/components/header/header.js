import './header.styles.scss'
import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../util/img/logo1.svg';

const Header = () => {
    return (
        <div className='header'>
           <Link to='/' className="logo-container">
                <Logo className="logo" />
           </Link> 
           <div className='options'>
           <Link to='/shop' className="potion">
                SHOP
           </Link> 
           <Link to='/shop' className="option">
               CONTACT
           </Link> 
           </div>
        </div>
    )
}

export default Header
