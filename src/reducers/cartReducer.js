// Đầu tiên import các hằng đã định nghĩa trong folder const để sử dụng cho switch case
import { ADD_NEW_CART, EDIT_CART, REMOVE_CART, CLEAR_CART } from '../const/index';

// Tiếp theo tạo hàm reducer là proReducer nhận vào state và action
const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_NEW_CART:
            console.log("Action", action);
            state = [...state, {
                id: action.product.id,
                name: action.product.name,
                amount: 1,
                price: action.product.price,
                priceCart: action.product.priceCart,
                imageURL: action.product.imageURL,
                color: action.product.color,
                size: action.product.size,
            }];
            console.log("Thêm sản phẩm vào giỏ hàng thành công", state);
            return state;
        case EDIT_CART:
            const indexPro = state.findIndex(row => row.id === action.id);
            if (indexPro !== -1) {
                state = [...state];
                state[indexPro].amount = action.product.amount;
                state[indexPro].priceCart = action.product.priceCart;
            }
            console.log("Sửa sản phẩm trong giỏ hàng thành công: ", state);
            return state;
        case REMOVE_CART:
            const id_Pro = action.id;
            state = state.filter(row => {
                if (row.id === id_Pro) return false;
                else return true;
            })
            console.log("Xóa sản phẩm thành công", state);
            return state;
        case CLEAR_CART:
            state = [];
            return state;
        default: return state;
    }
}

export default cartReducer;