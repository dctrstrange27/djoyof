
import Signup from "./Signup"
import ToLogin from "./ToLogin"
import { useEffect, useState } from "react"


const Signupconfig = ({showContinue,setShowCon,userName,setUserName,userData}) => {
  const[load, setLoad] = useState(false)

 return (
    <>
    <Signup  showContinue={showContinue} userData={userData} userName={userName} setUserName={setUserName} setShowCon={setShowCon} />
    <ToLogin showContinue={showContinue}  setShowCon={setShowCon} userName={userName}/>

    </>
  )
}

export default Signupconfig