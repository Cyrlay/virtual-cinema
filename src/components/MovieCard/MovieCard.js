import React from 'react';
import './MovieCard.css'
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
    const {data} = props
    return (
        <Col xl={2} md={3} sm={6} xs={12} className={'card-item'}>
            <Link to={`/movie/${data.imdbID}`}
                  style={{textDecoration: "none", color: "black"}}>
                <div className="card-inner">
                    <div className="card-top">
                        <img src={data.Poster} alt={data.Title}/>
                    </div>
                    <div className="card-bottom">
                        <div className="card-info">
                            <h4>{data.Title}</h4>
                            <p>{data.Year}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </Col>
    )
}

export default MovieCard;