import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import '@/styles/index.scss';

import RoutesComponent from '@/routes';
import store from '@/store';

render((
    <Provider store={store}>
        <RoutesComponent />
    </Provider>
), document.getElementById('root'))