import React, { useState } from 'react'
import ForgotPortal from './ForgotPortal'
import ForgotPass from './ForgotPass'
import ChangePassPortal from './ChangePassPortal'
const ForgotConfig = () => {

    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email_address, setEmail] = useState("");
    const [showChangePass, setShowChangePass] = useState(false)



  return (
    <>
        <ForgotPass loading={loading} email_address={email_address} setEmail={setEmail}  setLoading={setLoading} setShow={setShow} show={show}/>
        <ForgotPortal changePass={showChangePass} setChangePass={setShowChangePass}  email={email_address} setShow={setShow} loading={loading} setLoading={setLoading} show={show}/>
        <ChangePassPortal email={email_address} changePass={showChangePass} setChangePass={setShowChangePass}/>
    </>
  )
}

export default ForgotConfig 