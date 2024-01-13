// src/components/ShowDetails.js
import React from 'react';
import './ShowDetails.css';

const ShowDetails = ({ show, onBookTicket }) => {
    const handleBookTicket = () => {
        //  console.log('Button clicked in ShowDetails');
        onBookTicket(show.name);
    };
    return (
        <div>
            <h2>{show.name}</h2>
            <p>{show.summary}</p>
            <button onClick={handleBookTicket}>Book Ticket</button>
        </div >
    );
};

export default ShowDetails;
