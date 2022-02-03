import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api, {key} from "../../api/api";

export const fetchAsyncMovies = createAsyncThunk('cinemaSlice/fetchAsyncMovies', async (term) => {
    const page = 1
    const response = await api.get(`?apikey=${key}&s=${term}&type=movie&page=${page}`)
    return response.data
})

export const fetchAsyncShows = createAsyncThunk('cinemaSlice/fetchAsyncShows', async (term) => {
    const page = 1
    const response = await api.get(`?apikey=${key}&s=${term}&type=series&page=${page}`)
    return response.data
})

export const fetchAsyncDetail = createAsyncThunk('cinemaSlice/fetchAsyncDetail', async (id) => {
    const response = await api.get(`?apikey=${key}&i=${id}&Plot=full`)
    return response.data
})

const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {}
}

const cinemaSlice = createSlice({
    name: 'cinema',
    initialState,
    reducers: {
        /*addShows: (state, {payload}) => {
            state.shows = payload
        },*/
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending')
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log('Fetch Successed')
            return {...state, movies: payload}
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log('Fetch Successed')
            return {...state, shows: payload}
        },
        [fetchAsyncDetail.fulfilled]: (state, {payload}) => {
            console.log('Fetch Successed')
            return {...state, selectMovieOrShow: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Call Rejected')
        }
    }
})

export const getAllMovies = (state) => {
    return state.cinema.movies;
}
export const getAllShows = (state) => {
    return state.cinema.shows;
}
export const getSelectedMovieOrShow = (state) => {
    return state.cinema.selectMovieOrShow;
}
/*export const {addMovies} = cinemaSlice.actions*/
export const {removeSelectedMovieOrShow} = cinemaSlice.actions
export default cinemaSlice.reducer