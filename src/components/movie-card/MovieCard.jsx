import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';
import { LoadingImage } from '../loading/loading';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const MovieCard = props => {

    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path ?? item.backdrop_path);

    return (
        <Link to={link}>
            <div className="movie-card" >
                <LoadingImage src={bg} alt={bg} styles={{objectFit: 'cover', objectPosition: 'center', height: '100%', width: '100%'}}/>
                <Button className="btn-outline">
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
}

export default MovieCard;
