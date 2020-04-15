import './header.styles.scss'
import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../util/img/logo1.svg';
import { auth } from '../../firebase/firebase.utils'
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const Header = ({currentUser, hidden}) => {
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
           <CartIcon />
           </div>
           {hidden ? null : <CartDropdown />}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
