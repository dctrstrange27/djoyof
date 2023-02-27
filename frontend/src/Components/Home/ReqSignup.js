import React, { useEffect, useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
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
    showReqForm,
    setShowReqForm,
    handleShowReqForm,
}) => {

    useEffect(() => {
        handleLoginUsers()
    
    }, [])
    
    return (
        <>
            {showReqForm && (<div className="border-[1px border-[#fff] fixed  duration-500 filter backdrop-filter backdrop-blur-sm  flex flex-col-reverse md:justify-center md:items-center h-screen w-full z-[9999]">
                <div className="bg-[#e3e2e2] border-[1px border-[#fff] drop-shadow-md relative dark:bg-[#1f2021] rounded-xl
                             min-w-[450px] duration-300 transition-all max-w-[750px] md:min-w-[660px] h-[40rem]  flex-col flex
                             justify-center">
                    <RiCloseFill onClick={() => { setShowReqForm(false) }} className='dark:text-[#fff] text-[#000] hover:scale-150 duration-150 ease-in-out absolute w-5 h-5 right-3 top-3' />
                    <div className="bg-[#fff/20 border-[#Fff] border-[1px flex flex-col justify-center px-7 pb-7 w-full">

                        <div className='border-[1px border-[#fff] flex flex-col items-center justify-center'>
                            <h1 className='dark:text-[#fff] font-bold text-[20px]'>Please Create an Account!</h1>
                            <h3 className='dark:text-[#fff]'>To view this product in detail, please Signup or Login.</h3>
                            <LoginBody
                                showReqForm={showReqForm}
                                setShowReqForm={setShowReqForm}
                                handleShowReqForm={handleShowReqForm}
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
                </div>
            </div>)}
        </>
    )
}

export default ReqSignup