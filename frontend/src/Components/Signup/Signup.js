import React from 'react'
import { useState } from 'react';
import { API, saveUser, rememberMe, getRemembered, userAPI } from "../../Utils";
import { Link, useHistory } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri"
import { GiConfirmed, GiConsoleController } from "react-icons/gi"
import { AiOutlineUserAdd } from "react-icons/ai"
import { GoSignIn } from "react-icons/go"
import { useNavigate } from "react-router-dom";
import { MdOutlineAlternateEmail } from 'react-icons/md'
import SignupGoogle from './SignupGoogle';
import SignupError from "../error/SignupError";


const Signup = ({ loading, showForm, setShowForm, setLoading, setUserData, userData, 
                  error, signupForm, setSignupForm, handleLogin, setHideError,
                  hideError,hasUserLog,
                }) => {

    const { email, password, name, confirm_password } = signupForm

    const onChange = (e) => {
        setSignupForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    // console.log(loading)
    // console.log(signupForm)
    const signup = async () => {
        console.log("hello")//
        setLoading(true)
      const user = await handleLogin(0, signupForm)
       if(user){
        setSignupForm({
            email: '',
            password: '',
            name: '',
            confirm_password: '',
        });
       }

    }
    let navigate = useNavigate();
    return (
        <div className="flex md:w-full flex-col px-10 md:gap-5 border-[#d90045] border-[1px md:px-20 justify-center focus:outline-none
        items-center">
            {/* input */}
            <div className="w-full  border-[#fff  max-w-md text-sm gap-2 py-4 flex flex-col">
                <h1 className="font-pacifico text-3xl border-[1p] my-4 text-[#fff] tracking-widest" >Sign-up</h1>
                <div className="flex flex-col border-[1px justify-evenly border-[#fff gap-2">
                    <div className=" relative ">
                        <label className="label"> Email</label>
                        <MdOutlineAlternateEmail className="icon-class" />
                        <input className="signup-input"
                            type="text"
                            name="email"
                            value={signupForm.email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="border-[1px border-[#fff relative ">
                        <label className="label"> Username</label>
                        <AiOutlineUserAdd className="icon-class" />
                        <input className="signup-input "
                            type="text"
                            name="name"
                            value={signupForm.name}
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
                        value={signupForm.password}
                        onChange={onChange} />
                </div>
                <div className="border-[1px border-[#fff relative ">
                    <label className="label"> Confirm Password </label>
                    <GiConfirmed className={` ${password === confirm_password ? "text-[#52e952de] scale-105" : "text"} icon-class`} />
                    <input className="signup-input2"
                        type="password"
                        name="confirm_password"
                        value={signupForm.confirm_password}
                        onChange={onChange} />
                </div>
                {!hideError && <SignupError error={error} loading={loading} ></SignupError>}

                {/* BUTTON */}
                <div className="flex">
                    <div onClick={() => setShowForm(!showForm)} className="text-[#227be2] font-mulish tracking-wide hover:scale-105 font-bold">
                        Login
                    </div>
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
                        <SignupGoogle userData={userData}  hasUserLog={hasUserLog} setUserData={setUserData}></SignupGoogle>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup