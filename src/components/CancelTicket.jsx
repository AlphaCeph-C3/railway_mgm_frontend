import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import api from '../api';

const CancelTicket = () => {
  const initialTicketData = {
    ticket_id: '',
    phone_no: '',
  };
  const [ticketData, setTicketData] = useState(initialTicketData);
  const [message, setMessage] = useState(null);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTicketData({ ...ticketData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/cancelTicket', ticketData, {
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
        <div className="h-[400px] w-[600px]  my-[50px] rounded-lg flex flex-col justify-center items-center bg-[#333]">
          {message && (
            <h1
              className={`text-2xl p-4 my-2 rounded-md ${
                message === 'Success' ? 'bg-green-400' : 'bg-red-400'
              } text-white`}
            >
              {message === 'Success'
                ? 'Your ticket has been canceled'
                : 'Error occurred while canceling your ticket'}
            </h1>
          )}
          <div>
            <h1 className="text-3xl text-white italic font-bold">
              Cancel Ticket
            </h1>
          </div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col md:w-[400px]"
          >
            <div className="m-2 flex flex-col">
              <label htmlFor="ticket_id" className="text-white">
                Ticket ID:
              </label>
              <input
                type="text"
                id="ticket_id"
                placeholder="Ticket ID number"
                autoFocus
                value={ticketData.ticket_id}
                className="rounded-sm p-2"
                name="ticket_id"
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
                pattern="[0-9]{10}"
                value={ticketData.phone_no}
                name="phone_no"
                placeholder="10-digit phone number"
                required
                className="rounded-sm p-2"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="m-6 p-2 flex justify-around items-center w-[55%] mx-auto text-[#afafa7] border-[1px] rounded-md"
            >
              <RxCross2 fontSize="24px" className="text-red-500 font-bold" />
              <p className="text-2xl">Cancel Ticket</p>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CancelTicket;
