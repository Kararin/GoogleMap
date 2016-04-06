export const setMap = (map) => ({type: 'SET_MAP', map});

export const toggleModal = (isShow) => ({type: 'TOGGLE_MODAL', isShow});

export const changeSelectedPosition = (latLng) => ({type: 'CHANGE_SEL_POS', latLng});