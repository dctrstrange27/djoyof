import React, { useState } from 'react'
import ForgotPortal from './ForgotPortal'
import ForgotPass from './ForgotPass'

const ForgotConfig = () => {

    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
  return (
    <>
        <ForgotPass loading={loading} setLoading={setLoading} setShow={setShow} show={show}/>
        <ForgotPortal setShow={setShow} loading={loading} setLoading={setLoading} show={show}/>
    </>
  )
}

export default ForgotConfig