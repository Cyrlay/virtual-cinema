import React from 'react';
import {useSelector} from "react-redux";
import {getAllShows} from "../../redux/cinema/cinemaSlice";
import MovieCard from "../MovieCard/MovieCard";
import './SeriesList.css'
import PageLoader from "../PageLoader/PageLoader";

const SeriesList = () => {
    const shows = useSelector(getAllShows)
    let renderShows = shows.Response === 'True' ?
        shows.Search.map((show, id) => {
            return <MovieCard
                key={id}
                data={show}
            />
        })
        : <div className={'error'}><h1>{shows.Error}</h1></div>
    return (
        Object.keys(shows).length === 0 ? (<PageLoader/>) : (
            <div className={'wrapper'}>
                <div className={'show-list'}>
                    <h2>Shows</h2>
                    <div className={'show-container'}>
                        {renderShows}
                    </div>
                </div>
            </div>
        ))
}

export default SeriesList