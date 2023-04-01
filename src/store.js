import { createStore } from 'redux';
import productsReducer from './reducers/productsReducer';

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userSaga from './userSagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: productsReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(userSaga);

export default store;

