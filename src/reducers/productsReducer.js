import { ADD_PRODUCT, REMOVE_PRODUCT, FILTER_PRODUCTS } from '../actions/actionTypes';

const initialState = {
  products: [
    { id: 1, name: 'Product 1', price: 30 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 10 },
  ],
  filteredProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        filteredProducts: [...state.filteredProducts, action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
        filteredProducts: state.filteredProducts.filter((product) => product.id !== action.payload),
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter((product) =>
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
