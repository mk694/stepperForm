import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    error: "",
  },
  reducers: {
    loginSuccess: (state, { payload }) => {
      state.isAuth = true;
    },
    loginFail: (state, { payload }) => {
      state.isAuth = false;
      state.error = action.payload;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
