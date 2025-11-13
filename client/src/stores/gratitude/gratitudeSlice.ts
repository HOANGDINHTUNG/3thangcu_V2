import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { IGratitudeNote } from "../../interface/GratitudeNote";

export const fetchTreeNotes = createAsyncThunk<IGratitudeNote[]>(
  "gratitude/fetchTreeNotes",
  async () => {
    const res = await fetch("http://localhost:3000/gratitudeTree");
    if (!res.ok) throw new Error("Failed to fetch gratitude tree notes");
    return (await res.json()) as IGratitudeNote[];
  }
);

interface GratitudeState {
  notes: IGratitudeNote[];
  loading: boolean;
  error?: string;
}

const initialState: GratitudeState = {
  notes: [],
  loading: false,
};

const gratitudeSlice = createSlice({
  name: "gratitude",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTreeNotes.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchTreeNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
      })
      .addCase(fetchTreeNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default gratitudeSlice.reducer;
