import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBoardList as reqFetchBoardList } from "~/lib/apis/board";

const initialState = {
  boards: [],
  loading: "idle",
};

const fetchBoardList = createAsyncThunk(
  "boards/fetchBoardList",
  async (data, thunkAPI) => {
    console.log("data", data);
    const response = await reqFetchBoardList();
    return response.data;
  }
);

const boardSlice = createSlice({
  name: "boards",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoardList.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.boards = action.payload;
    });
    builder
      .addCase(fetchBoardList.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(fetchBoardList.rejected, (state, action) => {
        state.loading = "rejected";
      });
  },
});

export { fetchBoardList };
export default boardSlice.reducer;
