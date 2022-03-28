import React from 'react';
import {useSelector} from "react-redux";
import {getAllMovies} from "../../redux/cinema/cinemaSlice";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.css'
import PageLoader from "../PageLoader/PageLoader";

const MovieList = () => {
    const movies = useSelector(getAllMovies)

    let renderMovies = movies.Response === 'True' ?
        movies.Search.map((movie, id) => {
            return <MovieCard
                key={id}
                data={movie}
            />
        })
        : <div className={'error'}><h1>{movies.Error}</h1></div>

    return (
        Object.keys(movies).length === 0 ? (<PageLoader/>) : (
            <div className={'movie-list'}>
                <div className={'wrapper'}>
                    <h2>Movies</h2>
                    <div className={'movie-container'}>
                        {renderMovies}
                    </div>
                </div>
            </div>
        ))
}

export default MovieList;