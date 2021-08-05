import { combineReducers } from 'redux'
import catReducer from './catReducer';
import proReducer from './proReducer';
import cartReducer from './cartReducer';
export default combineReducers({
    category: catReducer,
    product: proReducer,
    cart: cartReducer,
})