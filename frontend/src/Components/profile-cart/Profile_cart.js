import React, { useState } from 'react'
import { getUser } from '../../Utils/index'
import { GoVerified } from 'react-icons/go'
import { CgMail } from 'react-icons/cg'
import { AiTwotoneSetting } from 'react-icons/ai'
import { Link, Outlet } from 'react-router-dom'
import Cart from './Cart'
import {HiShoppingCart} from 'react-icons/hi'
import { MdLocalShipping} from "react-icons/md"
import {MdOutlineDownloadDone,  MdCancel} from 'react-icons/md'
import Icons from './Icons'
import { setTab } from '../../Utils/index'
import {FaTrashAlt} from 'react-icons/fa'
const Profile_cart = ({currentTab, setCurrentTab,cartItems,setCartItems}) => {

    const Icon = [
        HiShoppingCart,
        MdLocalShipping,
        MdCancel,
        MdOutlineDownloadDone,
    ]
    return (
        <>
            <div className='w-[70rem]  dark:text-[#fff] flex flex-col  h-screen border-[1px  border-[#Fff]'>
                <div className='flex flex-row h-[17rem] gap-10 border-[1px justify-center    border-[#Fff] '>
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
                <div className='flex  flex-col border-[1px h-80 gap-2'>
                    <div className='flex justify-evenly h-20 md:h-10 bg-[#5ee7c5da px-2 border-[1px'>
                        <div className='bg-on h-full grid grid-cols-2 px-5  md:grid-cols-4 items-center font-pop text-sm  border-[#dedede76] justify-evenly m-auto w-[400px]  md:w-[600px]'>
                            {[
                                ['Cart',0],
                                ['to-receive',1,],
                                ['cancelled',2],
                                ['Completed',3],
                            ].map(([title,idx]) => (
                                <button  onClick={()=>{  setCurrentTab(idx)}} key={idx}  className={`${idx === idx ? " dark:hover:bg-four hover:bg-[#e4e4e4] hover:duration-200  hover:scale-105":""} "text-sm flex  justify-center gap-5 border-l-[.5px] tracking-wider py-2 hover:scale-105 hover:duration-600"`}>
                                    <Icons key={idx}  Icon={Icon[idx]}/>
                                    {title}</button>
                            ))}
                        </div>
                    </div>
                     
                    <div className='h-full py-2 border-b-1  border-[#fff] bg-[#5ee7c5da'>
                            <div className={`${currentTab === 0 ? "visible":"hidden"}  `}>
                                <Cart  cartItems={cartItems}
                                       setCartItems={setCartItems}/>
                                       </div>
                            <div className={`${currentTab === 1 ? "visible":"hidden"}`}>to-receive</div>
                            <div className={`${currentTab === 2 ? "visible":"hidden"}`}>cancelled</div>
                            <div className={`${currentTab === 3 ? "visible":"hidden"}`}>Completed</div>



                    </div>
                 
                </div>
             
            </div>
     
        </>
    )
}

export default Profile_cart