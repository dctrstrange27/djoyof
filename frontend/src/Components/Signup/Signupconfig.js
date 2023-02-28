
import Signin from "./Signin"
import ToLogin from "./ToLogin"
import { useState } from "react"

const Signupconfig = ({
  hasUserLog,
  showContinue,
  setShowCon,
  setShowForm,
  showForm,
  setUserData,
  loginForm,
  setLoginForm,
  loading,
  setLoading,
  error,
  setError,
  handleLogin,
  userName,
  userData,
}) => {
  const [hideError, setHideError] = useState(false)
  return (
    <>
      <Signin
        setShowForm={setShowForm}
        showForm={showForm}
        hasUserLog={hasUserLog}
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