import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null || JSON.parse(localStorage.getItem("user")),
  },
  reducers: {
    login: (state, action) => {
      useEffect(() => {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }, [action.payload]);
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice;
