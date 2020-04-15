import './checkout.styles.scss'
import { connect } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutItem  from "../../components/checkout-item/checkout-item";
import React from 'react'


const CheckoutPage = ({cartItems, total}) => {
    return (
        <div className="checkout-page">
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cart=><CheckoutItem key={cart.id} cartItem={cart} />)
            }
            <div className="total">
                <span>TOTAL: ${total} </span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
