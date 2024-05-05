import { createSlice } from "@reduxjs/toolkit";


const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const loginSlice = createSlice({
    name : 'login',
    initialState : {
        loginData : userInfoFromStorage
    },
    reducers: {
        logIn : (state, action) => {
            state.loginData = action.payload;
        },
        logOut : (state) => {
            state.loginData = null;
        }
    }
})

export const { logIn, logOut} = loginSlice.actions;

export default loginSlice.reducer;