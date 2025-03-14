import React from 'react'
import { Link } from 'react-router-dom'
import { FaTools } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-between text-xl mt-5 px-6 ' >
        <div className="logo flex ">
        <FaTools className='hello text-white mx-2  text-4xl rounded-[50%] p-2' />
        <h1 className='text-white font-bold text-2xl'>CivNova</h1>
        </div>
      <div className="navlinks font-extrabold">
      <Link className='text-white mx-7' to='/'>Home</Link>
      <Link className='text-white mx-7'  to='/problems'>Problems</Link>
      <Link className='text-white mx-7'  to='/success'>Success</Link>
      <button className='login text-white py-2 px-5 mx-5 rounded-[16px]'>Login</button>
      </div>
    </div>
  )
}

export default Navbar
