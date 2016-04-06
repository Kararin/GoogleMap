export default (state = {
    map: null,
    modalShow: false,
    selectPos: null
}, action) => {
    var result = state,
        actions = {
            SET_MAP: () => {
                return Object.assign({}, state, {
                    map: action.map
                });
            },
            TOGGLE_MODAL: () => {
                return Object.assign({}, state, {
                    modalShow: action.isShow
                });
            },
            CHANGE_SEL_POS: () => {
                return Object.assign({}, state, {
                    selectPos: action.latLng
                });
            }
        };

    if (actions[action.type]) {
        result = actions[action.type]();
    }

    return result;
};