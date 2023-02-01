import React, { useState, useEffect } from "react";
import { API, saveUser, rememberMe, getRemembered, userAPI } from "../../Utils";
import { Link, useHistory } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri"
import { GiConfirmed, GiConsoleController } from "react-icons/gi"
import { ImCart } from "react-icons/im"
import { AiOutlineUserAdd } from "react-icons/ai"
import { GoSignIn } from "react-icons/go"
import { useNavigate } from "react-router-dom";
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { GoogleLogin } from '@react-oauth/google';
import jwt_Decode from 'jwt-decode'

import Login from "../Login/Login";
import Signup from "./Signup";

export const Signin = ({ setError, setLoginForm, loginForm, loading, setLoading, error, signupForm, setSignupForm, handleLogin, userData }) => {

    return (
        <>
            <div className="flex justify-center bg-five items-center content-center h-screen flex-col w-full">
                <div className="flex flex-col h-full  md:flex-row md:justify-evenly justify-center w-full  z-30 bg-four border-[#d90045] rounded-[2rem text-white
                                w-full border-[1px xl:max-w-[70rem] md:max-h-[75%] md:min-h-[768px] min-w-[380px] ">
                    {/* left side */}
                    <div className="flex px-10 items-center md:hidden justify-center border-[1px">
                        <img className="h-auto w-[90px]" src={require("../../img/logo.png")} ></img>
                    </div>
                    <div className="md:w-full bg-[#101010] bg-blend-overlay bg-sigup-pic bg-cover py-5 hidden md:flex h-[50%] md:h-full border-[#65d900] border-[1px px-10 
                                     flex-col justify-center gap-3 items-center">
                        <img className="h-auto w-62 my-10" src={require("../../img/logo.png")} ></img>
                        <div className="border-[1px w-full border-[#fff] md:space-y-3 ">
                            <h2 className="text-[#e27a55] font-nsans text-2xl xl:text-[3rem] italic font-extrabold lg:tracking-[.4rem] text-left w-[250px] lg:w-[340px] xl:w-[340px] border-[1px">DJOYOF</h2>
                            <h1 className="font-nsans font-black text-[#CFCFCF] tracking-[.2em] xl:tracking-[2rem] lg:tracking-[2.5rem] text-5xl xl:text-[4.5rem] border-[1px ">BAKING</h1>
                        </div>
                        <p className="text-justify font-pop text-[12px] text-[#fff] sm:text-sm tracking-wide">
                            DJOYOFBAKING is founded by Ms. Dimple Cuevas.
                            DJOYOFBAKING is a small sole proprietorship business which cater and promotes fresh baked home local and international breads.
                            The DJOYOFBAKING bakery is located at Blk 12 Lot 39 Birmingham Village Brgy Pulo Cabuyao Laguna.</p>
                        <div className="flex justify-center  items-center mt-5">
                            <Link to='/login' className=" signup-button hover:scale-105 hover:from-[#d0253c] hover:to-[#be5e3b] min-w-20 focus:ring-4 focus:outline-none ">
                                <ImCart className="h-4 w-4 mr-3 text-[#CFCFCF]"></ImCart>
                                <button type="submit" className={`px-2  w-ful text-[#fff] rounded-md py-2`}>ORDER NOW </button>
                            </Link>
                        </div>
                    </div>
                    {/* Sign up Form */}
                    <Signup
                        setError={setError}
                        setLoginForm={setLoginForm}
                        loginForm={loginForm}
                        loading={loading}
                        setLoading={setLoading}
                        error={error}
                        signupForm={signupForm}
                        setSignupForm={setSignupForm}
                        handleLogin={handleLogin} 
                        userData={userData}
                        >
                    </Signup>
                    {/* <Login
                        error={error}
                        loading={loading}
                        setLoading={setLoading}
                        setError={setError}
                        loginForm={loginForm}
                        setLoginForm={setLoginForm}
                        userData={userData}
                        handleLogin={handleLogin}
                    ></Login> */}
                </div>


            </div>

        </>
    );
};
export default Signin;
