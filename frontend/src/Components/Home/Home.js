import { useState, useEffect } from "react";
import React from "react";
import Data from "../Home/Data";
import { useHistory } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";
import { amIloggedIn } from "../../Utils";

import { IoExitOutline, IoHome } from "react-icons/io5";
import { BsSearch, BsFillSuitHeartFill } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { GiSlicedBread } from "react-icons/gi";

export const Home = () => {
  let history = useHistory();

  const [openTab, setOpenTab] = React.useState(1);

  const { products } = Data;
  const [cartItems, setCartItems] = useState([]);
  const [toggleSide, setToggleSide] = useState(false);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const resetToggle = () => {
    setToggleSide(false);
  };

  useEffect(() => {
    /**
     *
     * USEFFECT GUMAGANA SYA LAGI KAPAG MAY NAGBAGO SA STATE OR NAG MOUNT OR ITONG MISMONG
     * HOME IS MAMAMOUNT (REMEMVER EVERYTIME NA MAG BABAGO YUNG MGA VALUE NG USE STATES, OR KAPAG NAKA MOUNT)
     *
     * So everytime itong home component is mounting need icheck kung may
     * nakalogin ba na user via sa ginawa kong utility anIloggedIn which is localstorage lang
     *
     * kapag wala redirect sa login👇
     * */
    const userData = amIloggedIn(history);

    setCartItems(userData.cartItems);
  }, [history]);

  {
    /* border-[#F29A4B] border-[1px] */
  }
  return (
    <div className="bg-[#24262B] w-full  ">
      <div className="flex relative h-screen">
        {/**Asside Nav desu */}
        <aside
          className={`z-30 w-[5rem] duration-500 absolute -left-96 ${
            toggleSide && "left-0"
          } sm:static h-auto bg-transparent border-[#fffff] border-r-[.01px] `}
          aria-label="Sidebar"
        >
          <div className="bg-[#24262bd9] py-6 px-3 flex justify-center items-center rounded">
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="flex justify-center items-center font-normal text-gray-900 rounded-lg p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <IoExitOutline className="w-4 h-4 text-orange-500" />
                </a>
              </li>
              <li className="py-4">
                <a
                  href="/"
                  className="flex justify-center items-center font-normal text-gray-900 rounded-lg  p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <BsSearch className="w-4 h-4 text-orange-500" />
                </a>
              </li>
              <li className="py-0">
                <a
                  href="/"
                  className="flex justify-center items-center font-normal text-gray-900 rounded-lg  p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <IoHome className="w-4 h-4 text-orange-500" />
                </a>
              </li>
              <li className="py-4">
                <a
                  href="/"
                  className="flex justify-center items-center font-normal text-gray-900 rounded-lg  p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ImCart className="w-4 h-4 text-orange-500" />
                </a>
              </li>
              <li className="py-0">
                <a
                  href="/"
                  className="flex justify-center items-center font-normal text-gray-900 rounded-lg  p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <BsFillSuitHeartFill className="w-4 h-4 text-orange-500" />
                </a>
              </li>
              <div className="py-10">
                <a
                  href="/"
                  className="flex justify-center items-center font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img
                    alt=""
                    src={require("../../img/text.png")}
                    className="h-auto w-[50px] max-w-[40%] m md:max-w-[20%]  "
                  ></img>
                </a>
              </div>
              <li>
                {/* <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                  <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                </a> */}
              </li>
            </ul>
          </div>
        </aside>

        <div
          className="w-full h-screen  overflow-y-auto"
          onClick={() => {
            resetToggle();
          }}
        >
          {/** Top Nav */}
          <nav className="flex flex-wrap px-8 my-2 space-x-10 uppercase py-8 border-[#fffff] border-b-[.001px]">
            <GiSlicedBread
              onClick={(e) => {
                e.stopPropagation();
                setToggleSide(!toggleSide);
              }}
              className="block sm:hidden w-9 h-9 text-orange-500"
            />
            <a
              href="/"
              className="text-sm px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Home
            </a>
            <a
              href="/"
              className="text-sm  px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              About
            </a>
            <a
              href="/"
              className="text-sm px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Service
            </a>
            <a
              href="/"
              className="text-sm px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              Contact Us
            </a>
            <a
              href="/"
              className="flex justify-center items-center font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img
                alt=""
                src={require("../../img/logo.png")}
                className="h-auto w-12"
              ></img>
            </a>
          </nav>

          <div className="flex flex-wrap py-4 px-4">
            <div className="w-full">
              {/* ALL tab  */}
              <ul
                className="grid grid-cols-2 md:grid-cols-4 mb-0 w-full md:w-8/12 lg:w-1/2 list-none pt-3"
                role="tablist"
              >
                {["ALL", "FAVORITES", "COMPLETED", "CANCELLED"].map(
                  (tb, idx) => (
                    <li
                      key={idx}
                      className={` last:mr-0 flex-auto text-center `}
                    >
                      <a
                        className={
                          "rounded-tl-xl duration-200 ease-in z-10 text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-sm block leading-normal " +
                          (openTab === idx + 1
                            ? "text-white bg-[#F29A4B] 600"
                            : "text-white bg-[#21201F] -600 bg-transparent")
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(idx + 1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                      >
                        {tb}
                      </a>
                    </li>
                  )
                )}
              </ul>

              <div
                style={{
                  backgroundImage: `${
                    openTab === 1 &&
                    "url('https://cdn.discordapp.com/attachments/955281529481883729/959364059541671966/Frame_13_1.png')"
                  }`,
                }}
                className="font-pop flex rounded-md text-white bg-no-repeat bg-cover bg-fixed  bg-[#141517] h-auto max-h-[50vh] w-full"
              >
                <div
                  className="px-4 py-5 pl-10 pb-[8vh] flex-auto scrollbar-thin scrollbar scrollbar scrollbar-thumb-zinc-600 scrollbar-track-black
                          overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
                >
                  <div className="tab-content tab-space relative">
                    {/** Products Container */}
                    <div
                      className={`grid ${
                        openTab !== 1 && "hidden"
                      } grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 sm:gap-0 lg:grid-cols-3 md:m-2 md:gap-1`}
                      id="link2"
                    >
                      {products.map((product) => (
                        <Product
                          key={product.id}
                          onAddCart={onAdd}
                          product={product}
                        ></Product>
                      ))}
                    </div>

                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <p>Favorites..</p>
                    </div>
                    <div
                      className={openTab === 3 ? "block" : "hidden"}
                      id="link3"
                    >
                      <p>Completed Items..</p>
                    </div>
                    <div
                      className={openTab === 4 ? "block" : "hidden"}
                      id="link3"
                    >
                      <p>Cancelled Items..</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Cart onAdd={onAdd} cartItems={cartItems}></Cart>
        </div>
      </div>
    </div>
  );
};
export default Home;

