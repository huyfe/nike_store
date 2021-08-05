import { SET_PRO_TO_STORE, ADD_NEW_PRO, EDIT_PRO, REMOVE_PRO } from '../const/index';

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

