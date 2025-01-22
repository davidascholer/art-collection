import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  email: string;
  signedIn: boolean;
  accessToken: string;
};

const initialState = {
  email: "",
  signedIn: false,
  accessToken: "",
} as InitialStateType;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.email = action.payload.email;
      state.signedIn = true;
    },
    signOut: (state) => {
      state.signedIn = false;
      state.email = "";
      state.accessToken = "";
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setUserDetails, signOut, setAccessToken } = userSlice.actions;

export default userSlice.reducer;
