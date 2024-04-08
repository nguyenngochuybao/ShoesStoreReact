// store.js
import { configureStore } from '@reduxjs/toolkit';


import createSagaMiddleware from "redux-saga";

import rootSaga from "./redux/Saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
} );
sagaMiddleware.run(rootSaga);

export default store;