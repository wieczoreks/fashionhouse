
import React from 'react'
import { ReactComponent as Logo } from '../../util/img/logo1.svg';
import { auth } from '../../firebase/firebase.utils'
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles'
const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
           <LogoContainer to='/'>
                <Logo className="logo" />
           </LogoContainer> 
           <OptionsContainer >
                <OptionLink to='/shop' >
                        SHOP
                </OptionLink> 
                <OptionLink to='/shop'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ? <OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv>:
                    <OptionLink to='/signin' >
                    SIGN IN
                    </OptionLink>
                }
                <CartIcon />
           </OptionsContainer>
           {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    )
}
const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
