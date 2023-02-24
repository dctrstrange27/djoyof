
import Signin from "./Signin"
import ToLogin from "./ToLogin"
import { useEffect, useState } from "react"

const Signupconfig = ({ showContinue,setShowCon,setShowForm,showForm, setUserData,signupForm, loginForm, setLoginForm, loading, setLoading, setSignupForm, error, setError, setData, handleLogin, userName, setUserName, userData }) => {
  return (
    <>
      <Signin
        setShowForm={setShowForm}
        showForm={showForm}
        setUserData={setUserData}
        loading={loading}
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        setLoading={setLoading}
        signupForm={signupForm} 
        setError={setError}
        error={error} 
        setSignupForm={setSignupForm} 
        handleLogin={handleLogin} 
        userData={userData} 
        userName={userName} 
        showContinue={showContinue} 
        setShowCon={setShowCon} 
        
        />
      <ToLogin showContinue={showContinue} setShowCon={setShowCon} userName={userName} />

    </>
  )
}

export default Signupconfig