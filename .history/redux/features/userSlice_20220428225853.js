import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const userSlice = createSlice({
  name: "user",
  initialState: {
  isAuth:false,
  error:""
  },
  reducers: {
    loginSuccess:(state, {payload}) => {

state.isAuth= true


    },
    loginFail:(state, {payload}) => {



    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
