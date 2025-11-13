import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ITimelineItem } from "../../interface/TimelineItem";

export const fetchTimeline = createAsyncThunk<ITimelineItem[]>(
  "timeline/fetchAll",
  async () => {
    const res = await fetch("http://localhost:3000/timeline");
    if (!res.ok) throw new Error("Failed to fetch timeline");
    return (await res.json()) as ITimelineItem[];
  }
);

interface TimelineState {
  items: ITimelineItem[];
  loading: boolean;
  error?: string;
}

const initialState: TimelineState = {
  items: [],
  loading: false,
};

const timelineSlice = createSlice({
  name: "timeline",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimeline.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchTimeline.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTimeline.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default timelineSlice.reducer;
