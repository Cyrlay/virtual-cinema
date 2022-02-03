import React, {useEffect} from 'react';
import MovieList from "../MovieList/MovieList";
import {useDispatch} from "react-redux";
import {fetchAsyncMovies} from "../../redux/cinema/cinemaSlice";

const MoviesPage = () => {
    const dispatch = useDispatch()
    const movieText = 'Zombie'
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText))}
        ,[dispatch])
    return (
        <MovieList/>
    );
};

export default MoviesPage;