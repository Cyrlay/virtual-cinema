import React, {useEffect} from 'react';
import MovieList from "../MovieList/MovieList";
import './Home.css'
import {useDispatch} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows} from "../../redux/cinema/cinemaSlice";
import SeriesList from "../Series/SeriesList";

const Home = () => {
    const dispatch = useDispatch()
    const movieText = 'Zombie'
    const seriesText = 'Zombie'
    useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(seriesText))
    }, [dispatch])

    return (
        <div className={'home'}>
            <MovieList/>
            <SeriesList/>
        </div>
    );
};

export default Home;