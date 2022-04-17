import React, { useEffect, useState } from "react";
import Service from "./../Service/Service";

const Services = (props) => {
  const {array} = props;
  //create state for take load data
  const [courses, setCourses] = useState([]);
  // create useState for load json data
  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="text-gray-400 bg-gray-900 body-font overflow-hidden pt-16">
      <h1 className='text-center mt-16 text-5xl uppercase font-bold text-white'>Our Service</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          {
            courses.length? (
              array?.map((item) => {
                const course = courses[item]; 
                return (
                  <Service key={course.id} course={course}></Service>
                )
      })
            ):(
              <h1>No Result Found</h1>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Services;
