import React from 'react'
import { signOut } from '../../Utils'
import { useNavigate } from 'react-router-dom'
import { RiCloseFill } from 'react-icons/ri'
const SignoutPortal = ({ signout, setSignout ,setLoading}) => {

  let navigate = useNavigate()

  function signOutAccount() {
    signOut()
    setSignout(false)
    navigate('/Signin')
  }

  return (
    <>
      {signout &&
        <div className="border-[1px] fixed  duration-500 filter backdrop-filter backdrop-blur-sm  flex flex-col-reverse md:justify-center md:items-center h-screen w-full z-[9999]">
          <div className=" bg-[#e3e2e2]  drop-shadow-md relative dark:bg-[#1f2021] rounded-xl  min-w-[450px] duration-300 transition-all  max-w-[750px] md:min-w-[660px] h-[20rem] md:h-[12rem] flex-col flex justify-center">
            <RiCloseFill onClick={() => { setSignout(false) }} className='text-[#fff] absolute w-5 h-5 right-3 top-3' />
            <div className="bg-[#fff/20 border-[#Fff]  border-[1px flex flex-col justify-start px-7 pb-7 w-full">
              <h1 className='dark:text-[#fff] font-bold text-[20px]'>Sign Out</h1>
              <h3 className='dark:text-[#fff]'>You are about to be signed out, Do you wish to proceed?</h3>
            </div>
            <div className='text-[#fff] absolute bottom-0 rounded-b-xl flex border-[1px bg-four w-full gap-4 mt-5 items-center flex-col md:flex-row md:justify-end p-3 py-3 pr-5'>
              <button onClick={() => { setLoading(false); signOutAccount() }} 
              className=" bg-Othree hover:bg-Ofour w-full md:w-auto dark:bg-Ofour dark:hover:bg-Ofive hover:scale-105 duration-200  rounded-lg py-2 md:py-2 md:px-4">
                ok
              </button>
              <button onClick={() => {  setSignout(false) }} 
              className=" bg-Othree hover:bg-Ofour w-full  md:w-auto dark:bg-Otwo dark:hover:bg-Othree hover:scale-105 duration-200 rounded-lg py-2 md:py-2  md:px-4" >No</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default SignoutPortal