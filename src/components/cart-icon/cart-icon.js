import { ReactComponent as ShoppingIcon } from '../../util/img/basket.svg';
import './card-icon.styles.scss'
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

import React from 'react'

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div className="cart-icon" onClick={()=>toggleCartHidden()}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'> {itemCount} </span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
        itemCount: selectCartItemsCount 
})

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)

