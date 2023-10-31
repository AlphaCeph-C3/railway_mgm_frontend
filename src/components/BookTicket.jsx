import React, { useState } from 'react';
import { FaTicketAlt } from 'react-icons/fa';
import api from '../api';

const coachType = ['Sleeper', 'AC-1', 'AC-2', 'AC-3'];
const BookTicket = () => {
  const [message, setMessage] = useState(null);
  const initialTicketData = {
    name: '',
    phone_no: '',
    adhaar_no: '',
    train_no: '',
    coach_type: '',
  };
  const [ticketData, setTicketData] = useState(initialTicketData);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTicketData({ ...ticketData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/bookTicket', ticketData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = res;
    setMessage(data['message']);
    setTicketData(initialTicketData);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="h-[650px] w-[600px]  my-[50px] rounded-lg flex flex-col justify-center items-center bg-[#333]">
          {message && (
            <h1
              className={`text-2xl p-4 my-2 rounded-md bg-${
                message === 'Success' ? 'green' : 'red'
              }-400 text-white`}
            >
              {message === 'Success'
                ? 'Your ticket has been booked'
                : 'Error occurred while booking your ticket'}
            </h1>
          )}
          <div>
            <h1 className="text-3xl text-white italic font-bold">
              Book Ticket
            </h1>
          </div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col md:w-[400px]"
          >
            <div className="m-2 flex flex-col">
              <label htmlFor="name" className="text-white">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="rounded-sm p-2"
                autoFocus
                name="name"
                placeholder="First Name"
                value={ticketData.name}
                required
                onChange={handleChange}
              />
            </div>
            <div className="m-2 flex flex-col">
              <label htmlFor="train_no" className="text-white">
                Train No:
              </label>
              <input
                type="text"
                id="train_no"
                className="rounded-sm p-2"
                name="train_no"
                value={ticketData.train_no}
                placeholder="Train number"
                required
                onChange={handleChange}
              />
            </div>

            <div className="m-2 flex flex-col">
              <label htmlFor="phone" className="text-white">
                Phone No:
              </label>
              <input
                type="tel"
                id="phone"
                value={ticketData.phone_no}
                pattern="[0-9]{10}"
                name="phone_no"
                placeholder="10-digit phone number"
                required
                className="rounded-sm p-2"
                onChange={handleChange}
              />
            </div>
            <div className="m-2 flex flex-col">
              <label htmlFor="adhaar_no" className="text-white">
                Adhaar No:
              </label>
              <input
                type="text"
                id="adhaar_no"
                value={ticketData.adhaar_no}
                pattern="[0-9]{12}"
                name="adhaar_no"
                placeholder="12-digit adhaar number"
                required
                className="rounded-sm p-2"
                onChange={handleChange}
              />
            </div>
            <div className="m-2 flex flex-col">
              <label htmlFor="coach_type" className="text-white">
                Coach:
              </label>
              <select
                name="coach_type"
                value={ticketData.coach_type}
                id="coach_type"
                className="rounded-sm p-2"
                required
                onChange={handleChange}
              >
                <option value="" selected disabled>
                  Choose Coach
                </option>
                {coachType.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <button
              type="submit"
              className="m-6 p-2 flex justify-around items-center w-[35%] mx-auto text-[#afafa7] border-[1px] rounded-md"
            >
              <FaTicketAlt fontSize="24px" className="text-green-600" />
              <p className="text-2xl">Book</p>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookTicket;
