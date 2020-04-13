import {combineReducers} from 'redux'
import userRreducer from './user/user-reducer'

const rootReducer = combineReducers({user: userRreducer})

export default rootReducer