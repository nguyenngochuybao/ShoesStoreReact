// store.js
import { configureStore } from '@reduxjs/toolkit';

import authReducer from './redux/Reducer/auth.reducer';


import createSagaMiddleware from "redux-saga";

import rootSaga from "./redux/Saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer
  },
  
  middleware: ( getDefaultMiddleware ) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
} );
sagaMiddleware.run(rootSaga);

export default store;