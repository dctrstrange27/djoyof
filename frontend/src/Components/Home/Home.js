import { useState, useEffect } from "react";
import React from "react";
import Aside from "../nav/Aside";
import SendProof from "../Modal/SendProof";
import { Outlet } from "react-router-dom";
import Samp from "../nav/MainNav";


const Home = ({updateSetShow,show,setShow,userData,setProofFile,proofView,setProofView,togs,setTogs,}) => {
const [hide,setHide] = useState(false)
  return (
    <>
      {show && (
        <div
          onClick={() => { setShow(false) }}
          className="fixed border-[1px bg-[#292929b9] top-0 flex justify-center items-center left-0 h-screen w-full  z-[9999]"
        >
          <div className="w-1/2">
            <SendProof
              proofView={proofView}
              setProofFile={setProofFile}
              setProofView={setProofView}
              updateSetShow={updateSetShow}
            />
          </div>
        </div>
      )}
    
      {userData && (
        <div className="relative ss:w-full h-screen border-[2px overflow-x-hidden  
                       mx-auto border-green-500 justify-center flex
                      scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-black
                      ">
          <div className="border-b-[1px border-[#7a7a7a75] bg-[#ffffffd4] dark:shadow-xl shadow-lg shadow-Light_shadow dark:shadow-[#00000054]   dark:bg-Dark_nav_bg fixed w-full z-30">
            <Samp hide={hide} setHide={setHide} userData={userData} togs={togs} setTogs={setTogs} />
          </div>
          <div className="flex absolute mt-16">
            <div className="relative  border-r-0 md:border-r-[1px] dark:border-[#ffffff48] border-[#0c0c0ca7] md:border-[3px">
              <Aside togs={togs} setTogs={setTogs}  ></Aside>
            </div>
            <Outlet/>
          </div>
        </div>

      )}
    </>
  );
};
export default Home;
