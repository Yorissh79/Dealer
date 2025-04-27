import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductTrunk = createAsyncThunk("/products/admin/get", async () => {
    const res = await axios.get("https://northwind.vercel.app/api/categories")
    return res.data
})

export const postProductThrunk = createAsyncThunk("/products/admin/post", async (data) => {
    await axios.post("https://northwind.vercel.app/api/categories", data)
    return data
})

export const deleteProductThrunk = createAsyncThunk("/products/admin/delete", async (id) => {
    await axios.delete(`https://northwind.vercel.app/api/categories/${id}`)
    return id
})

export const putProductThrunk = createAsyncThunk("/products/admin/put", async ({id, data}) => {
    await axios.put(`https://northwind.vercel.app/api/categories/${id}`, data)
    return id, data
})

const admincrudSlice = createSlice({
    name : "admincrud",
    initialState: {

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder

        .addCase(getProductTrunk.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })

        .addCase(getProductTrunk.pending, (state) => {
            state.loading = true
        })

        .addCase(getProductTrunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.name
        })

        .addCase(postProductThrunk.fulfilled, (state) => {
            state.loading = false
        })

        .addCase(deleteProductThrunk.fulfilled, (state, action) => {
            state.loading = false
            state.data.splice(state.data.indexOf(state.data.filter((item) => item.id == action.payload)), 1)
        })

        .addCase(putProductThrunk.fulfilled, (state, action) => {
            state.loading = false
            state.console = action.payload
            // state.data.splice(state.data.indexOf(state.data.filter((item) => item.id == action.payload)), 1)
        })
    }
})

export default admincrudSlice.reducer