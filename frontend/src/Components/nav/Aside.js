import React from 'react'
import { useState } from 'react';
import { IoExitOutline, IoHome } from "react-icons/io5";
import { BsSearch, BsFillSuitHeartFill } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import {signOut } from "../../Utils";



function Aside({toggleAside,setToggleAside}) {
    const [toggleNav, setToggleNav] = useState(false);
    console.log(toggleAside)
    const resetToggle = () => {
        setToggleAside(false);
        setToggleNav(false);
      };
return (
    <>
        <aside
                className={`z-30 xl:h-full lg:w-32 md:w-16 w-[4rem] duration-500 md:h-full  md:static md:-left-0  fixed -left-96 ${
                  toggleAside && "fixed -left-0"
                } h-auto bg-transparent border-[#0000] border-r-[.01px]`}
                aria-label="Sidebar"
              >
                <div className="bg-[#1a1b1fdc] md:bg-[#1a1b1f] shadow-xl h-full py-10 px-3 flex justify-center items-center rounded">
                  <ul className="flex flex-col gap-4 md:gap-0 lg:gap-2 xl:gap-7 ">
                    <li>
                      <a
                        href="/"
                        className="flex justify-center items-center font-normal text-gray-900 rounded-lg p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <IoExitOutline
                          onClick={signOut}
                          className="w-4 h-4  text-orange-500"
                        />
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="/"
                        className="flex justify-center items-center font-normal text-gray-900 rounded-lg  p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <BsSearch className="w-4 h-4 text-orange-500" />
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="/"
                        className="flex justify-center items-center font-normal text-gray-900 rounded-lg  p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <IoHome className="w-4 h-4 md:h-5 md:w-5 text-orange-500" />
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="/"
                        className="flex justify-center items-center font-normal text-gray-900 rounded-lg  p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <ImCart className="w-4 h-4  text-orange-500" />
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="/"
                        className="flex justify-center items-center font-normal text-gray-900 rounded-lg  p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <BsFillSuitHeartFill className="w-4 h-4 md:h-5 md:w-5 text-orange-500" />
                      </a>
                    </li>
                    <div className="">
                      <a
                        href="/"
                        className="flex justify-center items-center font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <img
                          alt=""
                          src={require("../../img/text.png")}
                          className="h-auto w-[50px] max-w-[30%]"
                        ></img>
                      </a>
                    </div>
                    <li>
                    </li>
                  </ul>
                </div>
            </aside>      
    </>
  )
}

export default Aside