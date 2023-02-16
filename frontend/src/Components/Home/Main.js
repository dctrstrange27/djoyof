import { useState } from "react";
import React from "react";
import Aside from "../nav/Aside";
import { Outlet } from "react-router-dom";
import MainNav from "../nav/MainNav";
import SignoutPortal from "../Login/SignoutPortal";
import Footer from "./Footer";
const Main = ({ setLoading,togs,showNotif,setShowNotif,setTogs,cartItems, setUseGoogle, setUseLocal, signout, setSignout, currentTab, setCurrentTab }) => {
  const [hide, setHide] = useState(false)
  
  return (
    <div className="relative flex flex-col">
      <SignoutPortal setLoading={setLoading} signout={signout} setSignout={setSignout}></SignoutPortal>
      <div className="border-b-[1px fixed border-[#7a7a7a75] bg-[#ffffffd4] dark:shadow-xl shadow-lg shadow-[#5d5c5c1d] dark:shadow-[#2b2a2a54] dark:bg-two  w-full z-30">
        <MainNav  showNotif={showNotif} setShowNotif={setShowNotif}  cartItems={cartItems} currentTab={currentTab} setCurrentTab={setCurrentTab} setUseGoogle={setUseGoogle} signout={signout} setSignout={setSignout} setUseLocal={setUseLocal} hide={hide} setHide={setHide} togs={togs} setTogs={setTogs} />
      </div>
      <div className="border-[#03b10f]  h-[screen] border-[5px">
        <div className="relative ss:w-full h-screen border-[5px border-[#e80a67]  mx-auto justify-center flex scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-black">
          <div className="flex flex-row absolute mt-16 border-[2px border-[#cf9e0d ">
            <div className="relative  border-r-0 md:border-r-[1px] dark:border-[#ffffff2c] border-[#4e4d4d5a] md:border-[3px">
              <Aside togs={togs} setTogs={setTogs}></Aside>
            </div>
            <Outlet />
          </div>
        </div>
          <Footer>
          </Footer>
      </div>
    </div>
  )
};
export default Main;
