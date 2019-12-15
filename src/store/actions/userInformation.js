import {
    ADD_USER_INFORMATION,
} from './names'


export function addUserInformation(value) {
    return {
        type: ADD_USER_INFORMATION,
        payload: value
    }
}



