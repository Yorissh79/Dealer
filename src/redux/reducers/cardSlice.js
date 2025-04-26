import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThrunk = createAsyncThunk("/products/get", async () => {
    const res = await axios.get("./database.json")
    return res.data
})

const cardSlice = createSlice({
    name : "card",
    initialState: {},
    extraReducers: (builder) => {
        builder

        .addCase(getProductThrunk.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        .addCase(getProductThrunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.name
        })
        .addCase(getProductThrunk.pending, (state) => {
            state.loading = true
        })
    }
})

export default cardSlice.reducer