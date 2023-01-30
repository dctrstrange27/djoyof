import React, { useState, useEffect } from "react";
import { API, saveUser, rememberMe, getRemembered, userAPI } from "../../Utils";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai"
import { FaRegAddressBook } from "react-icons/fa"
import { MdContactPhone } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { GiConfirmed } from "react-icons/gi"
import { ImCart } from "react-icons/im"
import { AiOutlineUserAdd } from "react-icons/ai"
import { FiLogIn } from "react-icons/fi"
import { GoSignIn } from "react-icons/go"
import { useNavigate } from "react-router-dom";
import { RiErrorWarningFill } from 'react-icons/ri'
import { MdOutlineAlternateEmail } from 'react-icons/md'




export const Signup = ({ showContinue,setShowCon,setError,error,data,setData,handleLogin,userData,setUserName}) => {
    const [openTab, setOpenTab] = React.useState(1)
    const [userInput, getUserInput] = React.useState([])
   
    const [loading, setLoading] = useState(false)
    const [x, setX] = useState(false)

    const {email,password,name,address,confirm_password,contact_no} = data

    const onChange = (e) =>{
        setData((prevState)=>({...prevState,[e.target.name]:e.target.value}))
    }

    const getData = async()=>{
        setData({...data,
            email_address:email,
            password: password,
            customer_name:name,
            address:address,
            contact_no: contact_no,
            confirm_password:confirm_password})
        handleLogin(0,data)
    }

    let navigate = useNavigate();
    // const signUp = async () => {
    //     setLoading(true)
    //     try {
    //         setError('')
    //         const response = await userAPI.post("/signup", { email_address, password, customer_name, address, confirm_password, contact_no });
    //         saveUser(response);
    //         setShowCon(true)
    //         setUserName(response.data.userData.customer_name)
    //         navigate('/Signup'
    //     } catch (e) {
    //         console.log(e);
    //         if (e.response.data) {
    //             setError(e.response.data.error_message)
    //             setX(true)
    //         }
    //         else setError("Sorry but we can't reach the server")
    //         setLoading(false)
    //     }
    // };
    return (
        <>
            <div className="md:flex md:items-center border-[3px bg-[#19191e]  border-pink-500 overflow-auto h-screen scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-black">
                {/* First Box */}
                <div className=" flex sm:px-4 border-[#F29A4B] shadow-xl shadow-[#5a595913] xl:border-[1px] border-[1px xl:bg-[#101010d6] bg-center bg-auto bg-no-repeat  flex-1 xl:h-[47rem] xl:max-h-[47rem]
                                 justify-center items-center lg:bg-none relative xl:max-w-[90rem] mx-auto  xl:rounded-[3.5rem] ">
                    <img className="absolute invisible xl:visible inset-y-0 z-0 blur-sm h-full border-[1px"
                        src={require("../../img/loginbg.png")} >
                    </img>
                    <img className="absolute invisible xl:visible left-16"
                        src={require("../../img/text.png")} >
                    </img>
                    {/* center div */}
                    <div className="mt-6 md:mt-0 z-30  text-white flex flex-col md:flex-row w-full xl:border-[1px
                                    justify-center items-center xl:bg-[#08080875] xl:bg-[#1a1a1aad border-y-slate-500/20 xl:max-w-[70rem] xl:min-w-[50rem] xl:justify-around h-full">
                        {/* left side */}
                        <div className="flex max-w-[400px] h-full rounded-2xl mid:rounded-l-2xl  sm:border-[1px] xl:border-[0px] border-gray-100/20 
                                 bg-[#42454a91] xl:bg-transparent flex-col justify-center md:gap-5 xl:gap-8 gap-3 items-center px-7 sm:px-10 py-5 xl:px-24 xl:max-w-5xl">
                            <img className="h-auto w-28"
                                src={require("../../img/logo.png")} ></img>
                            <div className="md:w-lg lg:w-lg xl:max-w-lg border-[1px ">
                                <h2 className="text-[#F29A4B] font-nsans text-2xl xl:text-[3rem] italic font-extrabold lg:tracking-[.4rem] text-left w-[250px] lg:w-[340px] xl:w-[340px] border-[1px">DJOYOF</h2>
                                <h1 className="font-nsans font-black text-[#CFCFCF] tracking-[.2em] xl:tracking-[2rem] lg:tracking-[2.5rem] text-5xl xl:text-[4.5rem] border-[1px ">BAKING</h1>
                            </div>
                            <p className="text-justify font-pop text-[12px] text-[#CFCFCF]   sm:text-sm tracking-wide">
                                DJOYOFBAKING is founded by Ms. Dimple Cuevas.
                                <br></br>
                                    <br></br>
                                DJOYOFBAKING is a small sole proprietorship business which cater and promotes fresh baked home local and international breads.
                                <br></br>
                                <br></br>
                                The DJOYOFBAKING bakery is located at Blk 12 Lot 39 Birmingham Village Brgy Pulo Cabuyao Laguna.</p>
                            <div className="flex justify-center items-center mt-5">
                                <Link to='/login' className="text-white bg-orange-700 ease-in-out border-[#F29A4B] duration-300 hover:scale-105 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 border-[1px] 
                                font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-800 ">
                                    <ImCart className="h-4 w-4 mr-3 text-[#CFCFCF]"></ImCart>
                                    <button type="submit" className={`px-2  w-ful text-[#fff] rounded-md py-2`}>ORDER NOW </button>
                                </Link>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="w-full h-full max-w-[450px] borde-gray-100/20 border-[1px xl:bg-[#0000004b] px-12 flex flex-col gap-5 md:gap-0 justify-center xl:py-4 py-6 focus:outline-none items-center">
                            <h2 className="uppercase font-nsan border-[1px font-semibold md:text-[1.1rem] text-[#fff]  tracking-widest " >Sign up to DJOYOF</h2>
                            {/* input */}
                            <div className="w-full border-[1px border-[#fff text-sm gap-2 py-4 flex flex-col">
                                <div className="flex gap-2">
                                    <div className="border-[1px border-[#fff relative ">
                                        <label className="sm:block hidden mb-1 font-nsans tracking-normal text-[#fff]"> Email </label>
                                        <MdOutlineAlternateEmail className="w-5 h-4 text-[#fff] left-1 top-9 absolute " />
                                        <input className="flex component-preview p-4 items-center justify-center gap-2 h-[30px] text-[#fff] w-full text-sm focus:outline-none  leading-2 focus:border-[#c83737]
                                                   dark:border-gray-600 focus:ring  dark:focus:ring-[#c85e378d] my-2 pl-7 rounded-lg border-0 bg-[#ffffff1c]
                                                    transition duration-200 "
                                            type="text"
                                            name="email"
                                            value={email}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="border-[1px border-[#fff relative ">
                                        <label className="sm:block hidden mb-1 font-nsans tracking-normal text-[#fff]"> Name </label>
                                        <AiOutlineUserAdd className="w-7 h-5 text-[#fff] top-8 absolute " />
                                        <input  className="flex component-preview p-4 items-center justify-center gap-2 h-[30px] text-[#fff] w-full text-sm focus:outline-none  leading-2 focus:border-[#c83737]
                                                   dark:border-gray-600 focus:ring  dark:focus:ring-[#c85e378d] my-2 pl-7 rounded-lg border-0 bg-[#ffffff1c]
                                                    transition duration-200 "
                                            type="text"
                                            name="username"
                                            value={name}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div className="border-[1px border-[#fff relative ">
                                    <label className="sm:block hidden mb-1 font-nsans tracking-normal text-[#fff]"> Address </label>
                                    <FaRegAddressBook className="w-7 h-5 text-[#fff] top-8 absolute " />
                                    <input  className="flex component-preview p-4 items-center justify-center gap-2 h-[30px] text-[#fff] w-full text-sm focus:outline-none  leading-2 focus:border-[#c83737]
                                                   dark:border-gray-600 focus:ring  dark:focus:ring-[#c85e378d] my-2 pl-7 rounded-lg border-0 bg-[#ffffff1c]
                                                    transition duration-200 "
                                        type="text"
                                        name="address"
                                        value={address}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="border-[1px border-[#fff relative ">
                                    <label className="sm:block hidden mb-1 font-nsans tracking-normal text-[#fff]"> Contact </label>
                                    <MdContactPhone className="w-7 h-5 text-[#fff] top-8 absolute " />
                                    <input  className="flex component-preview p-4 items-center justify-center gap-2 h-[30px] text-[#fff] w-full text-sm focus:outline-none  leading-2 focus:border-[#c83737]
                                                   dark:border-gray-600 focus:ring  dark:focus:ring-[#c85e378d] my-2 pl-7 rounded-lg border-0 bg-[#ffffff1c]
                                                    transition duration-200 "
                                        type="text"
                                        name="contact_no"
                                        value={contact_no}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="border-[1px border-[#fff relative ">
                                    <label className="sm:block hidden mb-1 font-nsans tracking-normal text-[#fff]"> Password </label>
                                    <RiLockPasswordLine className="w-7 h-5 text-[#fff] top-8 absolute " />
                                    <input  className="flex component-preview p-4 items-center justify-center gap-2 h-[30px] text-[#fff] w-full text-sm focus:outline-none  leading-2 focus:border-[#c83737]
                                                   dark:border-gray-600 focus:ring  dark:focus:ring-[#c85e378d] my-2 pl-7 rounded-lg border-0 bg-[#ffffff1c]
                                                    transition duration-200 "
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={onChange} />
                                
                                </div>
                                <div className="border-[1px border-[#fff relative ">
                                    <label className="sm:block hidden mb-1 font-nsans tracking-normal text-[#fff]"> Confirm </label>
                                    {/* <GiConfirmed className={` ${password === confirm_password && password.length !== 0 ? "text-[#52e952de] scale-105" :"text-[#fff]"} duration-150 ease-linear  w-7 h-5  top-8 absolute  `} /> */}
                                    <input  className="flex component-preview p-4 items-center justify-center gap-2 h-[30px] text-[#fff] w-full text-sm focus:outline-none  leading-2 focus:border-[#c83737]
                                                   dark:border-gray-600 focus:ring  dark:focus:ring-[#c85e378d] my-2 pl-7 rounded-lg border-0 bg-[#ffffff1c]
                                                    transition duration-200 "
                                                    type="password"
                                                    name="confirm_password"
                                                    value={confirm_password}
                                                    onChange={onChange} />
                                    
                                </div>           
                                <div className={`justify-center ${loading || error.length > 0 ? 'block' : 'hidden'}`}>
                                    <AiOutlineLoading className={`my-2 mx-auto text-[#fff] w-5 h-5 text-orange-500 animate-spin ${loading ? 'block' : 'hidden'}`} />
                                    <p className={`text-center text-xs text-gray-600  text-[#fff] ${loading ? 'block' : 'hidden'}`}>Analyzing..</p>
                                    <div className="text-[15px] justify-center items-center ease-in duration-150 py-4  gap-4 rounded-sm bg-[#f72020b4] text-[#fff] flex my-4 text-rose-400 text-center">
                                        {x && <> <RiErrorWarningFill className="text-[#ef7e7e] w-5 h-5 " /></>}
                                        {error}
                                    </div>
                                </div>                  
                                {/* BUTTON */}
                                <div className="flex flex-row border-[1px border-[1px] border-[#fff w-full gap-2 mt-8 justify-center">
                                    <div className="flex justify-center items-center border-[1px w-full border-[#fc2020]">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                getData()
                                               // signUp()
                                            }}
                                            className={`bg-[#a65a17] text-[#fff] font-bold tracking-wide w-full flex justify-center  duration-300 hover:scale-105 border-[1px min-w-20 hover:bg-orange-600 focus:ring-4 focus:outline-none 
                                             rounded-lg text-[15px] px-5 py-2.5  items-center `}
                                        >Sign up
                                            <GoSignIn className="h-4 w-4 ml-3"></GoSignIn>
                                        </button>
                                    </div>                                    
                                    <div className="flex justify-center items-center  w-full">
                                        <Link to='/login'   className={`text-white bg-[#a65a17] text-[#fff]  text-[15px] font-bold w-full flex justify-center  duration-300 hover:scale-105 border-[1px min-w-20 hover:bg-orange-600 focus:ring-4 focus:outline-none 
                                             rounded-lg text-sm px-5 py-2.5  items-center `}>
                                            <FiLogIn className="h-4 w-4 mr-3"></FiLogIn>
                                           Login 
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="absolute invisible xl:visible right-10 xl:bottom-0 h-full lg:w-auto"
                        src={require("../../img/foot.png")} ></img>
                </div>
            </div>



        </>
    );
};
export default Signup;
