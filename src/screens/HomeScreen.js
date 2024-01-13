// HomeScreen.js
import React, { useState } from 'react';
import ShowList from '../components/ShowList';
import { searchShows } from '../services/api';
import './HomeScreen.css';

const HomeScreen = ({ navigate }) => {
    const [query, setQuery] = useState('');
    const [shows, setShows] = useState([]);

    const handleSearch = async () => {
        try {
            const data = await searchShows(query);
            setShows(data);
        } catch (error) {
            console.error('Error searching shows:', error);
        }
    };

    const handleShowClick = (showId) => {
        navigate(`/shows/${showId}`);
    };

    return (
        <div className="homeScreenmain">
            <h1 id="showlist">Shows List</h1>
            <div className="inputandsearch">
                <input type="text" placeholder="Search for Movies, Shows and Events" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
                <ShowList shows={shows} onShowClick={handleShowClick} />
            </div>
        </div>
    );
};

export default HomeScreen;
