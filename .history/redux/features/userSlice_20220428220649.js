import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
  },
  reducers: {
    login: (state, action) => {
      useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser));
      }, [state.currentUser]);
    },
  },
});
