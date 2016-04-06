import {connect} from 'react-redux';
import {getCoordByAddress} from '../actions';
import MarkerPanel from '../view/MarkerPanel';

const mapDispatchToProps = dispatch => {
    return {
        getCoordByAddress: (address) => {
            dispatch(getCoordByAddress(address));
        }
    };
};

export default connect(null, mapDispatchToProps)(MarkerPanel);