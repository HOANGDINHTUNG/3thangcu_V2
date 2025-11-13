import { createAsyncThunk, createSlice,type PayloadAction } from "@reduxjs/toolkit";
import type { ITribute } from "../../interface/Tribute";

export const fetchTributes = createAsyncThunk<ITribute[]>(
  "tributes/fetchAll",
  async () => {
    const res = await fetch("http://localhost:3000/tributes");
    if (!res.ok) throw new Error("Failed to fetch tributes");
    return (await res.json()) as ITribute[];
  }
);

export const createTribute = createAsyncThunk<
  ITribute,
  Omit<ITribute, "id" | "createdAt">
>("tributes/create", async (payload) => {
  const res = await fetch("http://localhost:4000/tributes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      createdAt: new Date().toISOString(),
    }),
  });
  if (!res.ok) throw new Error("Failed to create tribute");
  return (await res.json()) as ITribute;
});

interface TributesState {
  items: ITribute[];
  loading: boolean;
  error?: string;
}

const initialState: TributesState = {
  items: [],
  loading: false,
};

const tributesSlice = createSlice({
  name: "tributes",
  initialState,
  reducers: {
    addTributeLocal(state, action: PayloadAction<ITribute>) {
      state.items.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTributes.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchTributes.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      })
      .addCase(fetchTributes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTribute.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      });
  },
});

export const { addTributeLocal } = tributesSlice.actions;
export default tributesSlice.reducer;
