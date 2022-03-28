import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import SeriesPage from "./components/SeriesPage/SeriesPage";
import MoviesPage from "./components/MoviesPage/MoviesPage";

function App() {
    return (
        <div className={'App'}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/movies'} element={<MoviesPage/>}/>
                    <Route path={'/series'} element={<SeriesPage/>}/>
                    <Route path={'/movie/:imdbID'} element={<MovieDetails/>}/>
                    <Route path={'*'} element={<PageNotFound/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
