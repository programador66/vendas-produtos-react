import { createStore } from "redux";

const INITIAL_STATE = {
  products: [],
  cart: [],
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      products: action.products,
    };
  } else if (action.type === "ADD_CART") {
    const produtos_store = state.products;

    const addProds = produtos_store.filter((prod) => prod.id === action.id);

    const cart_s = state.cart;

    const newCart = cart_s.concat(addProds);

    return {
      ...state,
      cart: newCart,
    };
  } else if (action.type === "REMOVE_CART") {
    const newCart = state.cart.filter((cart) => cart.id !== action.id);

    return {
      ...state,
      cart: newCart,
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
