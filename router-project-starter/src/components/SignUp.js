import React from 'react'
import { FormDetails } from './FormDetails'
import signUpImg from "../assets/signup.webp";


export const SignUp = () => {
    const propsdata ={"heading1":"Join the coders !",
                    "description":"Build skills for today, tomorrow, and beyond.",
                    "description2":"Education to future-proof your career.",
                    "btnName":"Create Account",
                    "btnName2":"Sign in with google",
                    "imgName":signUpImg,
                    "formFields":[
                    
                    {
                        "fieldName":"Full Name",
                        "type":"text"
                    },
                    {
                        "fieldName":"Email Address",
                        "type":"text"
                    },
                    {
                        "fieldName":"Create Password",
                        "type":"password"
                    },
                    {
                        "fieldName":"Confirm Password",
                        "type":"password"
                    }

                    ]
                    }
        
    return (
        <div className="mt-12">

        <FormDetails data={propsdata}></FormDetails>

        </div>
    )
}
