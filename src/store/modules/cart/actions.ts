import { ICartStore } from './types'

export function addNewProduct(cart: ICartStore) {
    return {
        type: 'ADD_CART',
        payload: {
            cart
        }
    }
}