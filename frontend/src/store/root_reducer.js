import { combineReducers } from "@reduxjs/toolkit";
import {AuthSlice} from "./slices/auth";

const RootReducer = combineReducers({
    AuthSlice:AuthSlice
})

export default RootReducer;