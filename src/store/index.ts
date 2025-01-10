import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
import signupReducer from "../slice/authSignup";
import createJobReducer from "../slice/createJobSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    signup: signupReducer,
    createJob: createJobReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
