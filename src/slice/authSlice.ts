import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authLoginState, loginApiProps } from "../@types/type";
import * as api from "../services/authServices";

export const authLoginAsync = createAsyncThunk(
  "auth/login",
  async ({ username, password }: loginApiProps, { rejectWithValue }) => {
    try {
      const response = await api.authLoginService({ username, password });
      return response.data;
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
  status: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = "";
      state.status = "idle";
      window.localStorage.removeItem("authToken");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(authLoginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = "loading";
      })
      .addCase(authLoginAsync.fulfilled, (state, action) => {
        const token = action?.payload?.token;
        state.loading = false;
        state.token = token;
        state.user = action.payload.user;
        state.error = null;
        window.localStorage.setItem("authToken", token);
        state.status = "succeeded";
      })
      .addCase(authLoginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Something went wrong";
        state.status = "failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
