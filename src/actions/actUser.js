import { SET_USER, ADD_NEW_USER, EDIT_USER, REMOVE_USER } from "../const/index";

// Action tạo user khi user đăng nhập
export const actSetUer = (user) => {
    return { type: SET_USER, user };
}

// Action đăng ký tài khoản 
export const actAddUer = (user) => {
    return { type: ADD_NEW_USER, user };
}

// Action sửa tài khoản
export const actEditUser = (id, user) => {
    return { type: EDIT_USER, id, user };
}

// Action xóa tài khoản
export const actRemoveUser = () => {
    return { type: REMOVE_USER };
}

