import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchAsyncShows} from "../../redux/cinema/cinemaSlice";
import SeriesList from "../Series/SeriesList";
import './SeriesPage.css'

const SeriesPage = () => {
    const dispatch = useDispatch()
    const seriesText = 'Zombie'
    useEffect(() => {
        dispatch(fetchAsyncShows(seriesText))
    }, [dispatch])
    return (
        <div className={'series-page'}>
            <SeriesList/>
        </div>
    );
};

export default SeriesPage;