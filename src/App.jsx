import { useState, useEffect } from 'react'
import CircularProgress from './Components/CirucularProgress/CircularProgress';
import ProjectGrid from './Components/ProjectGrids/ProjectGrid';
import SocialIcons from './Components/SocialIcons/SocialIcons'
import htmlLogo from './Images/html5.png';
import cssLogo from './Images/css3.png';
import jsLogo from './Images/javascript.png';
import reactLogo from './Images/react.png';
import nodeLogo from './Images/nodejs.png';
import csharpLogo from './Images/c++.png'; // if this is meant to be C++ 
import gitLogo from './Images/git.png';
import mongodbLogo from './Images/mongodb.png';
import reduxLogo from './Images/redux.png';
import mysqlLogo from './Images/mysql.png';
import boostraplogo from './Images/boostrap.png';
import coverpic from './Images/PawanMalkani.jpg';
import EmailService from './Components/EmailService/EmailService';
import { ToastContainer } from "react-toastify";



import './App.css'

function App() {

  const skills = [
    { logo: htmlLogo, target: 95, color: "#e34c26", },
    { logo: cssLogo, target: 95, color: "#264de4" },
    { logo: jsLogo, target: 90, color: "#f0db4f" },
    { logo: reactLogo, target: 100, color: "#61DBFB" },
    { logo: nodeLogo, target: 80, color: "#68A063" },
    { logo: csharpLogo, target: 75, color: "#5585B4" },
    { logo: gitLogo, target: 85, color: "#F05133" },
    { logo: mongodbLogo, target: 85, color: "#499D4A" },
    { logo: boostraplogo, target: 90, color: "#59294E" },
    { logo: mysqlLogo, target: 80, color: "#6A7E91" },
    { logo: reduxLogo, target: 95, color: "#764ABC" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting) {
            if (el.classList.contains('animate-on-scroll')) {
              el.classList.add('slide-in-left');
            } else if (el.classList.contains('animate-on-scroll-right')) {
              el.classList.add('slide-in-right');
            }
          } else {
            // Delay removing class to avoid flicker (match animation duration)
            setTimeout(() => {
              el.classList.remove('slide-in-left');
              el.classList.remove('slide-in-right');
            }, 1500); // duration in ms, same as CSS animation
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);



  return (
    <>

      {/***************************************************************** Personal Image and Details *********************************************************************/}


      <div className="maincontainer w-full h-full bg-white overflow-y-hidden overflow-hidden">

        <div className="flex flex-col lg:flex-row w-full h-full rounded-xl shadow-lg min-h-screen">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-10 bg-[radial-gradient(circle,_rgba(0,225,255,1)_0%,_rgba(175,222,222,1)_100%)] animate-on-scroll">

            <img
              className="w-60 h-60 rounded-full object-cover mt-10 object-top"
              src={coverpic}
              alt="Profile"
            />

            <div className="fullname mt-4 text-2xl font-semibold text-center">
              <span>-Pawan Malkani-</span>
              <span className="block text-lg text-gray-600">Web Developer</span>
            </div>

            {/* Social Icons */}
            <div className="icons mt-1 flex space-x-4">
              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                onClick={() => window.open('https://www.instagram.com/pawannmalkani', '_blank')}
                className="m-2 inline-block rounded-2xl bg-transparent p-3 text-6xl font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:text-white focus:outline-none focus:ring-0 active:shadow-lg cursor-pointer">
                <span className="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512">
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </button>

              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                onClick={() => window.open('https://www.linkedin.com/in/pawan-malkani-460851190/', '_blank')}
                className="m-2 inline-block rounded-2xl bg-transparent p-3 text-6xl font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:text-white focus:outline-none focus:ring-0 active:shadow-lg cursor-pointer">
                <span class="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512">
                    <path
                      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </button>

              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                onClick={() => window.open('https://github.com/pawanmalkani', '_blank')}
                className="m-2 inline-block rounded-2xl bg-transparent p-3 text-6xl font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:text-white focus:outline-none focus:ring-0 active:shadow-lg cursor-pointer">
                <span className="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 496 512">
                    <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Side - Details */}

          <div className="animate-on-scroll-right w-full lg:w-1/2 text-xl text-black font-mono space-y-4 px-6 pt-10 bg-white lg:bg-[radial-gradient(circle,_rgba(0,225,255,1)_0%,_rgba(175,222,222,1)_100%)]">
            <div className="w-full py-10 lg:mt-40 lg:ml-45">
              <h1 className="text-4xl mb-10 font-bold text-center lg:text-center lg:mr-90">About Me!</h1>

              {/* Full Name */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center pb-4 summary">
                <p className="font-semibold w-32 min-w-fit text-left">Full Name:</p>
                <span className="text-gray-500 sm:ml-4">Pawan Mukesh Malkani</span>
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center pb-4 summary">
                <p className="font-semibold w-32 min-w-fit text-left">Phone:</p>
                <span className="text-gray-500 sm:ml-4 whitespace-nowrap">+91 7972101526</span>
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center pb-4 summary">
                <p className="font-semibold w-32 min-w-fit text-left">Email:</p>
                <span className="text-gray-500 sm:ml-4 break-all">malkanipawan1@gmail.com</span>
              </div>

              {/* Address */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center pb-4 summary">
                <p className="font-semibold w-32 min-w-fit text-left">Address:</p>
                <span className="text-gray-500 sm:ml-4">Mumbai, India</span>
              </div>
            </div>
          </div>



        </div>

        {/***************************************************************Personal Description **************************************************************************/}

        <div className="text-xl text-black font-mono rounded-xl shadow-lg lg:mt-25 lg:mb-25 lg:pb-5 pb-5">
          <h1 className="text-4xl mt-12 text-center font-bold mb-7">Hello There!</h1>
          <span className='text-center block leading-10 pl-8 pr-8 lg:pl-45 lg:pr-45 lg:pb-3 summary'>
            Hi, I’m Pawan Malkani — a Software Engineer based in Mumbai with 4+ years of experience building scalable software systems and web applications.
            I specialize in JavaScript, React.js, React Native, and C++.</span>
          <span className='text-center block leading-10 mt-1.5 pl-8 pr-8 lg:pl-45 lg:pr-45 lg: pb-3 summary'>
            Currently at Tata Advanced Systems Limited (TASL), I focus on front-end, full-stack, and C++ application development, especially
            in the defense domain. I’m passionate about writing clean, efficient code and crafting solutions that improve user experience and add real value..</span>
          <span className='text-center block leading-10 mt-1.5 pl-8 pr-8 pb-6 lg:pl-45 lg:pr-45 lg:Pb-4 summary'>
            I thrive in collaborative environments, love solving complex problems, and am always looking to learn and grow..</span>

          <div className="icons mt-1 flex space-x-4 lg:ml-173 ml-27 lg:mb-5 text-5xl">
            {SocialIcons()}
          </div>
        </div>

        {/*****************************************************Work Experience and Education Details *******************************************************************/}

        <div className="myresume text-base sm:text-xl text-black font-mono rounded-xl shadow-lg px-4 sm:px-8 lg:px-16">
          <h1 className="text-3xl sm:text-4xl mt-12 text-center font-bold mb-7">My Resume</h1>

          <div className="myworkexp">
            <div className="relative w-full flex flex-col items-center mt-16">
              <hr className="absolute top-[21px] h-[2px] w-full max-w-4xl bg-gray-400 z-0" />
              <h1 className="relative z-10 text-[18px] uppercase tracking-[5px] font-bold inline-block py-2 px-4 bg-[#e6e6e6] rounded font-[Abel] text-center">
                Work Experience
              </h1>
            </div>

            <div className="relative z-10 mt-10 p-6 sm:p-8 bg-[radial-gradient(circle,_rgba(0,225,255,1)_0%,_rgba(175,222,222,1)_100%)] shadow-md rounded-xl border border-gray-200 w-full max-w-4xl mx-auto animate-on-scroll">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 ">

                <div className="flex flex-col lg:ml-48 summary" >
                  <p className="text-xl lg:text-3xl sm:text-2xl font-semibold text-gray-800 leading-snug">
                    Tata Advanced Systems Limited
                  </p>
                  <p className="text-sm sm:text-base text-gray-500 mt-1 lg:text-2xl">
                    July 2021 – Present
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed font-bold lg:text-xl">
                    An Indian aerospace and defense company providing <br className="hidden sm:block" />
                    advanced technology and manufacturing solutions.
                  </p>
                </div>
              </div>
            </div>


            <div className="relative w-full flex flex-col items-center mt-16">
              <hr className="absolute top-[23px] h-[2px] w-full max-w-4xl bg-gray-400 z-0" />
              <h1 className="relative z-10 text-[18px] uppercase tracking-[5px] font-bold inline-block py-2 px-4 bg-[#e6e6e6] rounded font-[Abel] text-center">
                EDUCATION
              </h1>
            </div>

            <div className="animate-on-scroll-right relative z-10 mt-10 p-6 sm:p-8 bg-[radial-gradient(circle,_rgba(0,225,255,1)_0%,_rgba(175,222,222,1)_100%)] shadow-md rounded-xl border border-gray-200 w-full max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">

                <div className="flex flex-col lg:ml-40 summary" >
                  <p className="text-xl sm:text-2xl font-semibold text-gray-800 leading-snug lg:text-3xl">
                    Bachelors Degree
                  </p>
                  <p className="text-sm sm:text-base text-gray-500 mt-1 lg:text-2xl">
                    Thadomal Shanani Engineeing College - 2018 - 2021
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed font-bold lg:text-xl">
                    TSEC Ranked 32nd All India in Top  <br className="hidden sm:block" />
                    100 Engineering Colleges in India 2022.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll relative z-10 mt-10 p-6 sm:p-8 bg-[radial-gradient(circle,_rgba(0,225,255,1)_0%,_rgba(175,222,222,1)_100%)] shadow-md rounded-xl border border-gray-200 w-full max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">

                <div className="flex flex-col lg:ml-22 summary">
                  <p className="text-xl sm:text-2xl font-semibold text-gray-800 leading-snug lg:text-3xl">
                    Diploma Course
                  </p>
                  <p className="text-sm sm:text-base text-gray-500 mt-1 lg:text-2xl">
                    Vivekanand Education Society's Polytechnic - 2015 - 2018
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed font-bold lg:text-xl">
                    VESP, Mumbai, established in 1983, offers six AICTE-approved  <br className="hidden sm:block" />
                    engineering diplomas with modern facilities and a strong alumni network.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll-right relative z-10 mt-10 p-6 sm:p-8 bg-[radial-gradient(circle,_rgba(0,225,255,1)_0%,_rgba(175,222,222,1)_100%)] shadow-md rounded-xl border border-gray-200 w-full max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">

                <div className="flex flex-col lg:ml-50 summary ">
                  <p className="text-xl sm:text-2xl font-bold text-black leading-snug lg:text-3xl">
                    School
                  </p>
                  <p className="text-sm sm:text-base text-gray-500 mt-1 font-extrabold lg:text-2xl">
                    Jhulelal Trust School - 2014 - 2015
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed font-bold lg:text-xl">
                    JTS knows for its consistent high Performance and  <br className="hidden sm:block" />
                    recognized for excellence in academics.
                  </p>
                </div>
              </div>
            </div>


            <br />
            <br />
          </div>
        </div>

        {/*********************************************************** My Skills and Learnings **************************************************************************/}


        <div className="myresume text-base sm:text-xl text-black font-mono rounded-xl shadow-lg px-4 sm:px-8 lg:px-16">
          <h1 className="text-3xl sm:text-4xl mt-12 text-center font-bold mb-7">Skills</h1>
          <div className="min-h-screen bg-white p-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center text-6xl">
              {skills.map((skill, idx) => (
                <CircularProgress
                  key={idx}
                  target={skill.target}
                  logo={skill.logo}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        </div>

        {/*********************************************************** My Skills and Learnings **************************************************************************/}

        <div className="myresume text-base sm:text-xl text-black font-mono rounded-xl shadow-lg px-4 sm:px-8 lg:px-16">
          <h1 className="text-3xl sm:text-4xl mt-12 text-center font-bold mb-7">My Endeavours</h1>
          <div className="bg-gray-100 min-h-screen summary">
            <ProjectGrid />
          </div>
        </div>

        <div className="text-xl text-black font-mono rounded-xl shadow-lg lg:mb-25 lg:pb-5 pb-5 bg-[radial-gradient(circle,_rgba(0,225,255,1)_0%,_rgba(175,222,222,1)_100%)]" >
          <h1 className="text-4xl mt-12 text-center font-bold mb-7 pt-6">Hire Me!</h1>
          <span className='text-center block leading-10 pl-8 pr-8 lg:pl-45 lg:pr-45 lg:pb-3 summary'>
            Hire Me as a developer who values both creativity and structure. I take pride in building projects that are not only visually appealing
            but also well-organized and easy to maintain. With a focus on user experience and reliable performance, I aim to deliver work that
            helps your business grow and your users stay engaged.
          </span>
        </div>
      </div>


      <div className="text-xl text-black font-mono rounded-xl shadow-lg lg:mb-25 lg:pb-5 pb-5 summary" >
        <EmailService />

        <ToastContainer />
      </div>



    </>
  )
}

export default App
