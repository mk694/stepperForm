import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const userSlice = createSlice({
  name: "user",
  initialState: {
  isLoading: false,
  isAuth:false,
  error:""
  },
  reducers: {
    login: (state, action) => {



    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
