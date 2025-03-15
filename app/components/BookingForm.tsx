'use client'
import React, { useState } from 'react';

function BookingForm() {
    const [departureDate, setDepartureDate] = useState('');
    const [destination, setDestination] = useState('');
    const [seatClass, setSeatClass] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = { departureDate, destination, seatClass };
        console.log('Form Data:', data);

        const response = await fetch('/api/BookingAPI', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log('API Response:', result);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                placeholder="Departure Date"
                required
            />
            <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Destination"
                required
            />
            <select
                value={seatClass}
                onChange={(e) => setSeatClass(e.target.value)}
                required
            >
                <option value="" disabled>Select Seat Class</option>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
            </select>

            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Book Now
            </button>
        </form>
    );
}

export default BookingForm;
