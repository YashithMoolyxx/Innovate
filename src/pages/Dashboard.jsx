import React, { useState } from 'react';
import Navbar from './Navbar';
import { FaPlus } from "react-icons/fa";
import { RiChatSmileAiLine, RiNumbersLine } from "react-icons/ri";
import { PiNotepadBold, PiNotepadDuotone } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
    priority: "urgent",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    closeModal();
  };

  return (
    <div className="flex h-screen">
      <Navbar />

      <div className="menubar bg-green-800 w-[18%] min-w-[220px] h-full flex flex-col items-center py-10 shadow-lg">
        <h1 className="text-white text-2xl font-bold mb-8">Dashboard</h1>

        <div className="flex flex-col w-full space-y-6 px-4">
          <div onClick={openModal} className="menu-item group flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-green-600">
            <FaPlus className="text-white text-2xl group-hover:text-amber-300" />
            <span className="text-white text-lg font-medium group-hover:text-amber-300">Post</span>
          </div>

          <div className="menu-item group flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-green-600">
            <RiChatSmileAiLine className="text-white text-2xl group-hover:text-amber-300" />
            <span className="text-white text-lg font-medium group-hover:text-amber-300">Chatbot</span>
          </div>

          <div className="menu-item group flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-green-600">
            <PiNotepadBold className="text-white text-2xl group-hover:text-amber-300" />
            <span className="text-white text-lg font-medium group-hover:text-amber-300">My Problems</span>
          </div>
        </div>
      </div>

      <div className="screen flex flex-col w-full px-10 pt-10">
        <h1 className="text-white text-4xl font-bold">Dashboard</h1>
        <p className="text-zinc-400 text-xl">Track your community contributions and problem-solving impact</p>

        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-[90%] mx-auto mt-10">
          <div className="card1 text-white border-2 border-white rounded-[20px] px-5 py-4 bg-green-800">
            <h1 className="flex justify-between text-xl">
              <span>Problems Posted</span>
              <PiNotepadDuotone className="mt-1" />
            </h1>
            <h1 className="text-white text-4xl mt-3">0</h1>
            <p className="text-zinc-400 mt-3">0 this month</p>
          </div>

          <div className="card2 text-white border-2 border-white rounded-[20px] px-5 py-4 bg-green-800">
            <h1 className="flex justify-between text-xl">
              <span>Problems Approached</span>
              <RiNumbersLine className="mt-1" />
            </h1>
            <h1 className="text-white text-4xl mt-3">0</h1>
            <p className="text-zinc-400 mt-3">0 this month</p>
          </div>

          <div className="card3 text-white border-2 border-white rounded-[20px] px-5 py-4 bg-green-800">
            <h1 className="flex justify-between text-xl">
              <span>Problems Solved</span>
              <IoMdCheckmarkCircleOutline className="mt-1" />
            </h1>
            <h1 className="text-white text-4xl mt-3">0</h1>
            <p className="text-zinc-400 mt-3">0 this month</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center">
          <div className="bg-green-400 w-[90%] max-w-md p-6 rounded-lg shadow-lg relative">
            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-700 hover:text-red-600">
              <MdClose size={24} />
            </button>
            <h2 className="text-xl font-semibold text-gray-900">Create a Post</h2>
            <form className="mt-4" onSubmit={handleSubmit}>
              <label className="block text-gray-700">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded-md p-2 mt-1" placeholder="Enter name" required />

              <label className="block text-gray-700 mt-3">Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border rounded-md p-2 mt-1" placeholder="Enter details" required></textarea>

              <label className="block text-gray-700 mt-3">Upload Image</label>
              <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full border rounded-md p-2 mt-1" required />

              <label className="block text-gray-700 mt-3">Priority</label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center">
                  <input type="radio" name="priority" value="urgent" checked={formData.priority === "urgent"} onChange={handleChange} className="mr-2" />
                  Urgent
                </label>
                <label className="flex items-center">
                  <input type="radio" name="priority" value="serious" checked={formData.priority === "serious"} onChange={handleChange} className="mr-2" />
                  Serious
                </label>
                <label className="flex items-center">
                  <input type="radio" name="priority" value="non-serious" checked={formData.priority === "non-serious"} onChange={handleChange} className="mr-2" />
                  Non-Serious
                </label>
              </div>

              <button type="submit" className="mt-4 w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
