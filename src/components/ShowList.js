// src/components/ShowList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShowList.css';

const ShowList = ({ shows, onShowClick }) => {
    const navigate = useNavigate();

    const handleShowClick = (showId) => {
        navigate(`/shows/${showId}`);
    };

    return (
        <div className="show-list-container">
            {shows.map((show) => (
                <div key={show.id} className="show-item">
                    {show.image && <img src={show.image} alt={show.name} />}
                    <div className="show-details">
                        <strong>{show.name}{' '}</strong>
                        <button onClick={() => handleShowClick(show.id)}>View Details</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShowList;
