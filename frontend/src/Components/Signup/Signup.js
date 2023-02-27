import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import SignupBody from './SignupBody'


const Signup = ({ 
    loading, 
    showForm, 
    setShowForm, 
    setLoading,
    error, 
    handleLogin,
    hideError
    }) => {

    return (
        <div className="flex md:w-full flex-col px-10 md:gap-5 border-[#d90045] border-[1px] md:px-20">
        <h1 className="font-pacifico text-3xl my-4 text-[#fff] tracking-widest" >Sign-up</h1>
        {/* input */}
        <SignupBody
          loading={loading}
          showForm={showForm} 
          setShowForm={setShowForm} 
          setLoading={setLoading}
          error={error} 
          handleLogin={handleLogin}
          hideError={hideError}
        />
      </div>
       
    )
}

export default Signup