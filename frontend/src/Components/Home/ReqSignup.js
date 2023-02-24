import React, { useEffect, useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { Link } from "react-router-dom"
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import LoginBody from '../Login/LoginBody'

const ReqSignup = ({
    userData,
    setUserData,
    setShowForm,
    error,
    showForm,
    loading,
    handleLogin,
    setError,
    setLoading,
    handleLoginUsers,
    hasUser,
    hasUserLog,
    }) => {

    useEffect(()=>{
        handleLoginUsers()
        console.log(hasUser)
    },[])

   

    const [showContinue, setShowCon] = useState(true)
    return (
        <>
            {!hasUser && (<div className="border-[1px border-[#fff] fixed  duration-500 filter backdrop-filter backdrop-blur-sm  flex flex-col-reverse md:justify-center md:items-center h-screen w-full z-[9999]">
                <div className=" bg-[#e3e2e2] border-[1px border-[#fff] drop-shadow-md relative dark:bg-[#1f2021] rounded-xl
                             min-w-[450px] duration-300 transition-all max-w-[750px] md:min-w-[660px] h-[40rem]  flex-col flex
                             justify-center">
                    <RiCloseFill onClick={() => { hasUserLog()  }} className='dark:text-[#fff] text-[#000] hover:scale-150 duration-150 ease-in-out absolute w-5 h-5 right-3 top-3' />
                    <div className="bg-[#fff/20 border-[#Fff] border-[1px flex flex-col justify-center px-7 pb-7 w-full">

                        <div className='border-[1px border-[#fff] flex flex-col items-center justify-center'>
                            <h1 className='dark:text-[#fff] font-bold text-[20px]'>Please Create an Account!</h1>
                            <h3 className='dark:text-[#fff]'>To view this product in detail, please Signup or Login.</h3>
                            <LoginBody 
                                hasUserLog={hasUserLog}
                                userData={userData}
                                setUserData={setUserData}
                                setShowForm={setShowForm}
                                error={error}
                                showForm={showForm}
                                loading={loading}
                                handleLogin={handleLogin}
                                setError={setError}
                                setLoading={setLoading}
                            />
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