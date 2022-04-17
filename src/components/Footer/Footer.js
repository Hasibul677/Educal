import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white bg-indigo-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <NavLink to='/home' className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <span className='text-2xl font-bold'>EDUCAL</span>
        </NavLink>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2021 cipywright @Hasibul Hasan
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a
                href="https://facebook.com/"
                target="blank"
                className="fa-2x fab fa-facebook mr-5"
              ></a>
              <a
                href="https://twitter.com/"
                target="blank"
                className="fa-2x fab fa-twitter mr-5"
              ></a>
              <a
                href="https://www.instagram.com/"
                target="blank"
                className="fa-2x fab fa-instagram-square mr-5"
              ></a>
              <a
                href="https://www.linkedin.com/"
                target="blank"
                className="fa-2x fab fa-linkedin-in"
              ></a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
