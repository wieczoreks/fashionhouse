import {
    TOGGLE_CART_HIDDEN,
    ADD_ITEM

} from '../types'
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case ADD_ITEM:
            return {
                ...state,
                cartItems:addItemToCart([...state.cartItems],action.payload)
            }
            case TOGGLE_CART_HIDDEN:
                console.log(state.hidden,'state.hidden')
                return {
                    ...state,
                    hidden: !state.hidden,
                    
                }
                
        default:
            return state;
    }
}

export default cartReducer