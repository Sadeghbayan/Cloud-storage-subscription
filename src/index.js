import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import '../src/scss/style.scss';
import App from "../src/components/App/App"
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './store/reducers/rootReducer';
import rootSaga from './store/sagas/rootSaga';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
