// Đầu tiên import các hằng đã định nghĩa trong folder const để sử dụng cho switch case
import { GET_REVIEW_BY_ID_PRODUCT, ADD_NEW_REVIEW } from '../const/index';

// Tiếp theo tạo hàm reducer là proReducer nhận vào state và action
const reviewReducer = (state = [], action) => {
    switch (action.type) {
        case GET_REVIEW_BY_ID_PRODUCT:
            action.arrReview.forEach(r => {
                state = [...state, {
                    id: r.id,
                    ten: r.ten,
                    noidung: r.noidung,
                    sao: r.sao,
                    ngay: r.ngay,
                    productId: r.productId
                }
                ];
            });
            console.log("Đã lấy review về sản phẩm", state);
            return state;
        case ADD_NEW_REVIEW:
            console.log("Action", action);
            state = [...state, {
                id: action.review.id,
                ten: action.review.ten,
                noidung: action.review.noidung,
                sao: action.review.sao,
                ngay: action.review.ngay,
                productId: action.review.productId
            }]
            console.log("Đã thêm review vào sản phẩm", state);
            return state;
        default: return state;
    }
}

export default reviewReducer;