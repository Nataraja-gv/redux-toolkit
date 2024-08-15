import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    count: 0
}


export const countslice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action) => {

            state.count += action.payload
        },
        decrementByAmount: (state, action) => {

            state.count -= action.payload
        }
    }
});


export const {increment,decrement,incrementByAmount,decrementByAmount} =countslice.actions
export default countslice.reducer