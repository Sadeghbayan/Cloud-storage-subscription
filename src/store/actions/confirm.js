import {
    SEND_DATA,
} from './names'


export function sendToServer(value) {
    return {
        type: SEND_DATA,
        payload: value
    }
}



