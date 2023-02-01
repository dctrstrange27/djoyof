
import Signup from "./Signin"
import ToLogin from "./ToLogin"
import { useEffect, useState } from "react"


const Signupconfig = ({ showContinue, signupForm, loginForm, setLoginForm, loading, setLoading, setSignupForm, error, setError, setData, handleLogin, setShowCon, userName, setUserName, userData }) => {
  return (
    <>
      <Signup
        loading={loading}
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        setLoading={setLoading}
        signupForm={signupForm} 
        setError={setError}
        error={error} 
        setSignupForm={setSignupForm} 
        handleLogin={handleLogin} 
        showContinue={showContinue} 
        userData={userData} 
        userName={userName} 
        setUserName={setUserName} 
        setShowCon={setShowCon} />
      <ToLogin showContinue={showContinue} setShowCon={setShowCon} userName={userName} />

    </>
  )
}

export default Signupconfig