import React, { useEffect } from 'react'
import { useState } from 'react';

import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import {signOut } from "../../Utils";

import { CgSmartHomeLight } from 'react-icons/cg'
import { FcAbout } from 'react-icons/fc'
import { BsInfoCircle } from 'react-icons/bs'
import { MdHomeRepairService } from 'react-icons/md'
import { AiTwotonePhone } from 'react-icons/ai'
import {VscSignIn} from 'react-icons/vsc'

function Nav({ toggleAside, setToggleAside, toggleNav, setToggleNav }) {
    const [winWidth, setWinWidth] =useState(window.innerWidth)
       
    const handleResize = () =>{
        setWinWidth(window.innerWidth)
        if(winWidth <= 768){
            setToggleNav(false)
        }
    }
    useEffect(() =>{
        window.addEventListener('resize',handleResize)
        return () => {
            window.removeEventListener('resize',handleResize)
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
        <div className={`border-[#e6761b98] border-b-[.1px -translate-y-7 md:bg-green-00 md:-translate-y-0 w-full py-3 md:px-0  drop-shadow-2xl bg-[#17181be0] fixed z-50 xl:px-[10rem]`

        }>
            <div className={`fixed flex-col md:h-auto 2xl:px-[10rem] bg-whit  md:border-[0px] md:py-0 z-50 flex md:flex-row md:justify-center md:items-center bg-whie  mt-[4.5rem] -right-32 
                            ${toggleNav && " px-5 py-4 -right-0 fixed border-[1px] bg-[#1a1b1fe0]"} md:relative md:right-0 md:mt-0 md:duration-75`}>
                {/** Top Nav */}
                {/* <img to="/" src={require("../../img/small_logo.png")} className={`bg-green-40 w-fit md:px-3 ${toggleNav && 'hidden'}`}></img> */}
                <nav className={`relative md:grow md:pl-16 md:flex md:text-sm font-pop font-light tracking-wide md:flex-row md:gap-5 md:py-1  md:items-center md:border-[1px 
                                ${toggleNav && "flex flex-col"}
                     `}>
                    <div className='flex'>
                        <BsInfoCircle className='w-[1rem] h-auto mr-2  text-[#D98743]'></BsInfoCircle>
                        <Link to="/" className="  text-white rounded-lg hover:bg-slate-100  hover:text-slate-900"> About</Link>
                    </div>
                    <div className='flex'>
                        <MdHomeRepairService className='w-5 h-5 mr-2  text-[#D98743]'></MdHomeRepairService>
                        <Link to="/" className="  text-white rounded-lg hover:bg-slate-100  hover:text-slate-900"> service</Link>
                    </div>
                    {/* <div className='text-white'>{winWidth}</div> */}
                    <div className='flex'>
                        <AiTwotonePhone className='w-5 h-5 mr-2  text-[#D98743]'></AiTwotonePhone>
                        <Link to="/" className="  text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"> Contact us</Link>
                    </div>

                </nav>
                <div className='flex xl:translate-x-[8rem]'>
                        <VscSignIn className='w-5 h-5 mr-2  text-[#f43f5e]'></VscSignIn>
                        <Link onClick={signOut} to="/Signup" className="  text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"> Sign-in</Link>
                    </div>
                <img to="/" src={require("../../img/small_logo.png")} className={`bg-green-40 xl:translate-x-[8rem] px-10 ${toggleNav && 'hidden'} ` }></img>
            </div>
        </div>
    </>
    )
}

export default Nav