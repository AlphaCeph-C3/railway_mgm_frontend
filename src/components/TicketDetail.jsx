import React from 'react';
import { Link } from 'react-router-dom';

const TicketDetail = ({ item }) => {
  return (
    <div className="w-[250px] text-white p-4 lg:mr-2 rounded-md m-2 bg-[#333]">
      <h1 className="text-2xl hover:text-blue-400">
        <Link to={'/myTickets'}>Train No: {item.Train_No}</Link>
      </h1>
      <p className="mt-3">Ticket ID: {item['Booking_ID']}</p>
      <div className="mt-3">
        <p className="text-[16px] italic">Name: {item['Passenger_Name']}</p>
        {/* <p className="text-[12px]">Departure: {item['Arrival_Time']}</p> */}
      </div>
      <div className="mt-3">
        <p className="text-[16px] italic">
          Date Of Booking: {item['Date_Of_Booking']}
        </p>
        {/* <p className="text-[12px]">Arrival: {item['Departure_Time']}</p> */}
      </div>
    </div>
  );
};

export default TicketDetail;
