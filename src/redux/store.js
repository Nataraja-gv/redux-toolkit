
import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authslice"
import countReducer from "../features/count/countslice"
import inputReducer from "../features/userinput/inputslice"
export const store = configureStore({
    reducer: {
       auth: authReducer,
       counter:countReducer,
       input:inputReducer
    }
})