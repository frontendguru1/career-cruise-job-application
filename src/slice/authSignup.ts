import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authSignupState, signupFormProps } from "../@types/type";
import * as api from "../services/authServices";

export const authSignupAsync = createAsyncThunk(
  "auth/signup",
  async (formData: signupFormProps, { rejectWithValue }) => {
    try {
      const response = await api.authSignup(formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(`Unable to signup ${error}`);
    }
  }
);

const initialState: authSignupState = {
  loading: false,
  error: null,
  message: "",
  status: "idle",
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authSignupAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = "loading";
      })
      .addCase(authSignupAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.error = null;
        state.status = "succeeded";
      })

      .addCase(authSignupAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Something went wrong";
        state.status = "failed";
      });
  },
});

export default signupSlice.reducer;
