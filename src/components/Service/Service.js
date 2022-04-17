import React from 'react';
import {NavLink} from 'react-router-dom';

const Service = (props) => {
  // distructuring for for clean code
    const{id, name, fee, courseStart, endCourse, img, teacher,discription} = props.course;
    
    return (
      <div className="p-12 md:w-1/2 flex flex-col items-start">
        <img className='w-full h-80 mt-5 rounded-2xl' src={img} alt="" />
        <span className="inline-block py-1 px-2 rounded bg-white text-indigo-900 text-xl font-bold tracking-widest uppercase my-10">{name}</span>
        <p className="leading-relaxed mb-2">Course Start &nbsp;: {courseStart}</p>
        <p className="leading-relaxed mb-2"> Course End &nbsp;&nbsp;: {endCourse}</p>
        <p className="leading-relaxed mb-2">Course Fee &nbsp;&nbsp;&nbsp;: {fee} Tk</p>
        <p className="leading-relaxed mb-8">{discription}</p>
        
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
          <NavLink to='' className="text-indigo-400 inline-flex items-center">More Details <i className="mx-2 fas fa-long-arrow-alt-right"></i>
          </NavLink>
          <span className="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
          <i className="mx-2 fas fa-eye"></i>1.2K
          </span>
          <span className="text-gray-500 inline-flex items-center leading-none text-sm">
          <i className="mx-2 far fa-comment"></i>{id}
          </span>
        </div>
        <a className="inline-flex items-center">
          <img alt="blog" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqAvoQBV2wYOPtKxY5_CpjKEwLCP8F2hgyGvbDD-av-41hb2e0wAtISBa9I__iO-tx61I&usqp=CAU" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-white">{teacher}</span>
            <span className="text-gray-500 text-xs tracking-widest mt-0.5">Web Developer</span>
          </span>
        </a>
      </div>
    );
};

export default Service;