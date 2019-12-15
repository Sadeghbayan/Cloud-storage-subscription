import { connect } from 'react-redux';
import confirmComponent from '../Confirm'
import { fetchParameters } from '../../../store/actions/parameters'
import { sendToServer } from '../../../store/actions/confirm'


const mapDispatchToProps = (dispatch) => {
    return {
        fetchParameters:() => dispatch(fetchParameters()),
        submitSelectedSubscription:(value) => dispatch(sendToServer(value)),
    }
}
const mapStateToProps = (state) => {
    let dataToSend = [];
    dataToSend.parameters = state.subscription.parameters;
    dataToSend.user_information = state.subscription.user_information;
    dataToSend.credit_info = state.subscription.credit_info;

    return {
        subscription: state.subscription,
        finalParams : state.subscription.parametersWithPrice,
        data : dataToSend
    }
}

const ConfirmContainer = connect(mapStateToProps, mapDispatchToProps)(confirmComponent)
export default ConfirmContainer;
