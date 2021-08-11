import { SET_PRO_TO_STORE, ADD_NEW_PRO, EDIT_PRO, REMOVE_PRO, GET_REVIEW_BY_ID_PRODUCT, ADD_NEW_REVIEW } from '../const/index';

// Action đưa sản phẩm vào store 
export const actSetProToStore = (arrPro) => {
    return { type: SET_PRO_TO_STORE, arrPro };
}

// Action thêm sản phẩm 
export const actAddPro = (product) => {
    return { type: ADD_NEW_PRO, product };
}

// Action sửa sản phẩm
export const actEditPro = (id, product) => {
    return { type: EDIT_PRO, id, product };
}

// Action xóa sản phẩm
export const removePro = (id) => {
    return { type: REMOVE_PRO, id };
}

// Lấy review theo sản phẩm
export const actGetReviewByIdProduct = (arrReview) => {
    return { type: GET_REVIEW_BY_ID_PRODUCT, arrReview };
}

// Thêm review cho sản phẩm
export const actAddReview = (review) => {
    return { type: ADD_NEW_REVIEW, review }
}