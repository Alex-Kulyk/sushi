import createDataContext from './createDataContext';
import { addItemsToCart, removeItemFromCart } from '../utils/cart.utils';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'add_item':
      return { ...state, cart: addItemsToCart(state.cart, action.payload) };
    case 'clear_cart':
      return { ...state, cart: [] };
    case 'remove_item':
      return {
        ...state,
        cart: removeItemFromCart(state.cart, action.payload),
      };
    default:
      return state;
  }
};

const addItemCart = (dispatch) => {
  return (item) => {
    dispatch({ type: 'add_item', payload: item });
  };
};
const clearCart = (dispatch) => {
  return () => {
    dispatch({ type: 'clear_cart' });
  };
};
const removeItemCart = (dispatch) => {
  return (item) => {
    dispatch({ type: 'remove_item', payload: item });
  };
};
export const { Provider, Context } = createDataContext(
  cartReducer,
  { addItemCart, clearCart, removeItemCart },
  {
    cart: [],
  }
);
