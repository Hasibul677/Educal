import React, { useEffect, useState } from "react";

const About = () => {
  //state create for about part
  const [developers, setDevelopers] = useState([]);
  // load data from about.JSON file
  useEffect(() => {
    fetch("./about.JSON")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);
  return (
    <div>
        <div className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-white">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A storm can take one person down, but it cannot touch a team of
            many. That is how failures cannot take a team down, rather makes
            them stronger!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {developers.map((developer) => (
            <Display key={developer.id} developer={developer}></Display>
          ))}
        </div>
      </div>
    </div>
    <div>
        <img className='w-full h-screen' src="./images/certificate.png" alt="" />
    </div>
    </div>
  );
};

function Display(props) {
  const { name, speech, img, position } = props.developer;
  return (
    <div className="p-4 lg:w-1/4 md:w-1/2">
      <div className="h-full flex flex-col items-center text-center">
        <img alt="team" className="rounded-lg w-full h-56 mb-4" src={img} />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-white">{name}</h2>
          <h3 className="text-gray-500 mb-3">{position}</h3>
          <p className="mb-4">{speech}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
