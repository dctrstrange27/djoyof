
import Signin from "./Signin"
import ToLogin from "./ToLogin"
import { useEffect, useState } from "react"

const Signupconfig = ({ 
   hasUserLog,showContinue,setShowCon,setShowForm,showForm, setUserData, 
   loginForm, setLoginForm, loading, setLoading, error, setError, setData,
   handleLogin, userName, setUserName, userData, 
  }) => {

  
  const [hideError, setHideError] = useState(false)
 
  return (
    <>
      <Signin
        hasUserLog={hasUserLog}
        setShowForm={setShowForm}
        showForm={showForm}
        setUserData={setUserData}
        loading={loading}
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        setLoading={setLoading}
        setError={setError}
        error={error} 
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