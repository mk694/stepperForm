import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
name:"user",
initialState:{
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
},
reducers:{
    login:(state,action) => {
        state.currentUser
     }
}
})
