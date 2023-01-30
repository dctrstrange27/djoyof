import { useState, useEffect } from "react";
import React from "react";
import Aside from "../nav/Aside";
import SendProof from "../Modal/SendProof";
import { Outlet } from "react-router-dom";
import MainNav from "../nav/MainNav";
import SignoutPortal from "../Login/SignoutPortal";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Home = ({ updateSetShow, setError, loading, setLoading,show, setShow, userData, setProofFile, proofView, setProofView, togs, setTogs, setUseGoogle, setUseLocal, signout, setSignout, currentTab, setCurrentTab }) => {
  const [hide, setHide] = useState(false)
  return (
    <div className="relative flex flex-col">
      <SignoutPortal setLoading={setLoading} signout={signout} setSignout={setSignout}></SignoutPortal>
      <div className="border-b-[1px fixed border-[#7a7a7a75] bg-[#ffffffd4] dark:shadow-xl shadow-lg shadow-Light_shadow dark:shadow-[#00000054] dark:bg-two  w-full z-30">
        <MainNav currentTab={currentTab} setCurrentTab={setCurrentTab} setUseGoogle={setUseGoogle} signout={signout} setSignout={setSignout} setUseLocal={setUseLocal} hide={hide} setHide={setHide} togs={togs} setTogs={setTogs} />
      </div>
      <div className="border-[#03b10f] h-[screen] border-[5px">
        <div className="relative ss:w-full h-screen border-[20px border-[#fff]  mx-auto justify-center flex
                      scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-black
                      ">
          <div className="flex flex-row absolute mt-16 border-[2px border-[#cf9e0d ">
            <div className="relative  border-r-0 md:border-r-[1px] dark:border-[#ffffff2c] border-[#4e4d4d5a] md:border-[3px">
                <Aside togs={togs} setTogs={setTogs}></Aside>
              </div>
              <div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer></Footer>




    </div>
  )
};
export default Home;
