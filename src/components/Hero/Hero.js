import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-20">
      <div className='lg:flex justify-center items-center mx-10 mb-10'>
        <div className='sm:pt-24'>
        <h1 className="text-5xl font-extrabold mb-5 text-indigo-700 uppercase">Education For Developer</h1>
        <p className='font-semibold text-indigo-700'>
          Suitable for all educational web, LMS, Training Center, Courses Hub,
          College, Academy, University, School, Kindergarten, etc.
        </p>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-10">
          Explore Demos
        </button>
        </div>
      </div>
      <div>
        <img className="w-96" src="./images/hero/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
