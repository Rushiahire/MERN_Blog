import { createSlice } from "@reduxjs/toolkit";


export const AuthSlice = createSlice({
    name:"auth",
    initialState : { isLoggedIn: false },
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            localStorage.removeItem("userId")
            state.isLoggedIn = false;
        }
    }
});




const { login , logout } = AuthSlice.actions;
export const authReducers = AuthSlice.reducer;
