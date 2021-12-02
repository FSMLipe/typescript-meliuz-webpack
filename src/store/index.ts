import { createStore } from 'redux';

import CartStore from './modules/cart/reducer';

const store = createStore(CartStore);

export default store;