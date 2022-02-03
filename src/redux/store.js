import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from './cinema/cinemaSlice'

export const store = configureStore({
    reducer: {
        cinema: moviesReducer
    }
})