export const setMap = (map) => ({type: 'SET_MAP', map});

export const toggleModal = (isShow) => ({type: 'TOGGLE_MODAL', isShow});

export const changeSelectedPosition = (latLng) => ({type: 'CHANGE_SEL_POS', latLng});

export const getCoordByAddress = (address) => {
        return dispatch => {
            var geocoder = new google.maps.Geocoder();

            geocoder.geocode({
                address: `${address}, Dnepropetrovsk, Ukraine`,
            }, (result) => {
                dispatch(changeSelectedPosition(result[0].geometry.location));
                dispatch(toggleModal(true));
            });
        };

};

export const createMarker = (map, position) => {
    return title => {
        return new google.maps.Marker({
            position,
            map,
            title
        });
    };
};