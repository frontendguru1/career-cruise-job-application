import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
import signupReducer from "../slice/authSignup";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    signup: signupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
