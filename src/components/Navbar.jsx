import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="h-[60px] bg-[#333] relative rounded-md">
      <div className="max-w-[1100px] mx-auto  px-2.5 flex justify-between items-center h-full">
        <div className="logo">
          <h1 className="text-3xl text-white font-bold">
            <NavLink to="/">Rail Proffer</NavLink>
          </h1>
        </div>
        <div
          className="cursor-pointer text-white md:hidden"
          onClick={handleShowNavbar}
        >
          <HiMenu fontSize={'40px'} />
        </div>
        <div
          className={`absolute right-0 top-[60px] bg-[#333] w-[200px] md:pt-1.5 md:w-[320px] h-[0] md:h-[60px] transition-all ease-in duration-300 overflow-hidden md:static md:right-[50%] md:top-[50%] ${
            showNavbar && 'active'
          }`}
        >
          <ul className="flex text-white flex-col md:flex-row md:justify-center justify-between items-center list-none md:space-x-4 space-y-2 md:space-y-0 px-10 pt-3">
            <li>
              <NavLink to="/bookTicket">BookTicket</NavLink>
            </li>
            <li>
              <NavLink to="/myTickets">Reservations</NavLink>
            </li>
            <li>
              <NavLink to="/cancelTicket">Cancel</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
