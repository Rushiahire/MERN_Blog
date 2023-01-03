import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./root_reducer";

const Store = configureStore({
    reducer : RootReducer
})

export default Store;