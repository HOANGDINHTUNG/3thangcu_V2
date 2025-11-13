import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ITeacher } from "../../interface/Teacher";


export const fetchTeachers = createAsyncThunk<ITeacher[]>(
  "teachers/fetchAll",
  async () => {
    const res = await fetch("http://localhost:3000/teachers");
    if (!res.ok) throw new Error("Failed to fetch teachers");
    return (await res.json()) as ITeacher[];
  }
);

interface TeachersState {
  items: ITeacher[];
  loading: boolean;
  error?: string;
}

const initialState: TeachersState = {
  items: [],
  loading: false,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default teachersSlice.reducer;
