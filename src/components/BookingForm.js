// src/components/BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ showName }) => {
    const [userName, setUserName] = useState('');

    const handleBookTicket = () => {
        if (!userName.trim()) {
            alert('Please enter your name before booking.');
            return;
        }

        // Save data to local storage
        const bookingData = {
            showName,
            userName,
            bookingDate: new Date().toLocaleDateString()
        };

        // Save data to local storage
        const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings.push(bookingData);
        localStorage.setItem('bookings', JSON.stringify(bookings));

        alert('Booking successful!');

        // Clear the form
        setUserName('');
    };

    return (
        <div className="booking-form-container">
            <h2>Booking</h2>
            <p>Show: {showName}</p>
            <label>
                Your Name:
                <input className="bookingForm-input" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </label>
            <button onClick={handleBookTicket}>Book Now</button>
        </div>
    );
};

export default BookingForm;
