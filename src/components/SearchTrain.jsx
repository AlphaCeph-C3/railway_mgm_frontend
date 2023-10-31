import React, { useState, useEffect } from 'react';
import api from '../api';

import { AiOutlineSearch } from 'react-icons/ai';
import TrainDetail from './TrainDetail';

const SearchTrain = () => {
  const initialSearchData = {
    from_station: '',
    destination: '',
    date_of_journey: '',
  };
  const [searchData, setSearchData] = useState(initialSearchData);
  const [data, setData] = useState(null);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearchData({ ...searchData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/availableTrains?at=howareyou', searchData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = res;
    setData(data);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="h-[500px] w-[600px]  my-[50px] rounded-lg flex flex-col justify-center items-center bg-[#333]">
          <div>
            <h1 className="text-3xl text-white italic font-bold">
              Search Train
            </h1>
          </div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col md:w-[400px]"
          >
            <div className="m-2 flex flex-col">
              <label htmlFor="from" className="text-white">
                From:
              </label>
              <input
                type="text"
                id="from"
                autoFocus
                placeholder="From code"
                value={searchData.from_station}
                required
                className="rounded-sm p-2"
                name="from_station"
                onChange={handleChange}
              />
            </div>
            <div className="m-2 flex flex-col">
              <label htmlFor="destination" className="text-white">
                Destination:
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                placeholder="Destination Code"
                value={searchData.destination}
                className="rounded-sm p-2"
                required
                onChange={handleChange}
              />
            </div>
            <div className="m-2 flex flex-col">
              <label htmlFor="date_of_journey" className="text-white">
                Date Of Journey:
              </label>
              <input
                type="date"
                id="date_of_journey"
                name="date_of_journey"
                className="rounded-sm p-2"
                required
                value={searchData.date_of_journey}
                placeholder="DD/MM/YYYY"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="m-6 p-2 flex justify-around items-center w-[35%] mx-auto text-[#afafa7] border-[1px] rounded-md"
            >
              <AiOutlineSearch fontSize="24px" />
              <p className="text-2xl">Search</p>
            </button>
          </form>
        </div>
      </div>
      {data?.length === 0 ? (
        <div className="w-full bg-[#333] p-3 rounded-md mb-5">
          <h1 className="text-2xl text-white text-center ">
            No Trains Available
          </h1>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="w-[90%] flex flex-col mx-auto sm:flex-row sm:flex-wrap">
            {data?.map((item, index) => (
              <TrainDetail key={index} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchTrain;
