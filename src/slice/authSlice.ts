import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authLoginState, loginApiProps } from "../@types/type";
import * as api from "../services/authServices";

export const authLoginAsync = createAsyncThunk(
  "auth/login",
  async ({ username, password }: loginApiProps, { rejectWithValue }) => {
    try {
      const response = await api.authLoginService({ username, password });
      return response;
    } catch (error) {
      return rejectWithValue(`Unable to login ${error}`);
    }
  }
);

const initialState: authLoginState = {
  loading: false,
  error: null,
  token: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {},
  },
  extraReducers(builder) {
    builder
      .addCase(authLoginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLoginAsync.fulfilled, (state, action) => {
        const token = action?.payload?.token;
        state.loading = false;
        state.token = token;
        state.user = action.payload.user;
        state.error = null;
        window.localStorage.setItem("authToken", token);
      })
      .addCase(authLoginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Something went wrong";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
