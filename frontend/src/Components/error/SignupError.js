import React from 'react'
import { AiOutlineLoading } from "react-icons/ai"
import {VscError} from "react-icons/vsc"

const SignupError = ({ error, loading }) => {

  return (
    <>
      <div className={`justify-center ${error.length > 0 ? 'block' : 'hidden'}`}>
        <AiOutlineLoading className={`my-2 mx-auto w-5 h-5 text-orange-500 text-[#fff] animate-spin ${loading ? 'block' : 'hidden'}`} />
        <p className={`text-center text-xs text-[#fff] ${loading ? 'block' : 'hidden'}`}>Analyzing..</p>
        <div className='bg-[#ff5c5c] flex  rounded-lg p-2 text-center my-2'>
           <p className={`text-sm grow text-[#fff]  font-mulish `}>{error}</p>
           <VscError className=' flex-none w-7 h-5 text-[#fff]'></VscError>
        </div>
      </div>
    </>
  )
}

export default SignupError