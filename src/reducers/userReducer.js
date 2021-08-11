import { SET_USER, ADD_NEW_USER, EDIT_USER, REMOVE_USER } from "../const/index";

const userReducer = (state = null, action) => {
    switch (action.type) {
        case SET_USER:
            //code khi đăng nhập
            state = action.user;
            console.log("Đã thêm user vào state:", state);
            return state;
        case ADD_NEW_USER:
            const idCat = new Date().getTime();
            state = [...state, { id: idCat, name: action.name, slot: action.slot, active: action.active }];
            console.log("Thêm danh mục thành công", state);
            return state;
        case EDIT_USER:
            const indexCat = state.findIndex(row => row.id === action.id);
            if (indexCat !== -1) {
                state[indexCat].name = action.name;
                state[indexCat].slot = action.slot;
                state[indexCat].active = action.active;
            }
            console.log("Sửa category thành công", state);
            return state;
        case REMOVE_USER:
            // const id_cat = action.id;
            // state = state.filter(row => {
            //     if (row.id === id_cat) return false;
            //     else return true;
            // })
            state = null;
            console.log("Đăng xuất thành công", state);
            return state;
        default: return state;
    }
};

export default userReducer;