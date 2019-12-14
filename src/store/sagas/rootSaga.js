import { all } from 'redux-saga/effects';
import subscriptionSaga from './subscription'

export default function* rootSaga() {
    yield all([
        subscriptionSaga(),
    ]);
}
