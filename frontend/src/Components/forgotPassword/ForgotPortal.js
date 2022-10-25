import { Link } from "react-router-dom"
import {FaCodepen} from 'react-icons/fa'
import {CgCloseR} from 'react-icons/cg'
import { userAPI } from "../../Utils"
import { useState,useEffect } from "react"
const ForgotPortal = ({show,setShow,loading,setLoading,email,changePass,setChangePass}) => { 

    const [error,setError] = useState('')
    const [code, setCode] = useState('')
    const [message, setMessage] = useState('')
    const [email_address,setEmail] = useState('')

    console.log(email)
    useEffect(() => {
      setEmail(email)
    }, [])

    const confirmCode = async()=>{
        try {
          const res = await userAPI.post("/confirmCode",{code})
          setMessage(res.data.message)
          setChangePass(true)
          setShow(!show)
        } catch (e) {
            console.log(e)
            if (e.response.data) setError(e.response.data.message)
        }
    }
  return (
    <>
        {show && <div className="fixed border-[1px bg-[#4b4848e1] top-0 flex  justify-center items-center left-0 h-screen w-full  z-[9999]">
        <div className="bg-[#191616] rounded-lg w-[30%] min-w-[500px] max-w-[500px] relative h-[30rem]  flex justify-center">
          <div className="bg-[#fff/20 border-[#Fff  border-[1px flex flex-col justify-center items-center gap-10 w-[70%]">
            <CgCloseR onClick={()=>{setShow(!show);setLoading(false)}} className="absolute top-3 right-3 text-[#fff] w-5 h-5  duration-600 ease-out hover:scale-105  "/>
            <div className="items-center flex flex-col border-[1px gap-5">
              <h1 className="text-[#fff] text-[25px] font-semibold"> Recovery Code  </h1>
              <h1 className="text-[#fff] font-semibold">We've sent recovry  code to your Gmail Acount </h1>
              <a href="https://mail.google.com/mail/u/0/?tab=wm#inbox" className="text-sm text-[#5d82d9]"> {email}</a>
              <h3 className="text-[#fff] font-semibold">Please check your account! </h3>
            </div>
            <div className="border-[1px border-[#fff relative w-full ">
                <FaCodepen className=" w-7 h-5 text-[#fff] top-[.9rem] absolute " />
                <input className="flex component-preview p-4 items-center justify-center gap-2 h-[30px] text-[#fff] w-full text-sm focus:outline-none  leading-2 focus:border-[#c83737]
                                                   dark:border-gray-600 focus:ring  dark:focus:ring-[#c85e378d] my-2 pl-10 rounded-lg border-0 bg-[#ffffff1c]
                                                    transition duration-200 "
                  type="text"
                  name="password"
                  placeholder="Recovery Code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)} 
                  />
                    <div className="flex justify-center">
                    <p className="text-[#cc2525] text-md">{error}</p>
                    </div>
              </div>
              <div className="flex w-full gap-16">
              <button onClick={()=>{
                   confirmCode()
              }} className='text-white bg-[#ff7900] text-[#fff] justify-center w-full font-bold duration-300 hover:scale-105 border-[1px min-w-20 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300
                                 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-800'>  Confirm
               </button>
            </div>
              <div className="flex flex-col items-center">
              <p className="text-[#fff] text-md">didn't receive a code?</p>
              <h6 className="text-[#3b55d6]"> Resend</h6>
              </div>
          
          </div>
        </div>
      </div>}

    </>
  )
}

export default ForgotPortal 