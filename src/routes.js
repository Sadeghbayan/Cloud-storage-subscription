import React from 'react';
import Parameters from './components/Parameters/Parameters';
import UserInformation from './components/UserInformation/UserInformation';

const routes = [
    {
        path: '/',
        exact: true,
        component: Parameters,

    },
    {
        path: '/user-information',
        component: UserInformation
    },
]

export default routes;