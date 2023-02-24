import React, { useEffect, useState } from "react";


import LoginBody from "./LoginBody";

export const Login = ({ handleLogin, hasUserLog, userData, setShowForm, showForm, error, loading, setLoading,
  setUserData, setError }) => {
  
  return (
    <>
      <div className="flex md:w-full flex-col px-10 md:gap-5 border-[#d90045] border-[1px md:px-20 justify-center focus:outline-none items-center">
       <h1 className="font-pacifico text-3xl my-4 text-[#fff] tracking-widest" >Log-in</h1>
        {/* input */}
        <LoginBody
        hasUserLog={hasUserLog}
          handleLogin={handleLogin}
          setError={setError}
          setLoading={setLoading}
          userData={userData} 
          setUserData={setUserData}
          setShowForm={setShowForm}
          error={error}
          showForm={showForm}
          loading={loading}
        ></LoginBody>
      </div>
    </>
  );
};
export default Login;

