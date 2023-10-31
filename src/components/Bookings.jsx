import React, { useState } from 'react';
import { ImTicket } from 'react-icons/im';
import api from '../api';
import TicketDetail from './TicketDetail';

const Bookings = () => {
  const initialTicketData = {
    name: '',
    phone_no: '',
  };
  const [ticketData, setTicketData] = useState(initialTicketData);
  const [reservations, setReservations] = useState(null);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTicketData({ ...ticketData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/myTickets', ticketData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = res;
    setReservations(data);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="h-[400px] w-[600px]  my-[50px] rounded-lg flex flex-col justify-center items-center bg-[#333]">
          <div>
            <h1 className="text-3xl text-white italic font-bold">
              Show Reservations
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
                value={ticketData.name}
                className="rounded-sm p-2"
                name="name"
                autoFocus
                placeholder="First Name"
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
                title="10-digit Phone number"
                required
                className="rounded-sm p-2"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="m-6 p-2 flex justify-around items-center w-[35%] mx-auto text-[#afafa7] border-[1px] rounded-md"
            >
              <ImTicket fontSize="24px" className="text-green-400" />
              <p className="text-2xl">Search</p>
            </button>
          </form>
        </div>
      </div>
      {reservations?.length === 0 ? (
        <div className="w-full bg-[#333] p-3 rounded-md mb-5">
          <h1 className="text-2xl text-white text-center ">
            No Reservations Available
          </h1>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="w-[90%] flex flex-col mx-auto sm:flex-row sm:flex-wrap">
            {reservations?.map((item, index) => (
              <TicketDetail item={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Bookings;
