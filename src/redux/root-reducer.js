import {combineReducers} from 'redux'
import userRreducer from './user/user-reducer'
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
    user: userRreducer,
    cart: cartReducer
})

export default rootReducer