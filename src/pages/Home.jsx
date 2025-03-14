import React from 'react';
import Navbar from './Navbar';
import { WiDirectionRight } from "react-icons/wi";

const Home = () => {
  return (
    <div>
      <Navbar  />
      <div className='w-screen flex  mt-10'>
        <div className="left px-19 w-7/10">
          <h4 className='text-white mt-28'>Community-Powered Solutions</h4>
          <h1 className='text-white text-5xl font-extrabold mt-4'>Turn Local Challenges into <bold className="bold">Community Action </bold></h1>
          <h2 className='text-xl text-zinc-400 mt-4'>Report issues in your community, connect with local authorities, NGOs, and businesses to solve problems faster and more efficiently.</h2>
          <div className="button flex justify-center">
            <button className='bg-green-700 text-white hover:bg-white hover:text-green-900 font-extrabold py-2 px-5 mt-4 rounded-[15px] flex items-center'>
              Get Started
              <WiDirectionRight className='ml-1 text-2xl' />
            </button>
          </div>
        </div>
        <div className="right w-[30%] pr-12">
          <img className='glow mt-22 max-h-64 w-64  w-full object-cover rounded-[20px]' src='https://images4.alphacoders.com/215/215948.jpg' />
        </div>
      </div>

        <div className="features w-full flex flex-col justify-center ">
            <h1 className='h4 bg-white text-md inline-block mt-40 mx-auto text-center rounded-[18px] px-3 py-1'>Features</h1>
            <h4 className='text-5xl mx-auto text-center text-white font-extrabold mt-10 '>Empowering Communities Together.</h4>
            <p className='text-zinc-400 mx-auto text-center text-xl mt-3'>Our platform provides all the tools needed to identify, report, and resolve community issues through collaboration.</p>
        </div>

    </div>
  );
}

export default Home;
