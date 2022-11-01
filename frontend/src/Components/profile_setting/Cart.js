import React from 'react'
import { getUser } from '../../Utils/index'
import { GoVerified } from 'react-icons/go'
import { CgMail } from 'react-icons/cg'
import {AiTwotoneSetting} from 'react-icons/ai'
import { Link, Outlet } from 'react-router-dom'
const Cart = () => {
    return (
        <>
            <div className='w-[70rem]  dark:text-[#fff] flex justify-center h-screen border-[1px     border-[#Fff]'>
                <div className='flex flex-row h-[17rem] gap-10 '>
                    <div className='border-[1px flex justify-center items-center '>
                        <img src={getUser().profile_picture}
                            className='rounded-full w-[120px] border-[3px] border-one h-auto drop-shadow-2xl dark:shadow-[#243864ce] dark:shadow-2xl '
                        >
                        </img>
                    </div>
                    <div className='w-50 border-[1px
                         flex font-pop  flex-col gap-2 justify-center'>
                        <h1 className='text-[25px] uppercase font-bold  '>{getUser().customer_name} </h1>
                        <div className=' inline-flex gap-2 items-center'>
                            <CgMail className='w-5 h-5'></CgMail>
                            <h3 className='text-[15px] '>{getUser().email_address} </h3>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <GoVerified className='w-7 h-7 text-[#4c88d0]'></GoVerified>
                            <h3 className='text-[15px] '> verified </h3>
                        </div>
                        <Link to='Profile' className=' bg-Ofour max-w-[120px] text-sm py-1 items-center flex justify-center gap-2 rounded-md'>
                            <AiTwotoneSetting className="w-4 h-4"></AiTwotoneSetting>
                            <h1>Edit Profile </h1>
                        </Link>
                    </div>       
                </div>
            </div>
        </>
    )
}

export default Cart