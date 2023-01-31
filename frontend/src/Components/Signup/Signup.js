import React from 'react'

import { API, saveUser, rememberMe, getRemembered, userAPI } from "../../Utils";
import { Link, useHistory } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri"
import { GiConfirmed, GiConsoleController } from "react-icons/gi"
import { AiOutlineUserAdd } from "react-icons/ai"
import { GoSignIn } from "react-icons/go"
import { useNavigate } from "react-router-dom";
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { GoogleLogin } from '@react-oauth/google';
import jwt_Decode from 'jwt-decode'
import SignupError from "../error/SignupError";


const Signup = ({loading, setLoading, error, signupForm, setSignupForm, handleLogin}) => {
    
    const { email, password, name, confirm_password } = signupForm

    const onChange = (e) => {
        setSignupForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    console.log(loading)
    console.log(signupForm)
    const signup = async () => {
        console.log("hello")
        setLoading(true)
        handleLogin(0, signupForm)
    }
    let googleAccountCredentials = ""
    let navigate = useNavigate();
    return (
        <div className="flex md:w-full flex-col px-10 md:gap-5 border-[#d90045] border-[1px md:px-20 justify-center focus:outline-none
        items-center">
            {/* input */}
            <div className="w-full  border-[#fff text-sm gap-2 py-4 flex flex-col">
                <h1 className="font-pacifico text-3xl my-4 text-[#fff] tracking-widest" >Sign-up</h1>
                <div className="flex flex-col border-[1px justify-evenly border-[#fff gap-2">
                    <div className=" relative ">
                        <label className="label"> Email</label>
                        <MdOutlineAlternateEmail className="icon-class" />
                        <input className="signup-input"
                            type="text"
                            name="email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="border-[1px border-[#fff relative ">
                        <label className="label"> Username</label>
                        <AiOutlineUserAdd className="icon-class" />
                        <input className="signup-input "
                            type="text"
                            name="name"
                            value={name}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className="border-[1px border-[#fff relative ">
                    <label className="label"> Password </label>
                    <RiLockPasswordLine className="icon-class" />
                    <input className="signup-input2  "
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange} />
                </div>
                <div className="border-[1px border-[#fff relative ">
                    <label className="label"> Confirm Password </label>
                    <GiConfirmed className={` ${password === confirm_password ? "text-[#52e952de] scale-105" : "text"} icon-class`} />
                    <input className="signup-input2"
                        type="password"
                        name="confirm_password"
                        value={confirm_password}
                        onChange={onChange} />
                </div>
                <SignupError error={error} loading={loading} ></SignupError>

                {/* BUTTON */}

                <div className="flex">
                    <Link to='/login' className="text-[#227be2] font-mulish tracking-wide hover:scale-105 font-bold">
                        Login
                    </Link>
                </div>
                <div className="flex flex-col border-[#fff w-full gap-2 justify-center">
                    <div className="flex justify-center items-center border-[1px w-full border-[#fc2020]">
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                signup()
                            }}
                            className=" signup-button hover:scale-105 hover:from-[#d0253c] hover:to-[#be5e3b] min-w-20 focus:ring-4 focus:outline-none "
                        >Sign up
                            <GoSignIn className="h-4 w-4 ml-3"></GoSignIn>
                        </button>
                    </div>
                    <div className="flex justify-evenly items-center py-5 w-full">
                        <div className="border [.5px] border-b-[#969191a6]  w-full"></div>
                        <p className="text-[#e5e7e9] py-3 font-mulish tracking-wide mx-10 hover:scale-105 font-bold">or</p>
                        <div className="border [.5px] border-b-[#969191a6]   w-full"></div>
                    </div>
                    <div className="flex justify-center">
                        <GoogleLogin theme="filled_black" size="large"
                            onSuccess={credentialResponse => {
                                googleAccountCredentials = jwt_Decode(credentialResponse.credential)
                                //  console.log(googleAccountCredentials)
                                // createGoogleAccount(googleAccountCredentials)

                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup