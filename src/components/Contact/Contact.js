import React from "react";

const Contact = () => {
  return (
    <div className="bg-indigo-300 sm:flex justify-center py-16">
      <div className="lg:grid grid-cols-2 lg:mx-48">
        <div className="shadow-2xl bg-indigo-600 text-white px-6 pt-3 pb-10 mb-5">
          <h1 className="text-3xl font-bold mb-2">Get Intouch</h1>
          <p>
            Have a question or just want to say hi? We'd love to hear from you.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-2">
            <input
              className="h-10 px-2 text-black"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="h-10 px-2 text-black"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div className="mt-5">
            <input
              className="h-10 px-2 text-black w-full"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="mt-5">
            <textarea
              className="h-28 px-2 text-black w-full"
              type="text"
              placeholder="Message"
            />
          </div>
          <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
          <label>I agree to the Terms and Conditions</label>
          <br />
          <button className="text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4">
            Send
          </button>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl text-white bg-indigo-600 mx-auto">
          <div className="flex lg:justify-center items-center mx-16 mb-8 py-3">
            <i className="fa-2x fas fa-map-marker-alt"></i>
            <div className="font-semibold mx-5">
              New York Office
              <br />
              Uttara, Dhaka-1230
              <br />
              Bangladesh
            </div>
          </div>
          <hr className="border-1 border-indigo-800 w-80 mx-auherf mb-8" />
          <div className="flex justify-center items-center mb-8 py-3">
            <i className="fa-2x fas fa-envelope-open-text"></i>
            <div className="font-semibold mx-5">
              hhasibul@gmail.com
              <br />
              info@gmail.com
            </div>
          </div>
          <hr className="border-1 border-indigo-800 w-80 mx-auherf mb-8" />
          <div className="flex mx-10 items-center mb-8 py-3">
            <i className="fa-2x fas fa-phone-alt"></i>
            <div className="font-semibold mx-5">
              +8801308554163
              <br />
              +8801795443674
            </div>
          </div>
          <hr className="border-1 border-indigo-800 w-80 mx-auherf mb-8" />
          <div className="mx-8 mb-8 py-3">
            <h1 className="font-extrabold">Follow US</h1>
            {/* using fontaesome icon */}
            <div className="font-semibold mx-5 mt-5">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
