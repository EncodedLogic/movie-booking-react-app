// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ShowDetailsScreen from './screens/ShowDetailsScreen';
import './App.css';
import { getShowDetails } from './services/api';

function App() {
  const [featuredShow, setFeaturedShow] = useState(null);

  useEffect(() => {
    const fetchFeaturedShow = async () => {
      try {
        let showId;
        const data = await getShowDetails(showId);
        setFeaturedShow(data);
      } catch (error) {
        console.error('Error fetching featured show details:', error);
      }
    };

    fetchFeaturedShow();
  }, []);

  return (
    <Router>
      <header>
        <h1>TV Shows App</h1>
        {/* <nav>
          <a href="/">Home</a>
        </nav> */}
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeScreen featuredShow={featuredShow} />} />
          <Route path="/shows/:showId" element={<ShowDetailsScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
