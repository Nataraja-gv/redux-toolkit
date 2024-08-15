import {createSlice} from "@reduxjs/toolkit"

export const inputSlice=createSlice({
    name:"input",
    initialState:{
        value:""
    },
    reducers:{
        inputChanage:(state,action)=>{
            state.value = action.payload
        }
    }
})



export const {inputChanage} =inputSlice.actions
export default inputSlice.reducer