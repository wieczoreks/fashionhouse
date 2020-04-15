import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button'
import CartItem from "../cart-item/cart-item";
import { connect } from "react-redux";
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {withRouter} from 'react-router-dom'
import { createStructuredSelector } from "reselect";
import React from 'react'

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className='cart-dropdown'>
           <div className='cart-items'>
            {
                cartItems.length > 0 ?
                cartItems.map(cartItem=>{
                return (
                    <CartItem item={cartItem} key={cartItem.id} />
                )
                })
                :<span className='empty-message'>Your cart is empty</span>
            
            }           
           </div>
           <CustomButton onClick={() => {
                dispatch(toggleCartHidden())
                history.push('/checkout')}}>
                GO TO CHECKOUT
           </CustomButton>
        </div>
    )
}

const mapStateToPorps = createStructuredSelector({
        cartItems:selectCartItems
})

export default withRouter(connect(mapStateToPorps)(CartDropdown))


