import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
  },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;

      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
