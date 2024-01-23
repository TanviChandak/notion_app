import React from 'react';
import { FormDetails } from './FormDetails';
import signUpImg from "../assets/signup.webp";
import { FormFields } from './FormFields';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignUp = () => {
  const propsdata = {
    "heading1": "Join the coders !",
    "description": "Build skills for today, tomorrow, and beyond.",
    "description2": "Education to future-proof your career.",
    "btnName": "Create Account",
    "btnName2": "Sign in with google",
    "formFields": [
      {
        "fieldName": "Full Name",
        "type": "text"
      },
      {
        "fieldName": "Email Address",
        "type": "text"
      },
      {
        "fieldName": "Create Password",
        "type": "password"
      },
      {
        "fieldName": "Confirm Password",
        "type": "password"
      }
    ],
    "imgName": signUpImg
  };

  const onSubmit = (data) => {
    // Your signup logic goes here
    // Displaying a toast upon successful signup
    toast.success('Account Created!', { position: 'top-right', autoClose: 2000 });
  };

  return (
    <div className="">
      <FormDetails data={propsdata}></FormDetails>
      <div className="flex justify-center">
        
        {/* <FormDetails data={propsdata.formFields} onSubmit={onSubmit} /> */}
      </div>
      <ToastContainer />
    </div>
  );
};
