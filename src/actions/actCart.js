import { ADD_NEW_CART, EDIT_CART, REMOVE_CART, CLEAR_CART } from '../const/index';

// Action thêm sản phẩm 
export const actAddCart = (product) => {
    return { type: ADD_NEW_CART, product };
}

// Action sửa sản phẩm
export const actEditCart = (id, product) => {
    return { type: EDIT_CART, id, product };
}

// Action xóa sản phẩm
export const actRemoveCart = (id) => {
    return { type: REMOVE_CART, id };
}

// Action clear cart
export const actClearCart = () => {
    return { type: CLEAR_CART };
}
