import React from 'react';
import banner1 from "../assets/frame.png";
import banner2 from "../assets/aboutus55.webp";

export const About = () => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
        <div className="bg-gray-999 p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-500"> Welcome to our coding journey! We are a team of passionate coders with extensive experience in building
            applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Over the years, we have dedicated
            ourselves to crafting robust and scalable solutions that empower businesses and individuals in their digital
            endeavors.</p>
          <img src={banner1} alt="Course" className="mt-4 h-44 md:h-auto w-full object-cover" />
          <h2 className="text-2xl font-bold mb-4 mt-4 md:mt-0">Our Mission</h2>
          <p className="text-gray-500">
            At our coding website, we are committed to providing high-quality resources, courses, and events to
            empower individuals in their coding journey. Whether you are a beginner or an experienced coder, join
            our community and explore the world of programming.
          </p>
        </div>
        <div className="bg-gray-999 p-6 rounded shadow-md">
          <img src={banner2} alt="Course" className="mt-4 h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};
