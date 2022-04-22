import { useState, useEffect } from "react";
import React from "react";

import Product from "../product/Product";
import Cart from "../cart/Cart";
import Aside from "../nav/Aside";
import Nav from "../nav/Nav";
import Tabs from "../tabs/Tabs";
import SendProof from "../Modal/SendProof";
import { useNavigate, Outlet, Link } from "react-router-dom";
import Service from "../Service/Service";
import Main from './Main'
import { getUser } from '../../Utils';
import Samp from "../nav/Samp";

import { amIloggedIn, API, saveUser, signOut } from "../../Utils";




const Home = ({
  show,
  setShow,
  userData,
  setUserData,
  openTab,
  setOpenTab,
  products,
  setProduct,
  favorites,
  setFavorites,
  cartItems,
  setCartItems,
  resetToggle,
  onAdd,
  clickableAgain,
  setClickableAgain,
  proof,
  setProofFile,
  proofView,
  setProofView,
  currentItems,
  setCurrentItmes,
  removeAllCartItems,
  removeItemFromCart,
  increateQty,
  decreaseQty,
  togs,
  setTogs,
}) => {
  return (
    <>
      {show && (
        <div
          onClick={() => { setShow(false) }}
          className="fixed top-0 flex justify-center items-center left-0 h-screen w-full z-[9999]"
        >
          <div className="w-1/2">
            <SendProof
              proofView={proofView}
              setProofFile={setProofFile}
              setProofView={setProofView}
            />
          </div>
        </div>
      )}
      {userData && (
        <div className="relative ss:w-full h-screen border-[2px overflow-x-hidden  
                       mx-auto border-green-500 justify-center flex
                      scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-black
                      ">
          {/* aside nav */}
          {/* <Nav className="" userData={userData}></Nav> */}
          <div className="border-b-[1px border-[#7a7a7a75] shadow-2xl shadow-[#00000071]  bg-[#141518d3] fixed w-full z-30">
            <Samp userData={userData} togs={togs} setTogs={setTogs} />
          </div>
          <div className="flex absolute mt-16">
            <div className="relative border-r-[1px] border-[#ffffff70] md:border-[3px">
              <Aside  togs={togs} setTogs={setTogs}  ></Aside>
            </div>
            <Outlet/>
          </div>
        </div>

      )}
    </>
  );
};
export default Home;
