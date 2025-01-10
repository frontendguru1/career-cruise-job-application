import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../services/createJobService";
import { RootState } from "@reduxjs/toolkit/query";

export const createJobAsync = createAsyncThunk(
  "job/createJob",
  async (jobData, { rejectWithValue }) => {
    try {
      const response = await api.createJobService(jobData);
      return response.data;
    } catch (error) {
      return rejectWithValue(`Unable to create job: ${error}`);
    }
  }
);

interface createJobState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  message: string | null;
  job: { [key: string]: number | string | null | boolean };
}

const initialState: createJobState = {
  isLoading: false,
  error: null,
  message: "",
  isSuccess: false,
  job: {},
};
const createJobSlice = createSlice({
  name: "createJobSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = null;
      state.job = {};
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createJobAsync.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(createJobAsync.fulfilled, (state, action) => {
        console.log("action.payload", action.payload);
        state.isSuccess = true;
        state.isLoading = false;
        state.error = null;
        state.job = action.payload;
        state.message = "Job created successfully!";
      })
      .addCase(createJobAsync.rejected, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.isSuccess = false;
        state.error = (action.payload as string) || "Something went wrong";
      });
  },
});

export const { reset } = createJobSlice.actions;
export default createJobSlice.reducer;
