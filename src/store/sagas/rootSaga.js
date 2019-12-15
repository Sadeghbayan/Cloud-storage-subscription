import { all } from 'redux-saga/effects';
import sendSubscriptionSaga from './subscription'

export default function* rootSaga() {
    yield all([
        sendSubscriptionSaga(),
    ]);
}
