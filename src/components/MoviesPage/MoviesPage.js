import React, {useEffect} from 'react';
import MovieList from "../MovieList/MovieList";
import {useDispatch} from "react-redux";
import {fetchAsyncMovies} from "../../redux/cinema/cinemaSlice";
import './MoviesPage.css'

const MoviesPage = () => {
    const dispatch = useDispatch()
    const movieText = 'Zombie'
    useEffect(() => {
            dispatch(fetchAsyncMovies(movieText))
        }
        , [dispatch])
    return (
        <div className={'movies-page'}>
            <MovieList/>
        </div>
    );
};

export default MoviesPage;