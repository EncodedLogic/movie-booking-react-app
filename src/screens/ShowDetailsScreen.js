// src/screens/ShowDetailsScreen.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowDetails } from '../services/api';
import ShowDetails from '../components/ShowDetails';
import BookingForm from '../components/BookingForm';

const ShowDetailsScreen = () => {
    const { showId } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        const fetchShowDetails = async () => {
            try {
                const data = await getShowDetails(showId);
                setShow(data);
            } catch (error) {
                console.error('Error fetching show details:', error);
            }
        };

        // Check if showId is not null or undefined before fetching
        if (showId) {
            fetchShowDetails();
        }

    }, [showId]);

    if (!show) {
        return <p>Loading...</p>;
    }

    // console.log('Show Object:', show);

    const handleBookTicket = (showName) => {
        console.log(`Book ticket for ${showName}`);
    };

    return (
        <div>
            <ShowDetails show={show} onBookTicket={handleBookTicket} />
            <BookingForm showName={show.name} onBookTicket={handleBookTicket} />
        </div>
    );
};

export default ShowDetailsScreen;
