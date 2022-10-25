import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {FaCodepen} from 'react-icons/fa'
import {BsEye} from 'react-icons/bs'
import {BsEyeSlash} from 'react-icons/bs'
import { userAPI } from '../../Utils'
import {CgCloseR} from 'react-icons/cg'
const ChangePassPortal = ({changePass,setChangePass,email}) => {
  
    const [newPass,setNewPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [error, setError] = useState('')
    const [message, setMessage] = useState('') 
    const [visible, setVisible] = useState('')

    const navigate = useNavigate()

    const changePassword = async()=>{
          setError('')
          try {
            const response = await userAPI.post('/changePass',{
              email_address:email,
              newPassword: newPass,
              confirmPass:confirmPass
            
            })
              
              setMessage(response.data.message)
          } catch (e){
            console.log(e)
            if (e.response.data) {
                return setError(e.response.data.message)
            }
            else{
              console.log("Invalid data!")
            }
          }
    }
  return (
    <>
       {changePass && <div className="fixed border-[1px bg-[#4b4848e1] top-0 flex  justify-center items-center left-0 h-screen w-full  z-[9999]">
        <div className="bg-[#191616] rounded-lg w-[30%] min-w-[500px] max-w-[500px] relative h-[30rem]  flex justify-center">
          <div className="bg-[#fff/20 border-[#Fff]  border-[1px flex flex-col justify-center items-center gap-10 w-[70%]">
            <CgCloseR  onClick={()=>{navigate('/login')}} className="absolute top-3 right-3 text-[#fff] w-5 h-5  duration-600 ease-out hover:scale-105  "/>
            <div className="items-center flex flex-col border-[1px gap-1">
              <h1 className="text-[#fff] text-[25px] font-semibold"> Change Your Password!  </h1>
       
            </div>
              <div className='flex flex-col w-full'>
              <div className="border-[1px border-[#fff relative w-full ">
              {visible ? (
                  <BsEye onClick={() => {
                    setVisible(!visible)
                    console.log(visible)
                  }}
                    className={` w-7 h-4 right-2 top-[1rem] scale-105 text-[#fa9136d5] absolute `} />

                ) : (
                  <BsEyeSlash onClick={() => {
                    setVisible(!visible)
                    console.log(visible)
                  }}
                    className={` w-7 h-4 right-2 top-[1rem] scale-105 text-[#aaa7a7] absolute `} />
                )}
                <FaCodepen className=" w-7 h-5 text-[#fff] top-[.9rem] absolute " />
                <input className="flex component-preview p-4 items-center justify-center gap-2 h-[30px] text-[#fff] w-full text-sm focus:outline-none  leading-2 focus:border-[#c83737]
                                                   dark:border-gray-600 focus:ring  dark:focus:ring-[#c85e378d] my-2 pl-10 rounded-lg border-0 bg-[#ffffff1c]
                                                    transition duration-200 "
                  type={`${visible ? "text" : "password"}`}
                  name="password"
                  placeholder="New Password"
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)} 
                  />
              </div>
              <div className="border-[1px border-[#fff relative w-full">
                <FaCodepen className=" w-7 h-5 text-[#fff] top-[.9rem] absolute " />
                <input className="flex component-preview p-4 items-center justify-center gap-2 h-[30px] text-[#fff] w-full text-sm focus:outline-none  leading-2 focus:border-[#c83737]
                                                   dark:border-gray-600 focus:ring  dark:focus:ring-[#c85e378d] my-2 pl-10 rounded-lg border-0 bg-[#ffffff1c]
                                                    transition duration-200 "
                  type={`${visible ? "text" : "password"}`}
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)} 
                  />
              </div>
              </div>
              <p className="text-[#d42424] text-md">{error}</p>
              <p className="text-[#58c271] text-md">{message}</p>
              <div className="flex w-full">
              <button onClick={()=>{
                  changePassword()
              }} className='text-white bg-[#ff7900] text-[#fff] justify-center w-full font-bold duration-300 hover:scale-105 border-[1px min-w-20 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300
                                 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-800'>  Confirm
               </button>
            </div>
           
          
          </div>
        </div>
      </div>}
    
    
    </>
  )
}

export default ChangePassPortal