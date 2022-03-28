import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow} from "../../redux/cinema/cinemaSlice";
import './MovieDetails.css'
import StarIcon from '@mui/icons-material/Star';
import PageLoader from "../PageLoader/PageLoader";

const MovieDetails = () => {
    const {imdbID} = useParams()
    const dispatch = useDispatch()
    const data = useSelector(getSelectedMovieOrShow)
    console.log(data)
    useEffect(() => {
        dispatch(fetchAsyncDetail(imdbID))
        return () => {
            dispatch(removeSelectedMovieOrShow())
        }
    }, [dispatch, imdbID])
    return (
        <div className={'details-page'}>

            <div className={'wrapper'}>
                {Object.keys(data).length === 0 ? (<PageLoader/>) : (
                    <div className="movie-details">
                        <div className={'movie-entity'}>
                            <div className={'movie-poster'}>
                                <img src={data.Poster} alt=""/>
                            </div>
                            <div className={'movie-entityAbout'}>
                                <div className={'movie-entityHeader'}>
                                    <div className="movie-title">
                                        <h4>{data.Title}</h4>
                                    </div>
                                    <div className="movie-year">
                                        <h4>{data.Year}</h4>

                                    </div>
                                    <div className="imdb-rating">
                                        <p>IMDB Rating: <span>{data.imdbRating}<StarIcon
                                            style={{position: "relative", bottom: 2}}/></span></p>
                                    </div>
                                    <div className="duration">
                                        <p>Duration: <span>{data.Runtime}</span></p>
                                    </div>
                                </div>
                                <div className={'movie-entityDetails'}>
                                    <div className="details">
                                        <p>Genre: <span>{data.Genre}</span></p>
                                    </div>
                                    <div className="details">
                                        <p>Country: <span>{data.Country}</span></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={'movie-description'}>
                            <div className="movie-descriptionDetails">
                                <div className="details">
                                    <h4>Director: <span>{data.Director}</span></h4>
                                </div>
                                <div className="details">
                                    <h4>Actors: <span>{data.Actors}</span></h4>
                                </div>
                            </div>
                            <div className="movie-descriptionPlot">
                                <p>{data.Plot}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default MovieDetails;