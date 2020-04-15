import './collection-item.styles.scss'
import React from 'react'
import CustomButton from '../custom-button/custom-button'
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item
    return (
        <div className='collection-item'>
            <div 
            className='image'
            style={{
                backgroundImage:`url(${imageUrl})`
            }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
           <CustomButton inverted onClick={()=>addItem(item)}>
            Add to Cart
           </CustomButton>
        </div>
    )
}

const mapDispacthToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item))
    }
}

export default connect(null, mapDispacthToProps)(CollectionItem)
