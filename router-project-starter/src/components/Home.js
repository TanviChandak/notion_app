import banner1 from "../assets/banner.jpeg";
import banner2 from "../assets/bannermid.avif";
import React, { useState } from 'react';

import banner3 from "../assets/roboCode.png";

export const Home = () => {
  // const hardcodedValues = [
  //   'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig',
  //   'Grape', 'Honeydew', 'Kiwi', 'Lemon', 'Mango', 'Orange',
  //   'Papaya', 'Quince', 'Raspberry', 'Strawberry', 'Tomato',
  //   'Uva', 'Watermelon', 'Xigua', 'Yellow passion fruit', 'Zucchini',
  //   // Add more values as needed
  // ];
  
    // const [searchTerm, setSearchTerm] = useState('');
    // const [searchResults, setSearchResults] = useState([]);
  
    // const handleSearch = () => {
    //   const filteredResults = hardcodedValues
    //     .filter(value =>
    //       value.toLowerCase().includes(searchTerm.toLowerCase())
    //     )
    //     .slice(0, 4); // Limit to the top 4 suggestions
    //   setSearchResults(filteredResults);
    // };
  
    // const handleInputChange = (value) => {
    //   setSearchTerm(value);
    //   handleSearch();
    // };
  return (
    <div className="container mx-auto p-8 pt-[130px]">
      
      {/* <input
        type="text"

        placeholder="Search..."
        className="border p-2 mr-2 text-cyan-300"
        value={searchTerm}
        onChange={(e) => handleInputChange(e.target.value)}
      /> */}
      {/* <div className="ml-4">
        {searchResults.length > 0 && (
          <ul className="border p-2 bg-white rounded text-cyan-300">
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        )}
      </div> */}
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Coding Website</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder Card 1 */}
        <div className="hover:bg-yellow-400 hover:text-black bg-gray-999 p-6 rounded shadow-md">
          <h2 className=" text-xl font-semibold mb-4">Featured Course</h2>
          <p className="text-gray-500">Explore our latest coding course. Learn and enhance your skills.</p>
          {/* Add an image with height and width */}
          <img src={banner1} alt="Course" className="mt-4 h-32 w-full object-cover" />
        </div>

        {/* Placeholder Card 2 */}
        <div className="hover:bg-yellow-400 hover:text-black bg-gray-999 p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <p className="text-gray-500">Stay tuned for exciting coding events. Join us for hands-on learning.</p>
          {/* Add an image with height and width */}
          <img src={banner2} alt="Event" className="mt-4 h-32 w-full object-cover" />
        </div>

        <div className="hover:bg-yellow-400 hover:text-black bg-gray-999 p-6 rounded shadow-md hover:transform hover:rotate-y-180 transition-transform duration-500 ease-in-out">
          <h2 className="text-xl font-semibold mb-4">Featured Course</h2>
          <p className="text-gray-500">Explore our latest coding course. Learn and enhance your skills.</p>
          {/* Add an image with height and width */}
          <img src={banner3} alt="Course" className="mt-4 h-32 w-full object-cover" />
        </div>
      </div>

      

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Get Started</h2>
        <p className="text-gray-400">
          Ready to take the next step in your coding adventure? Explore our courses, participate in upcoming events,
          and dive into our blog posts. Join our community and embark on a journey of continuous learning and growth.
        </p>
      </div>
    </div>
  );
};