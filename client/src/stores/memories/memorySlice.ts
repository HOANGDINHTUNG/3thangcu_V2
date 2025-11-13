import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { IMemory } from "../../interface/Memory";

export const fetchMemories = createAsyncThunk<IMemory[]>(
  "memories/fetchAll",
  async () => {
    const res = await fetch("http://localhost:4000/memories");
    if (!res.ok) throw new Error("Failed to fetch memories");
    return (await res.json()) as IMemory[];
  }
);

interface MemoryState {
  items: IMemory[];
  loading: boolean;
  error?: string;
}

const initialState: MemoryState = {
  items: [],
  loading: false,
};

const memorySlice = createSlice({
  name: "memories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMemories.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchMemories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMemories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default memorySlice.reducer;
