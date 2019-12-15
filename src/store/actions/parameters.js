import {
    ADD_PARAMETERS,
    FETCH_PARAMETERS
} from './names'


export function addParameters(value) {
    return {
        type: ADD_PARAMETERS,
        payload: value
    }
}
export function fetchParameters() {
    return {
        type: FETCH_PARAMETERS,
    }
}



