import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./reducers/cardSlice"
import admincrudSlice from './reducers/admincrudSlice'

export const store = configureStore({
    reducer : {
        "card"      : cardSlice,
        "admincrud" : admincrudSlice
    }
})