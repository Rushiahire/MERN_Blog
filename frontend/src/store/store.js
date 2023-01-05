import { configureStore } from "@reduxjs/toolkit";
import { auth } from "./slices/auth";

export const Store = configureStore({
    reducer : auth
})
