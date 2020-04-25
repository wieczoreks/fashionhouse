import {combineReducers} from 'redux'
import userRreducer from './user/user-reducer'
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import shopReducer from './shop/shop.reducer';

const rootReducer = combineReducers({
    user: userRreducer,
    cart: cartReducer,
    directory:directoryReducer,
    shop: shopReducer
})

const persistConfig = {
    key: 'root',
    storage, 
    whitelist:['cart']
}

export default persistReducer( persistConfig, rootReducer)