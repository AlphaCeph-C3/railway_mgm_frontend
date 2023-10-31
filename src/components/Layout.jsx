import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import train_img from '../assets/Modern_Train_PNG_Clipart-422.png';

const Layout = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="fixed -z-10 top-0 right-0 h-full w-full bg-[#a7a7af]">
        <img
          src={train_img}
          alt="train.png"
          className="bg-[#a7a7af] mt-[200px]"
        />
      </div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
