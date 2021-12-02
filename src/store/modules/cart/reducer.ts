//não possuem renderização, por isso sem o x de tsx
import { Reducer } from 'redux';

import { ICartState } from './types';

const INITIAL_STATE: ICartState = {
    cart: []
}

const storeCart: Reducer<ICartState | any> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_CART': {
            const { cart } = action.payload;
            return {
                ...state,
                cart: [
                    ...state.cart,
                    cart
                ]
            }
        }

        default:
            return state;
    }
}

export default storeCart;