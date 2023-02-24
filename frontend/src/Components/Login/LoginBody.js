import React from 'react'
import { RiLockPasswordLine } from 'react-icons/ri'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import SignupError from "../error/SignupError";
import { GoSignIn } from "react-icons/go"
import SignupGoogle from "../Signup/SignupGoogle";
import { useEffect, useState } from "react";
import { API, getRemembered, } from "../../Utils";
const LoginBody = ({  
    userData, 
    setUserData,
    setShowForm,
    error,
    showForm,
    loading,
    handleLogin,
    setError,
    setLoading,
    hasUserLog,
}) => {
  
    const [loginForm, setLoginForm] = useState([
        {
          email: "example@example.com",
          password: "mypassword",
        }
      ])
      function useEffectOnce(effect) {
        useEffect(effect, []);
      }
    
      const { email, pass } = loginForm
    
      const handleLog = async () => {
        setLoading(true)
        const user = await handleLogin(1, loginForm)
        hasUserLog()
        if (user) {
          setLoginForm({
            email: '',
            password: '',
          });
          setError("")
        }
      }
      
      useEffectOnce(() => {
        setError("")
        const remembered = getRemembered()
        if (remembered) {
          setLoginForm(() => ({ ...loginForm, email: email, password: pass }))
        }
      });
    
      const onChange = (e) => {
        setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
      }
  return (
   <>
    <div className="w-full border-[#fff] border-[1px max-w-md text-sm gap-2 py-4 flex flex-col">
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
          </div>
          <div className="border-[1px border-[#fff relative ">
            <label className="label"> Password </label>
            <RiLockPasswordLine className="icon-class" />
            <input className="signup-input2  "
              type="password"
              name="password"
              value={pass}
              onChange={onChange}
            />
          </div>

          <SignupError  error={error} loading={loading} ></SignupError>
          {/* BUTTON */}
          <div className="flex">
            <div onClick={() => setShowForm(!showForm)} className="text-[#227be2] font-mulish tracking-wide hover:scale-105 font-bold">
              Signup
            </div>
          </div>
          <div className="flex flex-col border-[#fff w-full gap-2 justify-center">
            <div className="flex justify-center items-center border-[1px w-full border-[#fc2020]">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleLog()

                }}
                className=" signup-button hover:scale-105 hover:from-[#d0253c] hover:to-[#be5e3b] min-w-20 focus:ring-4 focus:outline-none "
              >Log-in
                <GoSignIn className="h-4 w-4 ml-3"></GoSignIn>
              </button>
            </div>
            <div className="flex justify-evenly items-center py-5 w-full">
              <div className="border [.5px] border-b-[#969191a6]  w-full"></div>
              <p className="text-[#e5e7e9] py-3 font-mulish tracking-wide mx-10 hover:scale-105 font-bold">or</p>
              <div className="border [.5px] border-b-[#969191a6] w-full"></div>
            </div>
            <div className="flex justify-center">
              <SignupGoogle hasUserLog={hasUserLog} userData={userData} setUserData={setUserData} setLoginForm={setLoginForm} loginForm={loginForm}></SignupGoogle>
            </div>
          </div>
        </div>
   
   </>
  )
}

export default LoginBody