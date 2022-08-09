import React, { useState, useEffect } from "react";
import { API, saveUser, rememberMe, getRemembered } from "../../Utils";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai"
import { HiOutlineMail } from "react-icons/hi";
import { FaRegAddressBook } from "react-icons/fa"
import { MdContactPhone } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { GiConfirmed } from "react-icons/gi"
import { ImCart } from "react-icons/im"
import { AiOutlineUserAdd } from "react-icons/ai"
import { FiLogIn } from "react-icons/fi"
import {GoSignIn} from "react-icons/go"

export const Signup = () => {
    const [openTab, setOpenTab] = React.useState(1)
    const [userInput, getUserInput] = React.useState([])
    const [email_address, setEmail] = useState("");
    const [customer_name, setusername] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [contact_no, setcontact] = useState("");
    const [confirm_password, setconfirmpassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const signUp = async () => {
        setLoading(true)
        try {
            setError('')
            const response = await API.post("/signup", { email_address, password, customer_name, address, confirm_password, contact_no });
            saveUser(response);

        } catch (e) {
            console.log(e);
            if (e.response.data) setError(e.response.data.description)
            else setError("Sorry but we can't reach the server")
            setLoading(false)
        }
    };

    return (
        <>
            <div className="md:flex md:items-center border-[3px border-pink-500 overflow-auto h-screen scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-black">
        {/* First Box */}
                <div className=" flex sm:px-4 border-gray-100/20 shadow-xl shadow-[#5a595913] xl:border-[1px] border-[1px xl:bg-[#101010d6] bg-center bg-auto bg-no-repeat  flex-1 xl:h-[47rem] xl:max-h-[47rem]
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
                                 bg-[#131518] xl:bg-transparent flex-col justify-center md:gap-5 xl:gap-8 gap-3 items-center px-7 sm:px-10 py-5 xl:px-24 xl:max-w-5xl">
                            <img className="h-auto w-28"
                                src={require("../../img/logo.png")} ></img>
                            <div className="md:w-lg lg:w-lg xl:max-w-lg border-[1px ">
                                <h2 className="text-[#F29A4B] font-nsans text-2xl xl:text-[3rem] italic font-extrabold lg:tracking-[.4rem] text-left w-[250px] lg:w-[340px] xl:w-[340px] border-[1px">DJOYOF</h2>
                                <h1 className="font-nsans font-black text-[#CFCFCF] tracking-[.2em] xl:tracking-[2rem] lg:tracking-[2.5rem] text-5xl xl:text-[4.5rem] border-[1px ">BAKING</h1>
                            </div>
                            <p className="text-justify font-pop text-[12px]  sm:text-sm tracking-wide">
                                DJOYOFBAKING is founded by Ms. Dimple Cuevas.
                                <br></br>
                                <br></br>
                                DJOYOFBAKING is a small sole proprietorship business which cater and promotes fresh baked home local and international breads.
                                <br></br>
                                <br></br>
                                The DJOYOFBAKING bakery is located at Blk 12 Lot 39 Birmingham Village Brgy Pulo Cabuyao Laguna.</p>
                            <div className="flex justify-center items-center mt-5">
                                <Link to='/DarkMode' className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                                font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-800 ">
                                    <ImCart className="h-4 w-4 mr-3"></ImCart>
                                    ORDER NOW
                                </Link>
                            </div>
                        </div>
        {/* right side */}
                        <div className="w-full h-full max-w-[450px] borde-gray-100/20 border-[1px xl:bg-[#0000004b] px-10 flex flex-col gap-5 md:gap-0 justify-center xl:py-4 py-6 items-center">
                            <h2 className="uppercase font-nsan border-[1px font-semibold md:text-[1.1rem] tracking-widest " >Sign up to DJOYOF</h2>
        {/* input */}
                            <div className="w-full border-[1px text-sm gap py-4 flex flex-col gap-4">
                                <div className="border-[1px">
                                    <div className="flex">
                                        <label className="sm:block hidden mb-1 font-nsans tracking-[0.1rem]" for="password"> Email </label>
                                        <HiOutlineMail className="w-7 h-5">
                                        </HiOutlineMail>
                                    </div>
                                    <input
                                        placeholder="Email"
                                        className="text-[#CBCBCB] sm:placeholder:text-gray-200/20 sm:placeholder:italic sm:placeholder:font-thin w-full h-[30px] bg-[#1a1b1ed4] border-[#1a1b1ed4] focus:outline-none border border-b-[#FFFFFF] border-opacity-50" id="" defaultValue="" type="text" name="email" value={email_address}
                                        onChange={(e) => setEmail(e.target.value)}

                                    />
                                </div> 
                                <div className="border-[1px  ">
                                    <div className="flex">
                                        <label className=" sm:block hidden mb-1 font-nsans  tracking-[0.1rem]" for="password"> Username </label>
                                        <AiOutlineUserAdd className="w-7 h-5">
                                        </AiOutlineUserAdd>
                                    </div>
                                    <input 
                                         placeholder="Username"
                                        className="text-[#CBCBCB] sm:placeholder:text-gray-200/20 sm:placeholder:italic sm:placeholder:font-thin w-full h-[30px] bg-[#1a1b1ed4] border-[#1a1b1ed4] focus:outline-none border border-b-[#FFFFFF] border-opacity-50" id="" defaultValue="" type="text" name="username"
                                        value={customer_name}
                                        onChange={(e) => setusername(e.target.value)}
                                    />
                                </div>
                                <div className="border-[1px  ">
                                    <div className="flex">
                                        <label className="sm:block hidden mb-1 font-nsans   tracking-[0.1rem]" for="password"> Address </label>
                                        <FaRegAddressBook className="w-7 h-5">
                                        </FaRegAddressBook>
                                    </div>
                                    <input 
                                         placeholder="Address"
                                        className="text-[#CBCBCB] sm:placeholder:text-gray-200/20 sm:placeholder:italic sm:placeholder:font-thin w-full  h-[30px] bg-[#1a1b1ed4] border-[#1a1b1ed4] focus:outline-none border border-b-[#FFFFFF] border-opacity-50" id="" defaultValue="" type="text" name="address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)} />
                                </div>
                                <div className="border-[1px  ">
                                    <div className="flex">
                                        <label className="sm:block hidden mb-1 font-nsans tracking-[0.1rem]" for="password"> Contact No </label>
                                        <MdContactPhone className="w-7 h-5">
                                        </MdContactPhone>
                                    </div>
                                    <input 
                                         placeholder="Contact No"
                                        className="text-[#CBCBCB] sm:placeholder:text-gray-200/20 sm:placeholder:italic sm:placeholder:font-thin w-full h-[30px] bg-[#1a1b1ed4] border-[#1a1b1ed4] focus:outline-none border border-b-[#FFFFFF] border-opacity-50" id="" defaultValue="" type="text" name="username"
                                        value={contact_no}
                                        onChange={(e) => setcontact(e.target.value)}
                                    />
                                </div>
                                <div className="border-[1px  ">
                                    <div className="flex">
                                        <label className="sm:block hidden mb-1 font-nsans tracking-[0.1rem]" for="password"> Password </label>
                                        <RiLockPasswordLine className="w-7 h-5">
                                        </RiLockPasswordLine>
                                    </div>
                                    <input 
                                        placeholder="Password"
                                        className="text-[#CBCBCB] sm:placeholder:text-gray-200/20 sm:placeholder:italic sm:placeholder:font-thin w-full h-[30px] bg-[#1a1b1ed4] border-[#1a1b1ed4] focus:outline-none border border-b-[#FFFFFF] border-opacity-50" id="" defaultValue="" type="password" name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="border-[1px  ">
                                    <div className="flex">
                                        <label className="sm:block hidden mb-1 font-nsans tracking-[0.1rem]" for="password"> Confirm password </label>
                                        <GiConfirmed className="w-7 h-5">
                                        </GiConfirmed>
                                    </div>
                                    <input 
                                         placeholder="Confirm Password"
                                        className="text-[#CBCBCB] sm:placeholder:text-gray-200/20 sm:placeholder:italic sm:placeholder:font-thin w-full  h-[30px] bg-[#1a1b1ed4] border-[#1a1b1ed4] focus:outline-none border border-b-[#FFFFFF] border-opacity-50" id="" defaultValue="" type="password" name="username"
                                        value={confirm_password}
                                        onChange={(e) => setconfirmpassword(e.target.value)} />
                                </div>
            {/* BUTTON */}
                                <div className="flex flex-row justify-between  sm:mx-12 border-[1px gap-2 mt-8 items-center">
                                    <div className="flex justify-center items-center">
                                       
                                        <button
                                            disabled={email_address.length === 0 || customer_name.length === 0 || address.length === 0 || password.length === 0 || contact_no.length === 0 || confirm_password.length === 0 || loading}
                                            onClick={(e) => {
                                                e.preventDefault()
                                                signUp()
                                            }}
                                            className={`${email_address.length == 0 && customer_name.length == 0 && address.length == 0 && password.length == 0 && contact_no.length == 0 && confirm_password.length == 0 && 'disabled'}
                                            text-white bg-orange-500 border-[1px min-w-20 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300
                                            font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-800`}
                                        >SignUp
                                        <GoSignIn className="h-4 w-4 ml-3"></GoSignIn>
                                        </button>
                                       
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <Link to='/login' className="text-white border-[1px] hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300
                                             font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-800 ">
                                              <FiLogIn className="h-4 w-4 mr-3"></FiLogIn>
                                         
                                            SignIn
                                        </Link>
                                    </div>
                                </div>

                                <div className={`justify-center ${loading || error.length > 0 ? 'block' : 'hidden'}`}>
                                    <AiOutlineLoading className={`my-2 mx-auto w-5 h-5 text-orange-500 animate-spin ${loading ? 'block' : 'hidden'}`} />
                                    <p className={`text-center text-xs text-gray-600  ${loading ? 'block' : 'hidden'}`}>Analyzing..</p>
                                    <p className="text-xs my-4 text-rose-400 text-center">{error}</p>
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
