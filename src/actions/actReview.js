import { GET_REVIEW_BY_ID_PRODUCT, ADD_NEW_REVIEW } from '../const/index';

// Lấy review theo sản phẩm
export const actGetReviewByIdProduct = (arrReview) => {
    return { type: GET_REVIEW_BY_ID_PRODUCT, arrReview };
}

// Thêm review cho sản phẩm
export const actAddReview = (review) => {
    return { type: ADD_NEW_REVIEW, review }
}