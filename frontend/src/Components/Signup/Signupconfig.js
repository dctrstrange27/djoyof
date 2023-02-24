
import Signin from "./Signin"
import ToLogin from "./ToLogin"
import { useEffect, useState } from "react"

const Signupconfig = ({ showContinue,setShowCon,setShowForm,showForm, setUserData,signupForm, loginForm, setLoginForm, loading, setLoading, setSignupForm, error, setError, setData, handleLogin, userName, setUserName, userData }) => {
  
  const [hideError, setHideError] = useState(false)
 
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
        hideError={hideError}
        setHideError={setHideError}
        />
      <ToLogin showContinue={showContinue} setHideError={setHideError} setShowCon={setShowCon} userName={userName} />

    </>
  )
}

export default Signupconfig