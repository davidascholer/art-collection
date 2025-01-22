import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  themeMode: "light" | "dark";
};

const initialState = {
  themeMode: "light",
} as InitialStateType;

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
    }
  },
});

export const { toggleTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
