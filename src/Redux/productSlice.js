// Note: we are performing how to fetch data from APiI By using redux,
// by using redux api call only should be reason one if you want to data mutiple pages then you should for redux API.

import { createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"


export const STATUES = Object.freeze({
    IDLE: "idle",
    ERROR: 'error',
    LOADING: "loading"
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUES.IDLE

    },
    reducers: {
        setProduct: (state, action) => {
            state.data = action.payload
        },
        setStatus: (state, action) => {
            state.status = action.payload
        }
    }
})
export const { setProduct, setStatus } = productSlice.actions
export default productSlice.reducer


// Thunks
export function fetchProducts() {
    return async function fetchProductThunks(dispatch, getState) {
        dispatch(setStatus(STATUES.LOADING))
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            dispatch(setProduct(data))
            dispatch(setStatus(STATUES.IDLE))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUES.ERROR))

        }
    }
}