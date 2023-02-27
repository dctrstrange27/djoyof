import React from 'react'
import { RiLockPasswordLine } from "react-icons/ri"
import { GiConfirmed } from "react-icons/gi"
import { AiOutlineUserAdd } from "react-icons/ai"
import { GoSignIn } from "react-icons/go"
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { useState } from 'react'
import SignupError from "../error/SignupError";


const SignupBody = ({
    loading,
    showForm,
    setShowForm,
    setLoading,
    error,
    handleLogin,
    hideError
    }) => { 

    const [signupForm, setSignupForm] = useState([
        {
            email:" ",
            password: " ",
            name: " ",
            confirm_password: " ",
        }
    ])

    console.log(signupForm)
    const signup = async () => {
        setLoading(true)
        const user = await handleLogin(0, signupForm)
        if (user) {
            setSignupForm({
                email: '',
                password: '',
                name: '',
                confirm_password: '',
            });
        }
    }

    const onChange = (e) => {
        setSignupForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
 
    return (
        <div className="w-full  border-[#fff  max-w-md text-sm gap-2 py-4 flex flex-col">
            <div className="flex flex-col border-[1px justify-evenly border-[#fff gap-2">
                <div className=" relative ">
                    <label className="label"> Email</label>
                    <MdOutlineAlternateEmail className="icon-class" />
                    <input className="signup-input"
                        type="text"
                        name="email"
                        value={signupForm.email  || ''}
                        onChange={onChange}
                    />
                </div>
                <div className="border-[1px border-[#fff relative ">
                    <label className="label"> Username</label>
                    <AiOutlineUserAdd className="icon-class" />
                    <input className="signup-input "
                        type="text"
                        name="name"
                        value={signupForm.name  || ''} 
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
                    value={signupForm.password  || ''}
                    onChange={onChange} />
            </div>
            <div className="border-[1px border-[#fff relative ">
                <label className="label"> Confirm Password </label>
                <GiConfirmed className={` ${signupForm.password === signupForm.confirm_password ? "text-[#52e952de] scale-105" : "text"} icon-class`} />
                <input className="signup-input2"
                    type="password"
                    name="confirm_password"
                    value={signupForm.confirm_password  || ''}
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
            </div>
        </div>
    )
}

export default SignupBody