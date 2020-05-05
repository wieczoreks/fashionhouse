
import {
    TOGGLE_CART_HIDDEN, 
    ADD_ITEM,
    CLEAR_ITEM_FROM_CARD,
    REMOVE_ITEM,
    CLEAR_CART
} from '../types'

export const toggleCartHidden = () => {
    return { type:TOGGLE_CART_HIDDEN }
}

export const addItem = (item) => {
    return { type:ADD_ITEM, payload:item }
} 

export const clearItemFromCart = (item) => {
    return { type:CLEAR_ITEM_FROM_CARD, payload:item }
} 

export const removeItem = (item) => {
    return { type:REMOVE_ITEM, payload:item }
} 

export const clearCart = (item) => {
    return { type:CLEAR_CART }
} 