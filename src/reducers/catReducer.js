import { SET_CAT_TO_STATE, ADD_NEW_CAT, REMOVE_CAT, EDIT_CAT } from '../const/index';

const catReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CAT_TO_STATE:
            //code đưa category vào store
            action.arrCat.forEach(c => {
                state = [...state,
                {
                    id: c.id,
                    name: c.name,
                }
                ];
            });
            console.log("Đã đưa categories vào store:", state);
            return state;
        case ADD_NEW_CAT:
            const idCat = new Date().getTime();
            state = [...state, { id: idCat, name: action.name, slot: action.slot, active: action.active }];
            console.log("Thêm danh mục thành công", state);
            return state;
        case EDIT_CAT:
            const indexCat = state.findIndex(row => row.id === action.id);
            if (indexCat !== -1) {
                state[indexCat].name = action.name;
                state[indexCat].slot = action.slot;
                state[indexCat].active = action.active;
            }
            console.log("Sửa category thành công", state);
            return state;
        case REMOVE_CAT:
            const id_cat = action.id;
            state = state.filter(row => {
                if (row.id === id_cat) return false;
                else return true;
            })
            console.log("Xóa category thành công", state);
            return state;
        default: return state;
    }
};

export default catReducer;