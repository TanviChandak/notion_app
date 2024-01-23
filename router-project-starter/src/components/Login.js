import React from 'react';
import { FormDetails } from './FormDetails';
import loginImg from "../assets/login.webp";
import mobileLoginImg from "../assets/frame.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const propsdata = {
    "heading1": "Welcome Back",
    "description": "Build skills for today, tomorrow, and beyond.",
    "description2": "Education to future-proof your career.",
    "btnName": "Sign In",
    "btnName2": "Sign in with google",
    "formFields": [
      {
        "fieldName": "Email Address",
        "type": "text"
      },
      {
        "fieldName": "Password",
        "type": "password"
      },
      {
        "fieldName": "Forgot Password",
        "type": "link",
        "url": "/forgetPassword"
      }
    ],
    "imgName": loginImg
  };

  const onSubmit = (data) => {
    // Your login logic goes here
    // Displaying a toast upon successful login
    toast.success('Logged In!', { position: 'top-right', autoClose: 2000 });
  };

  return (
    <div className="mt-12">
      <FormDetails data={propsdata}></FormDetails>
      <div className="flex justify-center">
        {/* <FormFields data={propsdata.formFields} onSubmit={onSubmit} /> */}
      </div>
      <ToastContainer />
    </div>
  );
};
