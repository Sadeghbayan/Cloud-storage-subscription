import {
    ADD_PARAMETERS,
    FETCH_PARAMETERS,
    ADD_USER_INFORMATION,
    ADD_CREDIT,
    SEND_DATA,
    SEND_DATA_SUCCESS,
    SEND_DATA_FAILURE

} from '../actions/names';

const subscription = (state = [], action) => {
    switch (action.type) {
        case ADD_PARAMETERS:
            return {
                ...state,
                parameters: action.payload,
                loading: false,
                error: false
            }
        case FETCH_PARAMETERS:
            let parametersWithPrice = []
            const discount = 10;
            const calculatePriceAmount = state.parameters.amount * 2;
            const calculatePriceWithDuration = state.parameters.duration * calculatePriceAmount;
            const totalPrice = state.parameters.upfront ==='yes' ? calculatePriceWithDuration - (calculatePriceWithDuration * discount/100) : calculatePriceWithDuration
            parametersWithPrice.parameters = state.parameters;
            parametersWithPrice.totalPrice = totalPrice;
            return {
                ...state,
                parametersWithPrice: parametersWithPrice,
                loading: false,
                error: false
            }
        case ADD_USER_INFORMATION:
            return {
                ...state,
                user_information: action.payload,
                loading: false,
                error: false
            }
        case ADD_CREDIT:
            return {
                ...state,
                credit_info: action.payload,
                loading: false,
                error: false
            }
        case SEND_DATA:
            return {
                ...state,
                sendServerStatus: false,
                loading: true,
                error: false
            }
        case SEND_DATA_SUCCESS:
            return {
                ...state,
                confirmData: action.payload,
                sendServerStatus: true,
                loading: false,
                error: false
            }
        case SEND_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export default subscription;
