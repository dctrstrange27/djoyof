import { Link } from "react-router-dom"

import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { RiCloseFill } from 'react-icons/ri'

const ToLogin = ({ setShowCon, showContinue,setHideError, userName }) => {

  useEffect(() => {
    setShowCon(false)
  }, [])

  return (
    <>
      {showContinue && (<div className="fixed bg-[#4b4848b9] top-0 flex
                        justify-center items-center left-0 h-screen w-full z-[9999]">
        <div className="bg-[#191616e4] relative border-[1px] border-[#fff md:rounded-3xl w-full h-full py-12 flex px-12 justify-center transition-all delay-200 duration-300 ease-in-out
                         md:max-w-xl md:max-h-[80vh]   
                         lg:max-w-2xl    
                       ">
          <RiCloseFill onClick={() => { setShowCon(false); setHideError(true) }}
            className='dark:text-[#fff] text-[#fff] absolute w-5 h-5 right-3 top-3 first-letter duration-100 ease-in-out hover:scale-150
                        md:right-5 md:top-5
                ' />
          <div className="bg-[#fff/20 flex flex-col justify-center items-center gap-5">
            <div className="items-center flex flex-col gap-4 justify-center text-center">

              <img className=" rounded-xl min-w-[200px] max-w-[400px]  w-auto" src={require("../../img/welcome.png")} />
              <h1 className="text-[#fff]  font-tilt text-xl">Hey! {userName} Welcome</h1>
              <h3 className="text-[#c4c0c0] font-pop font-semibold">Rise to the occasion with Djoyof Baking's artisanal breads!</h3>
            </div>
            <div className="flex flex-col w-full gap-3">
              <Link to='/djoyof' className='w-full font-tilt h-12 signup-button hover:scale-105 hover:from-[#d0253c] hover:to-[#be5e3b] min-w-20 focus:ring-4 focus:outline-none '>
                GET STARTED</Link>
              <Link to='/Signin' onClick={() => { setShowCon(false) }} className='w-full font-tilt signup-button hover:scale-105 hover:from-[#d0253c] hover:to-[#be5e3b] min-w-20 focus:ring-4 focus:outline-none '>
                LOG IN</Link>
            </div>
          </div>

        </div>
      </div>)}


    </>
  )
}

export default ToLogin  