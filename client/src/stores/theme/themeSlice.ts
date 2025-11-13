import { createSlice } from "@reduxjs/toolkit";

export type ThemeMode = "light" | "dark";

interface ThemeState {
  mode: ThemeMode;
}

const getInitialMode = (): ThemeMode => {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("theme-mode") as ThemeMode | null;
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const initialState: ThemeState = {
  mode: getInitialMode(),
};

const applyModeToDocument = (mode: ThemeMode) => {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (mode === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
};

applyModeToDocument(initialState.mode);

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme-mode", state.mode);
      applyModeToDocument(state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
