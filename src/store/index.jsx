import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slices/auth.slice";

const store = configureStore({
  reducer: AuthReducer,
});

export default store;
