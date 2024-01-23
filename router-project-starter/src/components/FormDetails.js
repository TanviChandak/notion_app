import React from 'react';
import { FormFields } from './FormFields';
import google from "../assets/googleIcon.png";

export const FormDetails = (props) => {
  const data = props.data;

  return (
    <div className="bg-gray-900 text-white p-10 px-[28px] pt-[70px] pb-[180px] rounded shadow-lg">
      <div className="flex flex-row justify-center">
        <div>
          <h1 className="text-2xl font-bold mb-4 text-center">{data.heading1}</h1>
          <p className="text-lg mb-2">{data.description}</p>
          <p className="mb-4 text-blue-300">{data.description2}</p>

          <FormFields data={data.formFields} />
          <form >

          <div className="flex justify-center mt-5" >
            <button type="submit" className="bg-yellow-400 text-black py-2 px-4 rounded mr-2 hover:text-white">{data.btnName}</button>
            <button className="bg-black text-white py-2 px-4 rounded mr-2 flex items-center hover:text-yellow-400">
                <img src={google} alt="Image" className="w-6 h-6 mr-2" />
                {data.btnName2}
            </button>
            </div>
            </form>


        </div>
        <div className="text-xl text-center ">
          <img className="mt-4 h-[450px] w-full object-cover hidden md:block lg:block" src={data.imgName} alt="Login" />
        </div>
      </div>
    </div>
  );
};
