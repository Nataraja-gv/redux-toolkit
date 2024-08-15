import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuthticated: false,
    user: null
}


export const authslice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthticated = true,
                state.user = action.payload

        },

        logout: (state) => {
            state.isAuthticated = false,
                state.user = null
        }

    }
})


export const { login, logout } = authslice.actions
export default authslice.reducer