import { configureStore } from "@reduxjs/toolkit";
import slice from "./createSlice"
import productSlice from "./productSlice";
const store = configureStore({
    reducer: {
        cart: slice,
        product: productSlice,
    },

})

export default store