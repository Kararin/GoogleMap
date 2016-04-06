import {connect} from 'react-redux';
import Modal from '../view/Modal';
import {toggleModal} from '../actions';

const mapStateToProps = (state) => {
    return {
        show: state.modalShow
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClickHandler: (title) => {
            dispatch(toggleModal(false));
            // addMarker(title);
        },
        onClose: () => {
            dispatch(toggleModal(false));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);