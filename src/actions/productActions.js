import { ADD_PRODUCT, REMOVE_PRODUCT, FILTER_PRODUCTS } from './actionTypes';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  payload: id,
});

export const filterProducts = (filterText) => ({
  type: FILTER_PRODUCTS,
  payload: filterText,
});
