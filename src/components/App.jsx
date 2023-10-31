import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import SearchTrain from './SearchTrain';
import CancelTicket from './CancelTicket';
import Bookings from './Bookings';
import BookTicket from './BookTicket';

const App = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Navigate to="/searchTrains" replace="True" />}
          />
          <Route path="searchTrains" element={<SearchTrain />} />
          <Route path="cancelTicket" element={<CancelTicket />} />
          <Route path="myTickets" element={<Bookings />} />
          <Route path="bookTicket" element={<BookTicket />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
