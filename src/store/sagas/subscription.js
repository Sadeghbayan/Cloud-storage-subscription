import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'
// import { API } from '../../Helpers/Apis'
import {
    ADD_PARAMETERS,
    ADD_USER_INFORMATION
} from '../actions/names'

const sendSubscriptionRequest = async() => {

}


function* sendSubscription() {
    try {
        const requestResponse = yield call(sendSubscriptionRequest);
    } catch (e) {
    }
}

export default function* subscriptionSaga() {
    yield takeLatest(ADD_PARAMETERS, sendSubscription);
}

