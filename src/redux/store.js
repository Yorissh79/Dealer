import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./reducers/cardSlice"

export const store = configureStore({
    reducer : {
        "card" : cardSlice
    }
})