import React from 'react';
import { Link } from 'react-router-dom';

const TrainDetail = ({ item }) => {
  return (
    <div className="w-[250px] text-white p-4 lg:mr-2 rounded-md m-2 bg-[#333]">
      <h1 className="text-2xl hover:text-blue-400">
        <Link to={'/myTickets'}>Train No: {item.Train_No}</Link>
      </h1>
      <div className="mt-3">
        <p className="text-[16px] italic">
          From: {item['Source_Station_Name']} ({item['Source_Station_Code']})
        </p>
        {/* <p className="text-[12px]">Departure: {item['Arrival_Time']}</p> */}
      </div>
      <div className="mt-3">
        <p className="text-[16px] italic">
          To: {item['Destination_Station_Name']} (
          {item['Destination_Station_Code']})
        </p>
        {/* <p className="text-[12px]">Arrival: {item['Departure_Time']}</p> */}
      </div>
    </div>
  );
};

export default TrainDetail;
