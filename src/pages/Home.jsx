import React, { useState } from 'react';
import Navbar from './Navbar';
import { WiDirectionRight } from "react-icons/wi";
import { FiAlertTriangle } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuBuilding2 } from "react-icons/lu";
import { SlPeople } from "react-icons/sl";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { FaSmileBeam } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  
  const [visible, setVisible] = useState(false);

  const viewhandle = () => {
    setVisible((prev) => !prev); 
  };

  const [visible2, setVisible2] = useState(false);

  const viewhandle2 = () => {
    setVisible2((prev) => !prev); 
  };

  const [visible3, setVisible3] = useState(false);

  const viewhandle3 = () => {
    setVisible3((prev) => !prev); 
  };

  const [visible4, setVisible4] = useState(false);

  const viewhandle4 = () => {
    setVisible4((prev) => !prev); 
  };

  return (
    <div>
      <Navbar  />
      <div className='w-screen flex  mt-10'>
        <div className="left px-19 w-7/10">
          <h4 className='text-white mt-28'>Community-Powered Solutions</h4>
          <h1 className='text-white text-5xl font-extrabold mt-4'>Turn Local Challenges into <span className="bold">Community Action </span></h1>
          <h2 className='text-xl text-zinc-400 mt-4'>Report issues in your community, connect with local authorities, NGOs, and businesses to solve problems faster and more efficiently.</h2>
          <div className="button flex justify-center">
            <button className='bg-green-700 text-white hover:bg-white hover:text-green-900 font-extrabold py-2 px-5 mt-4 rounded-[15px] flex items-center'>
              Get Started
              <WiDirectionRight className='ml-1 text-2xl' />
            </button>
          </div>
        </div>
        <div className="right w-[30%] pr-12">
          <img className='glow mt-22 max-h-64   w-full object-cover rounded-[20px]' src='https://images4.alphacoders.com/215/215948.jpg' />
        </div>
      </div>

      <div className="features w-full flex flex-col justify-center ">
        <h1 className='h4 bg-white text-md inline-block mt-40 mx-auto text-center rounded-[18px] px-3 py-1'>Features</h1>
        <h4 className='text-5xl mx-auto text-center text-white font-extrabold mt-10 '>Empowering Communities Together.</h4>
        <p className='text-zinc-400 mx-auto text-center text-xl mt-3'>Our platform provides all the tools needed to identify, report, and resolve community issues through collaboration.</p>

        <div className="boxes mx-auto grid grid-cols-3 px-35 mt-10 w-full  gap-13 flex-col">
          <div className="box1  bg-green-900  flex flex-col py-4 rounded-[12px]  px-5 text-center items-center">
            <FiAlertTriangle className='text-green-800 bg-white rounded-[50%] px-2  text-5xl  ' />
            <h1 className='text-white text-2xl font-extrabold mt-5'>Easy Issue Reporting</h1>
            <p className='text-zinc-400 mt-5'>Report problems in seconds with our simple interface. Add photos, location, and descriptions.</p>
          </div>

          <div className="box2 bg-green-900 flex flex-col py-4 rounded-[12px]  px-5 text-center items-center">
            <MdOutlineLocationOn  className='text-green-800 bg-white rounded-[50%] px-2  text-5xl  ' />
            <h1 className='text-white text-2xl font-extrabold mt-5'>Geo-Tags</h1>
            <p className='text-zinc-400 mt-5'>Precisely identify issue locations with Geo-Tags for faster detection and resolution by authorities and the community. </p>
          </div>

          <div className="box3 bg-green-900 flex flex-col py-4 rounded-[12px]  px-5 text-center items-center">
            <LuBuilding2  className='text-green-800 bg-white rounded-[50%] px-2  text-5xl ' />
            <h1 className='text-white text-2xl font-extrabold mt-5'>Authority Connection</h1>
            <p className='text-zinc-400 mt-5'>Direct connection to local authorities, NGOs, and businesses who can help solve issues.</p>
          </div>

          <div className="box4 bg-green-900 flex flex-col py-4 rounded-[12px]  px-5 text-center items-center">
            <SlPeople   className='text-green-800 bg-white rounded-[50%] px-2  text-5xl' />
            <h1 className='text-white text-2xl font-extrabold mt-5'>Community Collaboration</h1>
            <p className='text-zinc-400 mt-5'>Work together with neighbors to address issues through volunteer opportunities and group actions.</p>
          </div>

          <div className="box5 bg-green-900 flex flex-col py-4 rounded-[12px]  px-5 text-center items-center">
            <IoMdCheckmarkCircleOutline className='text-green-800 bg-white rounded-[50%] px-2  text-5xl' />
            <h1 className='text-white text-2xl font-extrabold mt-5'>Progress Tracking</h1>
            <p className='text-zinc-400 mt-5'>Follow the status of reported issues from submission to resolution with real-time updates.</p>
          </div>

          <div className="box6 bg-green-900 flex flex-col py-4 rounded-[12px]  px-5 text-center items-center">
            <FaRegMessage className='text-green-800 bg-white rounded-[50%] px-2  text-5xl ' />
            <h1 className='text-white text-2xl font-extrabold mt-5'>Community Forums</h1>
            <p className='text-zinc-400 mt-5'>Discuss local issues, share ideas, and coordinate efforts through dedicated community forums.</p>
          </div>
        </div> 
      </div>

     <div className="scroll flex justify-center">
     <h1 className="scrolling-text text-center flex text-white mt-20 font-black text-2xl ">From challenge to opportunity, together we rise <FaSmileBeam className='text-yellow-300 ml-1 mt-auto'/></h1>
     </div>

      <div className="works flex flex-col w-auto px-19 justify-center mt-20 ">
        <h1 className='h4 text-black bg-white inline-block px-2 py-1 rounded-[20px] mx-auto'>How it works</h1>
        <h1 className="text-white text-5xl text-center mt-10 font-extrabold">Simple Process, Powerful Results</h1>
        <p className='text-xl text-zinc-400 text-center mt-3'>Our platform makes it easy to report and resolve community issues through a simple, streamlined process.</p>

        <div className="cards gap-10 grid grid-cols-3 px-20 mt-10">
          <div className="card1 box1 text-center p-5 rounded-[30px] bg-green-900">
            <h1 className='bg-white text-2xl mt-5 text-green-900 mx-auto inline-block px-5 py-2 rounded-[50%]'>1</h1>
            <h1 className='text-white mt-5 text-3xl font-black'>Report an Issue</h1>
            <p className='text-zinc-400  text-xl px-3 mt-5 '>Use our mobile app or website to report issues in your community. Add photos, location, and a description.</p>
            <div className="images px-5">
              <img className=' rounded-[20px] mt-10 ' src='http://vertassets.blob.core.windows.net/image/2f8c46c5/2f8c46c5-44fd-446d-b3cf-967b12c2bcce/folder_document_report_data_450x300.jpg'/>
            </div>
          </div>

          <div className="card2 box1 text-center p-5 rounded-[30px]  bg-green-900">
            <h1 className='bg-white text-2xl mt-5 text-green-900 mx-auto inline-block px-5 py-2 rounded-[50%]'>2</h1>
            <h1 className='text-white mt-5 text-3xl font-black'>Connect with Solvers</h1>
            <p className='text-zinc-400  text-xl px-3 mt-5 '>Our platform connects your report with local authorities, NGOs, and businesses who can help solve the issue.</p>
            <div className="images px-5">
              <img className=' rounded-[20px] mt-10 ' src='https://c.pxhere.com/photos/af/c6/agreement_collaboration_cooperation_corporate_deal_greeting_hands_handshake-1557443.jpg!d'/>
            </div>
          </div>

          <div className="card3 box1 text-center p-5 rounded-[30px]  bg-green-900">
            <h1 className='bg-white text-2xl mt-5 text-green-900 mx-auto inline-block px-5 py-2 rounded-[50%]'>3</h1>
            <h1 className='text-white mt-5 text-3xl font-black'>Track Resolution</h1>
            <p className='text-zinc-400  text-xl px-3 mt-5 '>Follow the progress of your reported issue and see how it's being resolved in real-time with efficiency.</p>
            <div className="images px-5">
              <img className=' rounded-[20px] mt-10 ' src='https://s17233.pcdn.co/blog/wp-content/uploads/2021/03/Marketing_Tracking-Links_Site_0409.png'/>
            </div>
          </div>
        </div>
      </div>

      <div className="faqs flex flex-col justify-center mt-40">
        <h1 className=' h4 text-black bg-white text-center mx-auto py-1 px-2 rounded-[20px]'>Faq's</h1>
        <h1 className='text-white text-4xl font-black text-center  mt-6'>Frequently Asked Questions</h1>
        <p className='text-zinc-400 text-xl text-center mt-3'>Find answers to common questions about our platform and how it works.</p>

        <div className="ques1 mt-7 px-15">
          <div className="supportingdiv bg-white ml-10 px-3 py-2 rounded-[30px] flex justify-between">
            <div className="inner">
              <h1 className='text-green-950 text-3xl font-bold ml-4 '>Is the platform free to use?</h1>
              <hr className={`text-zinc-900 mt-4 ${visible ? 'block' : 'hidden'}`}></hr>
              <p className={`text-green-800 text-xl mt-4 ml-4 ${visible ? 'block' : 'hidden'}`}>Yes, our platform is completely free for community members to report issues and collaborate on solutions.</p>
            </div>
            <button 
              onClick={viewhandle} 
              className="text-xl bg-white text-black rounded-full p-2 transition-transform duration-300 ease-in-out"
            >
              <span className={`transition-transform duration-300 ${visible ? 'rotate-180' : 'rotate-0'}`}>
                {visible ? <FiMinus className='text-3xl' /> : <IoMdAdd className='text-3xl'/>}
              </span>
            </button>
          </div>
        </div>


        <div className="ques2 mt-10 px-15">
          <div className="supportingdiv bg-white ml-10 px-3 py-2 rounded-[30px] flex justify-between">
            <div className="inner">
              <h1 className='text-green-950 text-3xl font-bold ml-4 '>How do you connect with local authorities?</h1>
              <hr className={`text-zinc-900 mt-4 ${visible2 ? 'block' : 'hidden'}`}></hr>
              <p className={`text-green-800 text-xl ml-4 ${visible2 ? 'block' : 'hidden'}`}>We partner with local governments, NGOs, and businesses in each community we serve to ensure reports are directed to the right people who can help.</p>
            </div>
            <button 
              onClick={viewhandle2} 
              className="text-xl bg-white text-black rounded-full p-2 transition-transform duration-300 ease-in-out"
            >
              <span className={`transition-transform duration-300 ${visible2 ? 'rotate-180' : 'rotate-0'}`}>
                {visible2 ? <FiMinus className='text-3xl' /> : <IoMdAdd className='text-3xl'/>}
              </span>
            </button>
          </div>
        </div>


        <div className="ques3 mt-10 px-15">
          <div className="supportingdiv bg-white ml-10 px-3 py-2 rounded-[30px] flex justify-between">
            <div className="inner">
              <h1 className='text-green-950 text-3xl font-bold ml-4  '>Can I report issues anonymously?</h1>
              <hr className={`text-zinc-900 mt-4 ${visible3 ? 'block' : 'hidden'}`}></hr>
              <p className={`text-green-800 text-xl mt-4 ml-4 ${visible3 ? 'block' : 'hidden'}`}>Yes, you can choose to report issues anonymously if you prefer not to share your personal information.</p>
            </div>
            <button 
              onClick={viewhandle3} 
              className="text-xl bg-white text-black rounded-full p-2 transition-transform duration-300 ease-in-out"
            >
              <span className={`transition-transform duration-300 ${visible3 ? 'rotate-180' : 'rotate-0'}`}>
                {visible3? <FiMinus className='text-3xl' /> : <IoMdAdd className='text-3xl'/>}
              </span>
            </button>
          </div>
        </div>

        <div className="ques4 mt-10 px-15">
          <div className="supportingdiv bg-white ml-10 px-3 py-2 rounded-[30px] flex justify-between">
            <div className="inner">
              <h1 className='text-green-950 text-3xl font-bold ml-4 '>How quickly are issues typically resolved?</h1>
              <hr className={`text-zinc-900 mt-4 ${visible4 ? 'block' : 'hidden'}`}></hr>
              <p className={`text-green-800 text-xl mt-4 ml-4 ${visible4 ? 'block' : 'hidden'}`}>Resolution times vary depending on the complexity of the issue, but our platform helps speed up the process by connecting the right stakeholders and tracking progress.</p>
            </div>
            <button 
              onClick={viewhandle4} 
              className="text-xl bg-white text-black rounded-full p-2 transition-transform duration-300 ease-in-out"
            >
              <span className={`transition-transform duration-300 ${visible4 ? 'rotate-180' : 'rotate-0'}`}>
                {visible4? <FiMinus className='text-3xl' /> : <IoMdAdd className='text-3xl'/>}
              </span>
            </button>
          </div>
        </div>

      </div>

      

      <footer className="bgf text-white text-center py-4 mt-10">
      <div className="container mx-auto">
        <p className="text-lg font-semibold">© 2025 Community Action. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with passion and purpose to make a difference in local communities.</p>
        <div className="social-links mt-3">
          <a href="#" className="text-white mx-2 hover:text-blue-600"><FaSquareFacebook  className='text-4xl inline-block mx-auto'/></a>
          <a href="#" className="text-white mx-2 hover:text-blue-400"><FaTwitter className='text-4xl inline-block mx-auto' /></a>
          <a href="#" className="text-white mx-2 hover:text-orange-500"><AiFillInstagram className='text-4xl inline-block mx-auto'/></a>
          <a href="#" className="text-white mx-2 hover:text-blue-800"><FaLinkedinIn className='text-4xl inline-block mx-auto'/></a>
        </div>
      </div>
    </footer>

    </div>
  );
}

export default Home;
