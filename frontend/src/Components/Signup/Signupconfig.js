
import Signup from "./Signup"
import ToLogin from "./ToLogin"
import { useEffect, useState } from "react"


const Signupconfig = ({ showContinue, data,error,setError, setData, handleLogin, setShowCon, userName, setUserName, userData }) => {
  const [load, setLoad] = useState(false)

  return (
    <>
      <Signup data={data} setError={setError}
        error={error} setData={setData} handleLogin={handleLogin} showContinue={showContinue} userData={userData} userName={userName} setUserName={setUserName} setShowCon={setShowCon} />
      <ToLogin showContinue={showContinue} setShowCon={setShowCon} userName={userName} />

    </>
  )
}

export default Signupconfig