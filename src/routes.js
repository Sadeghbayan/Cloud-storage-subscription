import React from 'react';
import Parameters from './components/Parameters/Container/ParametersContainer';
import UserInformation from './components/UserInformation/Container/UserInformationContainer';
import CreditCard from './components/Credit/Container/CreditContainer';
import Confirm from './components/Confirm/Container/ConfirmContainer';

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