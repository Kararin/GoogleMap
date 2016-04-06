import {
    connect
} from 'react-redux';
import Map from '../view/Map';
import {
    setMap,
    toggleModal,
    changeSelectedPosition
} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        initMap: (el) => {
            var map = new google.maps.Map(el, {
                center: {
                    lat: 48.465709518285756,
                    lng: 35.04900338128209
                },
                zoom: 15
            });

            dispatch(setMap(map));

            map.addListener('click', e => {
                dispatch(toggleModal(true));
                dispatch(changeSelectedPosition(e.latLng));
            });
        },

    };
};

export default connect(null, mapDispatchToProps)(Map);