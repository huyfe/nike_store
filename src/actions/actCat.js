import { SET_CAT_TO_STATE, ADD_NEW_CAT, EDIT_CAT, REMOVE_CAT } from "../const/index";

// Action đưa danh mục vào store 
export const actSetCatToStore = (arrCat) => {
    return { type: SET_CAT_TO_STATE, arrCat };
}

// Action thêm cat 
export const actAddCat = (category) => {
    return { type: ADD_NEW_CAT, category };
}

// Action thêm cat
export const actEditCat = (id, category) => {
    return { type: EDIT_CAT, id, category };
}

// Action xóa cat 
export const removeCat = (id) => {
    return { type: REMOVE_CAT, id };
}

