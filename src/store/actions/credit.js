import {
    ADD_CREDIT,
} from './names'


export function addCredit(value) {
    return {
        type: ADD_CREDIT,
        payload: value
    }
}



