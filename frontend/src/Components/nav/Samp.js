import React from 'react'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5"
import { MdHomeRepairService } from 'react-icons/md'
import { BsInfoCircleFill } from 'react-icons/bs'
import { AiTwotonePhone } from 'react-icons/ai'
import { VscSignIn } from 'react-icons/vsc'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoSettings } from 'react-icons/io5'
import { BsBoxSeam } from "react-icons/bs"
import { CgProfile } from 'react-icons/cg'
import { IoIosHelpCircle } from 'react-icons/io'
import { useState } from 'react'
import { signOut } from "../../Utils";
const Samp = ({ userData, togs, setTogs, hide, setHide }) => {

    function resetHide(){
        setHide(false)
    }
    const [checkNav, setCheckNav] = useState(1)
    return (
        <>
            <div className='relative max-w-[90rem] border-[1px border-green-500 h-16 mx-auto min-w-sm  z-40'>

                <div className='absolute font-medium font-nsans first:text-[1.5rem] tracking-wide inset-y-0 left-7 md:left-10 lg:left-14 xl:left-20  border-[1px flex gap-5 items-center justify-between h-16'>
                    <div className=' tracking-wide inset-y-6 mr-10 hidden lg:block '>
                        <img src={require("../../img/namelogo.png")} className=""></img>
                    </div>
                    <Link onClick={(e) => {
                        setCheckNav(1)
                        setTogs(!togs)
                        console.log(togs)
                    }} to='Main' className={`md:hidden text-white text-sm flex hover:text-[#ec8f42] ${checkNav === 1 ? "text-[#ec8f42]" : "text-[#c7c5c5]"} `}>
                        <GiHamburgerMenu className='w-[1rem] translate-y-[1px] h-auto mr-2'></ GiHamburgerMenu>
                    </Link>
                    <Link onClick={(e) => { setCheckNav(2) }} to='Main' className={`text-white text-sm flex hover:text-[#ec8f42] ${checkNav === 2 ? "text-[#ec8f42]" : "text-[#c7c5c5]"} `}>
                        <IoHome className='w-[1rem] translate-y-[1px] h-auto mr-2'></ IoHome>
                        <h1 className='hidden md:block duration-200 ease-linear'>Home</h1>
                    </Link>
                    <Link onClick={(e) => { setCheckNav(3) }} to='Service' className={`text-white text-sm flex hover:text-[#ec8f42] ${checkNav === 3 ? "text-[#ec8f42]" : "text-[#c7c5c5]"} `} >
                        <MdHomeRepairService className='w-[1rem] translate-y-[2px] h-auto mr-2'></ MdHomeRepairService>
                        <h1 className='hidden md:block duration-200 ease-linear'>Service</h1>
                    </Link>
                    <Link onClick={(e) => { setCheckNav(4) }} to='About' className={`text-white text-sm flex hover:text-[#ec8f42] ${checkNav === 4 ? "text-[#ec8f42]" : "text-[#c7c5c5]"} `}>
                        <BsInfoCircleFill className='w-[1rem] translate-y-[2px] h-auto mr-2'></BsInfoCircleFill>
                        <h1 className='hidden md:block duration-200 ease-linear'>About</h1>
                    </Link>
                    <Link onClick={(e) => { setCheckNav(5) }} to='Contact' className={`text-white text-sm flex hover:text-[#ec8f42] ${checkNav === 5 ? "text-[#ec8f42]" : "text-[#c7c5c5]"} `} >
                        <AiTwotonePhone className='w-[1rem] translate-y-[2px] h-auto mr-2'></ AiTwotonePhone>
                        <h1 className='hidden md:block duration-200 ease-linear'>Contact Us</h1>
                    </Link>
                    <Link onClick={(e) => { setCheckNav(6) }} to='Help' className={`text-white text-sm flex hover:text-[#ec8f42] ${checkNav === 6 ? "text-[#ec8f42]" : "text-[#c7c5c5]"} `} >
                        <IoIosHelpCircle className='w-[1.2rem] translate-y-[2px] h-auto mr-2'></ IoIosHelpCircle>
                        <h1 className='hidden md:block duration-200 ease-linear'>Help</h1>
                    </Link>
                </div>
                <div className='absolute inset-y-0 right-7 md:right-10 lg:right-14 xl:right-20  flex gap-5 items-center justify-between h-16'>
                    <h1 className={`border-[1px px-4 pointer text-[#c7c5c5] hover:text-zinc-100 uppercase font-semibold tracking-wider font-pops 
                                  after:content-[''] after:absolute after:w-[50%] after:hover:w-full after:ease-in-out after:duration-200 after:h-[1px]
                                after:bg-[#f97f2ec2] after:right-0 after:bottom-0
                                ${hide && 'after:bg-zinc-500 after:w-[95%]'}
                                `}>
                        {userData.customer_name}
                    </h1>
                    <img src={require("../../img/profile.png")}
                        onClick={() => {
                            setHide(!hide)
                            console.log(hide)
                        }}
                        className={`w-8 h-8 rounded-full duration-200 ease-in-out ${hide && 'w-9 h-9'}`}></img>
                    <div className={`absolute flex flex-col bg-zinc-600/30 shadow-lg shadow-[#000000a9] rounded-xl gap-3 border-[1px left-4 top-20 w-32 px-3 py-5 
                                     ${!hide && 'hidden'}  `}>
                        <Link to ='Profile' onClick={()=>{resetHide()}}>
                            <div className='flex  items-center gap-2 text-[#c7c5c5] hover:bg-zinc-200/20 hover:rounded-lg py-1 hover:text-zinc-100'>
                                <CgProfile className=' w-5 h-5  inset-y-0 ' />
                                <h1 className=' duration-200 ease-linear'>Profile</h1>
                            </div>
                        </Link>
                        <Link to='Settings' onClick={()=>{resetHide()}}>
                            <div className='flex  text-[#c7c5c5] gap-2 hover:bg-zinc-200/20 hover:rounded-lg py-1 hover:text-zinc-100'>
                                <IoSettings className='w-5 h-5 ' />
                                <h1 className=' duration-200 ease-linear'>Settings</h1>
                            </div>
                        </Link>
                         <Link to='Orders' onClick={()=>{resetHide()}}>
                            <div className='flex text-[#c7c5c5] gap-2 hover:bg-zinc-200/20 hover:rounded-lg py-1 hover:text-zinc-100'>
                                <BsBoxSeam />
                                <h1 className=' duration-200 ease-linear'>Orders</h1>
                            </div>
                         </Link>   
                        <Link to='Login' onClick={()=>{resetHide()}}>
                            <div className='flex text-[#c7c5c5] gap-2 hover:bg-zinc-200/20 hover:rounded-lg py-1 hover:text-zinc-100'>
                                <VscSignIn onClick={() => {
                                    signOut()
                                }} className="w-5 h-5" />
                                <h1 className=' duration-200 ease-linear'>Sign-out</h1>
                            </div>
                        </Link>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Samp