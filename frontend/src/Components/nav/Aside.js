import React from 'react'
import { useState,useReducer} from 'react';
import { IoExitOutline, IoHome } from "react-icons/io5";
import { BsSearch, BsFillSuitHeartFill } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { signOut } from "../../Utils";
import { Link } from 'react-router-dom';
import UseDarkMode from '../DarkMode/UseDarkMode'
import Middle from '../DarkMode/Middle.js';

function Aside({ togs, setTogs, resetToggle }) {
  const [toggleNav, setToggleNav] = useState(false);
  const [colorTheme, setTheme] = UseDarkMode()
  const [light, setLight] = Middle()


  return (
    <>
      <aside
        className={`z-30 xl:h-full border-[1px lg:w-32 xl:w-36 md:w-16 w-[4rem] bg-product_bg dark:md:bg-[#18191a]  md:bg-P_bg duration-500 md:h-full md:static md:-left-0 fixed -left-96 
                    ${togs && "fixed -left-0 bg-product_bg  dark:bg-[#242526e0]"}  border-[#000] h-full`}
        aria-label="Sidebar"> 

        <ul className="absolute inset-x-0 inset-y-5 border-[1px flex flex-col gap-4 md:gap-3 lg:gap-2 xl:gap-7 ">
          
          <li className="flex justify-center border-[1px items-center font-normal text-gray-900 rounded-lg">
            <Link
              to="/"
              className="border-[1px p-2 hover:bg-gray-500/20 hover:rounded-md "
            >
              <BsSearch className="w-4 h-4 dark:text-[#FF7900] text-Aside_icon" />
            </Link>
          </li>
          <li className="flex justify-center border-[1px items-center font-normal text-gray-900 rounded-lg">
            <Link
              to="/"
              className="border-[1px p-2 hover:bg-gray-500/20 hover:rounded-md "
            >
              <ImCart className="w-4 h-4 dark:text-[#FF7900] text-Aside_icon" />
            </Link>
          </li>
          <li className="flex justify-center border-[1px items-center font-normal text-gray-900 rounded-lg">
            <Link
              to="/"
              className="border-[1px p-2 hover:bg-gray-500/20 hover:rounded-md "
            >
              <BsFillSuitHeartFill className="w-4 h-4 dark:text-[#FF7900] text-Aside_icon" />
            </Link>
          </li>
          <div className="">
            <Link to="/main" className="flex justify-center items-center">
              <div className='border-[1px hover:bg-gray-600/20 hover:rounded-xl '>
                  <div className=' bg-light-text-logo dark:bg-dark-text-logo w-5 h-[32rem] bg-no-repeat bg-contain'></div>
              </div>
          
            </Link>
          </div>

        </ul>

      </aside>
      
    </>
  )
}

export default Aside