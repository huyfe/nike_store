// Đầu tiên import các hằng đã định nghĩa trong folder const để sử dụng cho switch case
import { SET_PRO_TO_STORE, ADD_NEW_PRO, EDIT_PRO, REMOVE_PRO } from '../const/index';

// Tiếp theo tạo hàm reducer là proReducer nhận vào state và action
const proReducer = (state = [], action) => {
    switch (action.type) {
        case SET_PRO_TO_STORE:
            //code đưa product vào store
            action.arrPro.forEach(p => {
                state = [...state,
                {
                    id: p.id,
                    name: p.name,
                    amount: p.amount,
                    price: p.price,
                    salePrice: p.salePrice,
                    imageURL: p.imageURL,
                    description: p.description,
                    categoryId: p.categoryId,
                    style: p.style,
                    createdDate: p.createdDate,
                    views: p.views,
                    likes: p.likes,
                    color: p.color,
                    size: p.size,
                    isSale: p.isSale
                }
                ];
            });
            console.log("Đã đưa products vào store:", state);
            return state;
        case ADD_NEW_PRO:
            const idPro = new Date().getTime();
            state = [...state, {
                id: idPro,
                name: action.name,
                amount: action.amount,
                price: action.price,
                salePrice: action.salePrice,
                imageURL: action.imageURL,
                description: action.description,
                categoryId: action.categoryId,
                style: action.style,
                createdDate: action.createdDate,
                views: 0,
                likes: 0,
                color: action.color,
                size: action.size,
                isSale: 0
            }];
            console.log("Thêm sản phẩm thành công", state);
            return state;
        case EDIT_PRO:
            const indexPro = state.findIndex(row => row.id === action.id);
            if (indexPro !== -1) {
                state[indexPro].name = action.name;
                state[indexPro].amount = action.amount;
                state[indexPro].price = action.price;
                state[indexPro].salePrice = action.salePrice;
                state[indexPro].imageURL = action.imageURL;
                state[indexPro].description = action.description;
                state[indexPro].categoryId = action.categoryId;
                state[indexPro].style = action.style;
                state[indexPro].createdDate = action.createdDate;
                state[indexPro].views = action.views;
                state[indexPro].likes = action.likes;
                state[indexPro].color = action.color;
                state[indexPro].size = action.size;
                state[indexPro].isSale = action.isSale;
            }
            console.log("Sửa sản phẩm thành công: ", state);
            return state;
        case REMOVE_PRO:
            const id_Pro = action.id;
            state = state.filter(row => {
                if (row.id === id_Pro) return false;
                else return true;
            })
            console.log("Xóa sản phẩm thành công", state);
            return state;
        default: return state;
    }
}

export default proReducer;