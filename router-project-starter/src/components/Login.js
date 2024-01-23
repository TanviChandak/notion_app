import React from 'react'
import { FormDetails } from './FormDetails'
import loginImg from "../assets/login.webp";


export const Login = () => {
    const propsdata ={"heading1":"Welcome Back",
                    "description":"Build skills for today, tomorrow, and beyond.",
                    "description2":"Education to future-proof your career.",
                    "btnName":"Sign In",
                    "btnName2":"Sign in with google",
                    "formFields":[{
                        "fieldName":"Email Address",
                        "type":"text"
                    },
                    {
                        "fieldName":"Password",
                        "type":"password"
                    },
                    {
                        "fieldName":"Forgot Password",
                            "type":"link",
                            "url":"/forgetPassword"
                    }],
                    "imgName":loginImg
                        }
                        
  return (
    <div className="mt-12">
        
        <FormDetails data={propsdata}></FormDetails>



    </div>
  )
}
