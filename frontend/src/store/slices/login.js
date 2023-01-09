import { createSlice ,configureStore } from "@reduxjs/toolkit";
import getUserLoginApi from "../../api/login";


const AuthSlice = createSlice({
    name:"auth",
    initialState : { isLoggedIn: false },
    reducers: {
        LoginSuccess(state) {
            state.isLoggedIn = true;
        },
        Logout(state) {
            // localStorage.removeItem("userId")
            state.isLoggedIn = false;
        }
    }
});

export const LoginUserApi = (request) => async(dispatch)=> {
    try {
        const res = await getUserLoginApi(request)
        console.log("slice api",res)
        if(res === "Login successfully") {
            dispatch(LoginSuccess(res.data))
          }
    }catch (err) {
        console.log(err)
    }
}; 


const { LoginSuccess } = AuthSlice.actions;
export default AuthSlice.reducer;

// export const Store = configureStore({
//     reducer: AuthSlice.reducer,
// });