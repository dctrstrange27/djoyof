import { Link } from "react-router-dom"

import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";


const ToLogin = ({  setShowCon,showContinue,userName }) => {  
  const [done,setDone] = useState(true)
  
  setTimeout(()=>{
      setDone(false)
  },[3000])

  useEffect(() => {
    setShowCon(false)
  }, [])
  return (
    <>
      {showContinue && ( <div className="fixed border-[1px bg-[#4b4848b9] top-0 flex  justify-center items-center left-0 h-screen w-full  z-[9999]">
        <div className="bg-[#191616b7] rounded-lg w-96 h-60 flex justify-center">
          <div className="bg-[#fff/20 flex flex-col justify-center items-center gap-5 w-[80%]">
            <div className="items-center flex flex-col">
              <h1 className="text-[#fff] font-semibold">Hi {userName} welcome to DJOYOF</h1>
              <h3 className="text-[#fff] font-semibold">Continue to Explore...</h3>
            </div>
            <div className="flex gap-16">
              <Link to='/djoyof' className='text-white bg-[#ff7900] text-[#fff] font-bold duration-300 hover:scale-105 border-[1px min-w-20 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300
                                 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-800'>
                yes</Link>
              <Link to='/login' className='text-white bg-[#ff7900] text-[#fff] duration-300 hover:scale-105 border-[1px min-w-20 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300
                                font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-800'>
                no..</Link>
            </div>
          </div>

        </div>
      </div>)}


    </>
  )
}

export default ToLogin