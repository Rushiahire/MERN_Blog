import { configureStore } from "@reduxjs/toolkit";
import  auth  from "./slices/login";

export const Store = configureStore({
    reducer : auth
})
