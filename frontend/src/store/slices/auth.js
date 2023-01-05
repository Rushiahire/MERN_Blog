import { createSlice ,configureStore } from "@reduxjs/toolkit";


const AuthSlice = createSlice({
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



export const authActions = AuthSlice.actions;
export const auth =  AuthSlice.reducer;

// export const Store = configureStore({
//     reducer: AuthSlice.reducer,
//   });