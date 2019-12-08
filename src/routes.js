import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import Home from './components/Home/Home';



const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Router;