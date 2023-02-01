import React, { useState, useEffect, useInsertionEffect } from "react";
import { API, userAPI, saveUser, rememberMe, getRemembered, userGoogleAPI, getUser } from "../../Utils";

import { RiLockPasswordLine } from 'react-icons/ri'
import { Link } from "react-router-dom";
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { GoogleLogin } from '@react-oauth/google';
import jwt_Decode from 'jwt-decode'
import SignupError from "../error/SignupError";
import { GiConfirmed, GiConsoleController } from "react-icons/gi"
import { GoSignIn } from "react-icons/go"
import { useNavigate } from "react-router-dom";

import { ImCart } from "react-icons/im"
import { AiOutlineUserAdd } from "react-icons/ai"


export const Login = ({ handleLogin,setShowForm,showForm, loginForm, setLoginForm, error, loading, setLoading, setError, data, setData, login, setUserData, setUseGoogle, useLocal, setUseLocal }) => {

  const { email, password } = loginForm

  //console.log(loading)

  const onChange = (e) => {
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  // useEffect(()=>{
  //   setData([...data,email_address,password])
  //   console.log(data)
  // },[])

  // let navigate = useNavigate();
  // let googleAccountCredentials = ""

  // // const handleLog =(callback) => {

  // //     console.log("First function");
  // //     callback()  
  // // }
  // // const loginUser=()=>{

  // //   console.log("Second function");
  // // }

  async function handleLog(){  
    setLoading(true)
    const res = await handleLogin(1,loginForm)
    return res 
  }

  // const signIn = async () => {
  //   const mod = 1
  //   console.log(mod)

  //   try {
  //     console.log("use Local", useLocal)
  //     setError('')
  //     setLogin(!login)
  //     setUseLocal(true)
  //     const response = await handleLogin(mod,email_address,password)
  //     console.log(response)
  //     saveUser(response);
  //     setUserData(response)
  //     if (remember) rememberMe(email_address, password)
  //     navigate("/djoyof"); 

  //   } catch (e) {
  //     console.log(e);
  //      setError(e.response.data.error_message);
  //     setLoading(false)
  //   }
  // };

  // const createGoogleAccount = async(info)=>{
  //     try {
  //         const res = await userGoogleAPI.post("/createGoogleAccount",
  //         {email_address:info.email,
  //           customer_name:info.name,
  //           picture:info.picture,
  //           verified:info.email_verified,
  //         })
  //         setUseGoogle(true);saveUser(res);navigate('/djoyof');
  //     } catch (error) {console.log(error)}
  // }

  useEffect(() => {
    const remembered = getRemembered()
    if (remembered) { setLoginForm({ ...loginForm, email: email, password: password }) }
  }, []
  )
  // const [openTab, setOpenTab] = React.useState(1)
  // const [values, setValues] = React.useState({ password: "", showPassword: false, });

  return (
    <>
      <div className="flex md:w-full flex-col px-10 md:gap-5 border-[#d90045] border-[1px md:px-20 justify-center focus:outline-none
                                     items-center">
        {/* input */}
        <div className="w-full  border-[#fff text-sm gap-2 py-4 flex flex-col">
          <h1 className="font-pacifico text-3xl my-4 text-[#fff] tracking-widest" >Log-in</h1>
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
              value={password}
              onChange={onChange} />
          </div>

          <SignupError error={error} loading={loading} ></SignupError>
          {/* BUTTON */}
          <div className="flex">
            <div onClick={()=> setShowForm(!showForm)} className="text-[#227be2] font-mulish tracking-wide hover:scale-105 font-bold">
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
              <div className="border [.5px] border-b-[#969191a6]   w-full"></div>
            </div>
            <div className="flex justify-center">
              <GoogleLogin theme="filled_black" size="large"
                onSuccess={credentialResponse => {
                  //    googleAccountCredentials = jwt_Decode(credentialResponse.credential)
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

    </>
  );
};
export default Login;
