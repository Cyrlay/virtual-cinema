import React from 'react';
import './PageNotFound.css'
import PageLoader from "../PageLoader/PageLoader";

const PageNotFound = () => {
    return (
        <div className={'page-not-found'}>
            <h1>404 Page not found</h1>
            <PageLoader/>
        </div>
    );
};

export default PageNotFound;