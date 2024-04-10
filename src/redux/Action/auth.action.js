import { createAction } from "@reduxjs/toolkit";
import { AUTH_ACTION, REQUEST } from "../constants";


export const registerAction = createAction(REQUEST(AUTH_ACTION.REGISTER));