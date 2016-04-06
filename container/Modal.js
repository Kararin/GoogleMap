import {connect} from 'react-redux';
import Modal from '../view/Modal';
import {toggleModal, createMarker} from '../actions';

const mapStateToProps = (state) => {
    var {map, selectPos} = state;

    return {
        show: state.modalShow,
        createMarker: createMarker(map, selectPos)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClose: () => {
            dispatch(toggleModal(false));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);