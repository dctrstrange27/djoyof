import React, { useState } from 'react'
import ForgotPortal from './ForgotPortal'
import ForgotPass from './ForgotPass'
import ChangePassPortal from './ChangePassPortal'
import { GiConsoleController } from 'react-icons/gi'
const ForgotConfig = () => {

  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email_address, setEmail] = useState("");
  const [showChangePass, setShowChangePass] = useState(false)


  const [time, setTime] = useState('')
  const [startTime, setStartTime] = useState(false)


  return (
    <>
      <ForgotPass
        loading={loading}
     
        email_address={email_address}
        setEmail={setEmail}
        setLoading={setLoading}
        setShow={setShow}
        show={show} 
        time={time}
        setTime={setTime}
        setStartTime={setStartTime}
        startTime={startTime}
      
        />
      <ForgotPortal
        changePass={showChangePass}
        setChangePass={setShowChangePass}
        email={email_address}
        setShow={setShow}
        loading={loading}
        setLoading={setLoading}
        show={show} 
        time={time}
        setTime={setTime}
        setStartTime={setStartTime}
        startTime={startTime}
      
        />
      <ChangePassPortal email={email_address} changePass={showChangePass} setChangePass={setShowChangePass} />
    </>
  )
}

export default ForgotConfig 