import { combineReducers } from "@reduxjs/toolkit";

import posterDataSlice from "./posterDataSlice";

export const rootReducer = combineReducers({
  posterData: posterDataSlice,
});
