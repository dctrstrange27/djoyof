import React, { useEffect } from 'react'
import { useState } from 'react';

import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import { signOut } from "../../Utils";

import { CgSmartHomeLight } from 'react-icons/cg'
import { FcAbout } from 'react-icons/fc'
import { BsInfoCircle } from 'react-icons/bs'
import { MdHomeRepairService } from 'react-icons/md'
import { AiTwotonePhone } from 'react-icons/ai'
import { VscSignIn } from 'react-icons/vsc'

function Nav({ toggleAside, setToggleAside, toggleNav, setToggleNav }) {
    const [winWidth, setWinWidth] = useState(window.innerWidth)
    const [checkNav,setCheckNav] = useState(1)

    const handleResize = () => {
        setWinWidth(window.innerWidth)
        if (winWidth <= 768) {
            setToggleNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (<>
        <div className="relative w-full">
            <MobileNav
                toggleNav={toggleNav}
                setToggleNav={setToggleNav}
                toggleAside={toggleAside} setToggleAside={setToggleAside}
            />
        </div>
        <div className='fixed border-[1px w-full bg-[#141618d5] z-40 shadow-2xl shadow-[#11111191]' >
            <div className='relative w-full max-w-7xl mx-auto md:pl-20 lg:pl-44  drop-shadow-2xl z-50 
                        border-[1px border-green-500 '>
                <div className={`z-50 relative items-center justify-between h-16 hidden md:flex md:justify-between border-[1px border-cyan-500 md:duration-75`}>

                    <nav className='flex justify-evenly gap-4 items-center h-10 border-[1px border-red-500'>
                        <div onClick={(e)=>{
                            e.preventDefault()
                            setCheckNav(1)

                        }} className={`flex hover:text-[#ec8f42] ${checkNav === 1 ? "text-[#ec8f42]" : "text-[#8b8b8b]" }   `}>
                            <BsInfoCircle className='w-[1rem] translate-y-[2px] h-auto mr-2'></BsInfoCircle>
                            <Link to="/" className=" rounded-lg duration-200 ease-linear"> About</Link>
                        </div>
                        <div onClick={(e)=>{
                            e.preventDefault()
                            setCheckNav(2)

                        }} className={`flex hover:text-[#ec8f42] ${checkNav === 2 ? "text-[#ec8f42]" : "text-[#8b8b8b]" }   `}>
                            < MdHomeRepairService className='w-[1rem] translate-y-[2px] h-auto mr-2'></ MdHomeRepairService>
                            <Link to="/" className=" rounded-lg duration-200 ease-linear"> Service</Link>
                        </div>
                        {/* <div className='text-white'>{winWidth}</div> */}
                        <div onClick={(e)=>{
                            e.preventDefault()
                            setCheckNav(3)

                        }} className={`flex hover:text-[#ec8f42] ${checkNav === 3 ? "text-[#ec8f42]" : "text-[#8b8b8b]" }   `}>
                            <AiTwotonePhone className='w-[1rem] translate-y-[2px] h-auto mr-2'></ AiTwotonePhone>
                            <Link to="/" className=" rounded-lg duration-200 ease-linear"> Service</Link>
                        </div>
                    </nav>
                    <div className='flex border-[1px justify-evenly  py-2 items-center'>
                        <div className='flex w-[80px] justify-between border-1px]'>
                            <Link to="/" className="flex justify-center items-center font-normal text-gray-900 rounded-lg p-1 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <VscSignIn className="w-5 h-5 text-[#ff3c3c]" />
                            </Link>
                            <Link to="/Signup" className="  text-white rounded-lg ">Rohan</Link>
                        </div>
                        <img to="/" src={require("../../img/small_logo.png")} className={`bg-green-40  px-10 ${toggleNav && 'hidden'} `}></img>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Nav