import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
import UseDarkMode from '../DarkMode/UseDarkMode'
import { BsSun } from 'react-icons/bs'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {BsFillCartFill} from 'react-icons/bs'
import Nav from './Nav'
import { getUser } from '../../Utils'

const MainNav = ({togs, setTogs, hide, setHide,setUseLocal,setUseGoogle,setSignout,signout, setCurrentTab}) => {
    
    let navigate = useNavigate()
    
    // console.log(getUser())

    const signOutAccount=()=>{
        setSignout(!signout)
        console.log(signout)
        setUseLocal(false)
        setUseGoogle(false)
    }

    function resetHide() {
        setHide(false)
       
    }
    const [checkNav, setCheckNav] = useState(1)
    const [colorTheme, setTheme] = UseDarkMode()
    const [switchLabel, setSwitchLabel] = useState(false)
    const [label, setLable] = useState("dark")
    const [name,setName] = useState(getUser())

    const isSwitchOn = () => { switchLabel ? setLable("Dark") : setLable("Light") }

    const icon = [
        IoHome,
        MdHomeRepairService,
        BsInfoCircleFill,
        AiTwotonePhone,
        IoIosHelpCircle,
    ]
    const Navs = [
        { id: 1, name: "Home", nav: "Main" },
        { id: 2, name: "Products", nav: "Products" },
        { id: 3, name: "Service", nav: "About" },
        { id: 4, name: "Contact Us", nav: "Contact" },
        { id: 5, name: "Help", nav: "Help" },
    ]
    return (
        <>
            <div className='relative max-w-[90rem] border-green-500 border-[1px  h-16 mx-auto min-w-sm z-40  duration-500'>
                {/* this is for mobile view */}
                <div className='absolute font-medium font-nsans first:text-[1.5rem] tracking-wide inset-y-0 left-7 md:left-10   border-[1px flex gap-5 items-center justify-between h-16'>
                    <div className=' tracking-wide inset-y-6 mr-10 hidden lg:block'>
                        {colorTheme == "light" ? (<img src={require("../../img/logo.png")} className="h-auto w-10"></img>) : (<img src={require("../../img/nobg-logo.png")} className="h-auto w-10"></img>)}
                    </div>
                    <div onClick={(e) => {
                        setCheckNav(1)
                        setTogs(!togs)

                    }} to='Main' className={`md:hidden text-white text-sm flex  dark:hover:text-[#ec8f42] ${checkNav === 1 ? "dark:text-[#ec8f42]" : "dark:text-[#c7c5c5]"} `}>
                        <GiHamburgerMenu className='w-[1rem] translate-y-[1px] h-auto mr-2'></ GiHamburgerMenu>
                    </div>
                    {Navs.map((nav, index) => (
                        <Nav
                            nav={nav}
                            key={index}
                            setCheckNav={setCheckNav}
                            checkNav={checkNav}
                            Icon={icon[index]}>
                        </Nav>
                    ))
                    }
                </div>
                <div className={`absolute inset-y-0 right-7 md:right-10 lg:right-14 xl:right-20 border-[1px duration-500 ease-linear  flex gap-5 items-center justify-between h-16
                                  after:content-[''] after:absolute  after:ease-in-out after:duration-200 after:h-[1px]
                                  dark:after:bg-[#f97f2ec2] after:bg-[#f97f2e] after:right-0 after:bottom-0 
                                  ${hide ? "after:w-[90%]" : "after:w-[30%]"}
                              `}>
                    <div className='relative'>
                        <div className={` after:content-[''] after:absolute  after:ease-in-out after:duration-200 after:h-[20px]
                                  dark:after:bg-[#ffffff27] after:bg-[#3a3a3a43] after:left-10 after:bottom-0 after:w-[1px]`}
                            onClick={() => {
                                setTheme(colorTheme)
                                setSwitchLabel(!switchLabel)
                                isSwitchOn()
                            }}
                        >
                            {colorTheme === 'light' ? (<BsFillMoonStarsFill className='w-5 h-5 text-Ofive'></BsFillMoonStarsFill>) : (<BsSun className='w-5 h-5 duration-200 ease-linear text-Ofour'></BsSun>)}
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Link to='profile-cart' onClick={()=>{ setCurrentTab(0)}} className={` px-6 pointer text-Light_normal dark:text-[#c7c5c5] hover:text-zinc-100 uppercase font-semibold tracking-wider font-pops `}>
                        <BsFillCartFill className=' w-5 h-5 text-Ofour dark:text-Ofive hover:scale-110'/>
                        </Link>
                        <img src={`${getUser() ? getUser().profile_picture : ""}`}onClick={() => {setHide(!hide) }}className={`w-8 h-8 rounded-full duration-200 ease-in-out`}></img>
                    </div>
                    {/* profile */}
                    <div className={`absolute flex flex-col bg-white5/50 dark:bg-two/70 dark:shadow-lg shadow-lg shadow-Light_shadow dark:shadow-[#000000a9] rounded-xl gap-3 border-[1px left-4 top-20 w-40 px-3 py-5 
                                     ${!hide && 'hidden'}  `}>
                        <Link to='Profile' onClick={() => { resetHide() }}>
                            <div className='flex items-center gap-2 text-Light_normal duration-200 ease-linear dark:text-[#c7c5c5] hover:bg-zinc-200/20 hover:rounded-lg py-1 hover:text-zinc-100'>
                            <img src={getUser().profile_picture}className={`w-8 h-8 border-[1px] rounded-full duration-200 ease-in-out hover:scale-105`}></img>
                                <h1 className='duration-200 ease-linear'>  {name?.customer_name}</h1>
                            </div>
                        </Link>
                        <Link to='Settings' onClick={() => { resetHide() }}>
                            <div className='flex  text-Light_normal dark:text-[#c7c5c5] duration-200 ease-linear gap-2 hover:bg-zinc-200/20 hover:rounded-lg py-1 hover:text-zinc-100'>
                                <IoSettings className='w-5 h-5 ' />
                                <h1 className='duration-200 ease-linear'>Settings</h1>
                            </div>
                        </Link>
                        <Link to='Orders' onClick={() => { resetHide() }}>
                            <div className='flex text-Light_normal dark:text-[#c7c5c5] duration-200 ease-linear  gap-2 hover:bg-zinc-200/20 hover:rounded-lg py-1 hover:text-zinc-100'>
                                <BsBoxSeam />
                                <h1 className='duration-200 ease-linear'>Orders</h1>
                            </div>
                        </Link>
                     
                        <div onClick={() => {signOutAccount()}}>
                            <div className='flex text-Light_normal dark:text-[#c7c5c5] border-[1px  gap-2 hover:bg-zinc-200/20 hover:rounded-lg py-1 hover:text-zinc-100'>
                                <VscSignIn className="w-5 h-5" />
                                <h1 className=' duration-200 ease-linear'>Log out</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainNav