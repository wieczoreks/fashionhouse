import './header.styles.scss'
import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../util/img/logo1.svg';
import { auth } from '../../firebase/firebase.utils'
import { connect } from "react-redux";


const Header = ({currentUser}) => {
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
           {
               currentUser ? <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>:
               <Link to='/signin' className="option">
               SIGN IN
               </Link>
           }
           </div>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Header)