import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAutoComplete = createAsyncThunk(
  "/post/autoComplete",
  async ({ query }) => {
    const options = {
      method: "GET",
      url: "https://crunchbase-crunchbase-v1.p.rapidapi.com/autocompletes",
      params: {
        query,
      },
      headers: {
        "X-RapidAPI-Key": "721955d12emsh12900079c7be162p1e7203jsnb805721c4d3d",
        "X-RapidAPI-Host": "crunchbase-crunchbase-v1.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data;
  }
);

const initialState = {
  status: "idle",
  data: [],
  error: null,
};

const createReducer = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAutoComplete.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(getAutoComplete.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })

      .addCase(getAutoComplete.rejected, (state) => {
        state.status = "failed";
        state.error = "error";
      });
  },
});

export default createReducer;
