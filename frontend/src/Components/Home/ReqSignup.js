import React, { useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { Link } from "react-router-dom"
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
const ReqSignup = () => {

    const [showContinue, setShowCon] = useState(true)

    return (
        <>
            {showContinue && (<div className="border-[1px border-[#fff] fixed  duration-500 filter backdrop-filter backdrop-blur-sm  flex flex-col-reverse md:justify-center md:items-center h-screen w-full z-[9999]">
                <div className=" bg-[#e3e2e2] border-[1px] border-[#fff] drop-shadow-md relative dark:bg-[#1f2021] rounded-xl
                             min-w-[450px] duration-300 transition-all max-w-[750px] md:min-w-[660px] h-[40rem]  flex-col flex
                             justify-center">
                    <RiCloseFill className='dark:text-[#fff] text-[#000]  absolute w-5 h-5 right-3 top-3' />
                    <div className="bg-[#fff/20 border-[#Fff]  border-[1px flex flex-col justify-start px-7 pb-7 w-full">
                        <h1 className='dark:text-[#fff] font-bold text-[20px]'>Please Create an Account!</h1>
                        <h3 className='dark:text-[#fff]'>To view this product in detail, please Signup or Login.</h3>
                        <div className='mt-5'>
                            <div className="flex flex-col border-[1px justify-evenly border-[#fff gap-2">
                                <div className=" relative ">
                                    <label className="label"> Email</label>
                                    <MdOutlineAlternateEmail className="icon-class" />
                                    <input className="signup-input"
                                        type="text"
                                        name="email"
                                    />
                                </div>
                            </div>
                            <div className="border-[1px border-[#fff relative ">
                                <label className="label"> Password </label>
                                <RiLockPasswordLine className="icon-class" />
                                <input className="signup-input2  "
                                    type="password"
                                    name="password"
                                />
                            </div>
                            <p className='text-[#fff] text-end my-2'>Forgot Password?</p>
                            <div className="flex flex-col w-full gap-3">
                                <Link to='/djoyof' className='w-full font-pops text-md h-10 signup-button hover:scale-105 hover:from-[#d0253c] hover:to-[#be5e3b] min-w-20 focus:ring-4 focus:outline-none '>
                                    Login</Link>
                                <div className='flex justify-center'>
                                <p className='text-[#fff] font-pops font-bold mx-2 my-2'>Not a Member?</p>
                                <button className='text-[#fff] my-2'> Sign up</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='text-[#fff] absolute bottom-0 rounded-b-xl flex border-[1px bg-four w-full gap-4 mt-5 items-center flex-col md:flex-row md:justify-end p-3 py-3 pr-5'>
              <button 
              className=" bg-Othree hover:bg-Ofour w-full md:w-auto dark:bg-Ofour dark:hover:bg-Ofive hover:scale-105 duration-200  rounded-lg py-2 md:py-2 md:px-4">
                ok
              </button>
              <button 
              className=" bg-Othree hover:bg-Ofour w-full  md:w-auto dark:bg-Otwo dark:hover:bg-Othree hover:scale-105 duration-200 rounded-lg py-2 md:py-2  md:px-4" >No</button>
            </div> */}
                </div>
            </div>)}
        </>
    )
}

export default ReqSignup