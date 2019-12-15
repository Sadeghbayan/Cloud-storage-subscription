import { call, put, throttle, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {API} from '../../API'
import {SEND_DATA, SEND_DATA_SUCCESS, SEND_DATA_FAILURE} from '../actions/names'

let config = {
    headers: {
        Accept: 'application/json'
    }
}

function subscriptionRequest(action) {

    const arrayOfData = Object.keys(action).map(i => action[i])
    return axios
        .post( API,
            arrayOfData,
            config
        )
        .then(response => response)
        .catch(error => ({ error }));
}

function* sendSubscription(action) {
    try {
        const getResponse = yield call(subscriptionRequest, action.payload);
        if (getResponse.error != null) {
            yield put({type: SEND_DATA_FAILURE, message: getResponse.error});
        } else {
            yield put({type: SEND_DATA_SUCCESS, getResponse});
        }
    } catch (e) {
        yield put({type: SEND_DATA_FAILURE, message: e.message});
    }
}


export default function* sendSubscriptionSaga() {
    yield takeLatest(SEND_DATA, sendSubscription);
}
