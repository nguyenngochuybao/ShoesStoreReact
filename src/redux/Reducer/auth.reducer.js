import { createReducer } from "@reduxjs/toolkit";

import { AUTH_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
    auth: {},
}

const authReducer = createReducer( initialState, {
   // Register
  [REQUEST(AUTH_ACTION.REGISTER)]: (state, action) => {
    return {
      ...state,
      registerData: {
        ...state.registerData,
        load: true,
        error: "",
      },
    };
  },

  [SUCCESS(AUTH_ACTION.REGISTER)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      registerData: {
        ...state.registerData,
        load: false,
      },
    };
  },

  [FAIL(AUTH_ACTION.REGISTER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      registerData: {
        ...state.registerData,
        load: false,
        error: error,
      },
    };
  },
} )


export default authReducer;