import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      useEffect(() => {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }, [action.payload]);
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
