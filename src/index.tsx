import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '@/styles/index.scss';

import RoutesComponent from '@/routes';
import store from '@/store';

render((
    <Provider store={store}>
        <RoutesComponent />
        <ToastContainer />
    </Provider>
), document.getElementById('root'))