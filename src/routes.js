import React from 'react';
import Parameters from './components/Parameters/Parameters';
import UserInformation from './components/UserInformation/UserInformation';
import CreditCard from './components/Credit/Credit';
import Confirm from './components/Confirm/Confirm';

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
    {
        path: '/credit-card',
        component: CreditCard
    },
    {
        path: '/confirm',
        component: Confirm
    },
]

export default routes;