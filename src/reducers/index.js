import { combineReducers } from 'redux'
import catReducer from './catReducer';
import proReducer from './proReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import reviewReducer from './reviewReducer';
export default combineReducers({
    category: catReducer,
    product: proReducer,
    cart: cartReducer,
    user: userReducer,
    review: reviewReducer
})