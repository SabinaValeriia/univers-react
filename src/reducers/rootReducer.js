import { combineReducers } from 'redux';
import productsReducer from './productsReducer';


const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

console.log('Initial state:', store.getState());

store.dispatch(addProduct({ id: 4, name: 'Product 4', price: 40 }));

console.log('State after addProduct:', store.getState());

store.dispatch(filterProducts('Product 3'));

console.log('State after filterProducts:', store.getState());
export default rootReducer;
