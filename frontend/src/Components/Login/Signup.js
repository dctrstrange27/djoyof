import React, { useState, useEffect } from "react";
import { API, saveUser, rememberMe, getRemembered } from "../../Utils";
import { useHistory } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai"
import { HiOutlineMail } from "react-icons/hi";
import { FaRegAddressBook } from "react-icons/fa"
import { MdContactPhone } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { GiConfirmed } from "react-icons/gi"
export const Signup = () => {
    const [openTab, setOpenTab] = React.useState(1)

    return (
        <>
            <div className="bg-[#323439] flex justify-center items-center w-screen h-screen overflow-auto  lg:px-10 xl:px-20">

                <div className="relative bg-[#141517] lg:border-[.2px] lg:border-[#D2A781] flex justify-center bg-center bg-no-repeat bg-[length:750px_900px]
                                 items-center w-full h-[80vh] lg:rounded-[1.7rem] lg:px-20 xl:rounded-[3.7rem] rounded-2xl  xl:px-32 md:px-2 py-10 2xl:px-[15rem] 3xl:px-[25rem]"
                    style={{ backgroundImage: `${openTab === 1 && "url('https://cdn.discordapp.com/attachments/755283323110293547/961084398848057374/bg.png')"}`, }}>

                    <img className="absolute lg:left-6 invisible lg:visible xl:left-16 2xl:left-20 lg:h-70 lg:w-auto "
                        src={require("../../img/text.png")} ></img>
                    {/* center div */}
                    <div className="bg-[#101010d6] rounded-2xl lg:border-[.2px] lg:border-[#ffab5dc1] xl:rounded-[3rem] text-white flex flex-col md:flex-row w-full h-auto xl:h-[55vh] justify-center items-center">
                        {/* left side */}
                        <div className=" h-full rounded-l-2xl xl:rounded-l-[3rem] bg-[#131518] border-[1px flex flex-col justify-center  md:gap-5 xl:gap-4 gap-3 items-center md:px-10 lg:px-14 px-5 py-5">
                            <img className="h-auto w-28"
                                src={require("../../img/logo.png")} ></img>
                            <div className="md:w-[350px] lg:w-[400px]">
                                <h2 className="text-[#F29A4B] font-nsans text-2xl xl:text-[3rem] italic font-extrabold lg:tracking-[.4rem] text-left w-[250px] lg:w-[340px] xl:w-[340px] border-[1px">DJOYOF</h2>
                                <h1 className="font-nsans font-black text-[#CFCFCF] tracking-[.2em] xl:tracking-[1rem] lg:tracking-[1.5rem] text-5xl xl:text-[4rem] border-[1px ">BAKING</h1>
                            </div>
                            <p className="text-justify font-pop text-sm ">
                                DJOYOFBAKING is founded by Ms. Dimple Cuevas.
                                <br></br>
                                DJOYOFBAKING is a small sole proprietorship business which cater and promotes fresh baked home local and international breads.
                                <br></br>
                                <br></br>
                                The DJOYOFBAKING bakery is located at Blk 12 Lot 39 Birmingham Village Brgy Pulo Cabuyao Laguna.</p>
                            <button className="px-3 lg:my-4 py-2 w-32 h-auto rounded-2xl text-[#302C2C] font-nsans font-bold lowercase bg-[#FFAA5E] hover:bg-[#f48422] hover:text-[1.1rem] ">ORDER NOW</button>
                        </div>
                        {/* right side */}
                        <div className="w-full h-full border-[1px xl:rounded-r-3xl  rounded-r-2xl  px-10 flex flex-col gap-5 justify-center py-6 items-center border-[1px">
                            <h2 className="uppercase font-nsan border-[1px font-semibold " >Sign up to DJOYOF</h2>
                            {/* input */}
                            <div className="w-full border-[1px gap py-4 flex flex-col gap-4">
                                <div className="border-[1px ">
                                    <div className="flex">
                                        <label className=" block mb-1 font-nsans text-xs text-[#CBCBCB] tracking-[0.1rem]" for="password"> Email </label>
                                        <HiOutlineMail className="w-7 h-5">
                                        </HiOutlineMail>
                                    </div>
                                    <input className="text-[#CBCBCB] w-full h-[30px] bg-[#1a1b1ed4] border-[#1a1b1ed4] focus:outline-none border border-b-[#FFFFFF] border-opacity-50" id="" type="" name="" value='' />
                                </div>
                                <div className="border-[1px  ">
                                    <div className="flex">
                                        <label className="block mb-1 font-nsans text-xs text-[#FFAA5D] tracking-[0.1rem]" for="password"> address </label>
                                        <FaRegAddressBook className="w-7 h-5">
                                        </FaRegAddressBook>
                                    </div>
                                    <input className="text-[#CBCBCB] w-full  h-[30px] bg-[#1a1b1ed4] border-[#1a1b1ed4] focus:outline-none border border-b-[#FFFFFF] border-opacity-50" id="" type="" name="" value='' />
                                </div>
                                <div className="border-[1px  ">
                                    <div className="flex">
                                        <label className="block mb-1 font-nsans text-xs text-[#FFAA5D] tracking-[0.1rem]" for="password"> contact no </label>
                                        <MdContactPhone className="w-7 h-5">
                                        </MdContactPhone>
                                    </div>
                                    <input className="text-[#CBCBCB] w-full h-[30px] bg-[#1a1b1ed4] border-[#1a1b1ed4] focus:outline-none border border-b-[#FFFFFF] border-opacity-50" id="" type="" name="" value='' />
                                </div>
                                <div className="border-[1px  ">
                                    <div className="flex">
                                        <label className="block mb-1 font-nsans text-xs text-[#FFAA5D] tracking-[0.1rem]" for="password"> password </label>
                                        <RiLockPasswordLine className="w-7 h-5">
                                        </RiLockPasswordLine>
                                    </div>
                                    <input className="text-[#CBCBCB] w-full h-[30px] bg-[#1a1b1ed4] border-[#1a1b1ed4] focus:outline-none border border-b-[#FFFFFF] border-opacity-50" id="" type="" name="" value='' />
                                </div>
                                <div className="border-[1px  ">
                                    <div className="flex">
                                        <label className="block mb-1 font-nsans text-xs text-[#FFAA5D] tracking-[0.1rem]" for="password"> confirm password </label>
                                        <GiConfirmed className="w-7 h-5">
                                        </GiConfirmed>
                                    </div>
                                    <input className="text-[#CBCBCB] w-full  h-[30px] bg-[#1a1b1ed4] border-[#1a1b1ed4] focus:outline-none border border-b-[#FFFFFF] border-opacity-50" id="" type="" name="" value='' />
                                </div>
                                <button className="px-3 py-1 lg:my-4  w-32 h-auto rounded-md text-[15px] text-[#302C2C] font-nsans font-bold lowercase bg-[#F29A4B] hover:bg-[#f48422] hover:text-[1.1rem] ">Sign In</button>
                            </div>
                        </div>
                    </div>
                    <img className="absolute invisible xl:visible xl:right-16 xl:bottom-0  lg:h-70 lg:w-auto"
                        src={require("../../img/foot.png")} ></img>
                </div>
            </div>


        </>
    );
};
export default Signup;
