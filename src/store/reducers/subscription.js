import {
    ADD_PARAMETERS,
    ADD_USER_INFORMATION,
} from '../actions/names';

const subscription = (state = [], action) => {
    switch (action.type) {
        case ADD_PARAMETERS:
            return {
                ...state,
                loading: true,
                error: false
            }
        case ADD_USER_INFORMATION:
            return {
                ...state,
                loading: true,
                error: false
            }
        default:
            return state
    }
}

export default subscription;
