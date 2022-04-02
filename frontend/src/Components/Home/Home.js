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
import { GiHamburgerMenu } from "react-icons/gi";

export const Home = () => {
  let history = useHistory();

  const [openTab, setOpenTab] = React.useState(1);

  const { products } = Data;
  const [cartItems, setCartItems] = useState([]);
  const [toggleSide, setToggleSide] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => {
      console.log(x._id, product._id, x._id === product._id)
      return x._id === product._id
    });
    if (exist) {
      setCartItems(
        [...cartItems.filter((i) => i._id !== exist._id), {
          ...exist, product_qty: exist.product_qty + 1
        }]
      );
    } else {
      setCartItems([...cartItems, { ...product, product_qty: 1 }]);
    }
  };

  const removeAllCartItems = () => {
    setCartItems([])
  }

  const removeItemFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i._id !== item._id))
  }

  const increateQty = (item) => {
    var idx = -1

    let copy = [...cartItems]

    copy.find((val, i) => {
      if (val._id === item._id) idx = i
      return val._id === item._id
    })

    copy[idx].product_qty += 1

    setCartItems(copy)
  }

  const decreaseQty = (item) => {
    var idx = -1

    let copy = [...cartItems]

    copy.find((val, i) => {
      if (val._id === item._id) idx = i
      return val._id === item._id
    })

    copy[idx].product_qty -= 1

    if (copy[idx].product_qty === 0) copy = copy.filter((i) => i._id !== item._id)

    setCartItems(copy)
  }

  const resetToggle = () => {
    setToggleSide(false);
    setToggleNav(false);
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

  return (
    <div className="overflow-hidden xl:mx-[8vw] bg-[#1A1B1F] overflow-y-hidden shadow-lg">
      <div className="flex relative">
        {/**Asside Nav desu */}
        <aside
          className={`z-30 w-[4rem] duration-500 sm:static absolute -left-96 ${toggleSide && "left-0"
            } h-auto bg-transparent border-[#fffff] border-r-[.01px]`}
          aria-label="Sidebar"
        >
          <div className="bg-[#24262bd9] h-full py-6 px-3 flex justify-center items-center rounded">
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="flex justify-center items-center font-normal text-gray-900 rounded-lg p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <IoExitOutline className="w-4 h-4 md:h-6 md:w-6 text-orange-500" />
                </a>
              </li>
              <li className="py-4">
                <a
                  href="/"
                  className="flex justify-center items-center font-normal text-gray-900 rounded-lg  p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <BsSearch className="w-4 h-4 md:h-5 md:w-5 text-orange-500" />
                </a>
              </li>
              <li className="py-0">
                <a
                  href="/"
                  className="flex justify-center items-center font-normal text-gray-900 rounded-lg  p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <IoHome className="w-4 h-4 md:h-5 md:w-5 text-orange-500" />
                </a>
              </li>
              <li className="py-4">
                <a
                  href="/"
                  className="flex justify-center items-center font-normal text-gray-900 rounded-lg  p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ImCart className="w-4 h-4 md:h-5 md:w-5 text-orange-500" />
                </a>
              </li>
              <li className="py-0">
                <a
                  href="/"
                  className="flex justify-center items-center font-normal text-gray-900 rounded-lg  p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <BsFillSuitHeartFill className="w-4 h-4 md:h-5 md:w-5 text-orange-500" />
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
                    className="h-auto w-[50px] max-w-[30%]"
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
          className="w-screen min-h-screen overflow-x-hidden"
          onClick={() => {
            resetToggle();
          }}
        >

          <div className="BurgerNav md:hidden z-40 bg-[#1A1B1F] fixed flex border-[1px] w-screen justify-between items-center py-4 px-10">
            <GiSlicedBread
              onClick={(e) => {
                e.stopPropagation();
                setToggleSide(!toggleSide);
              }}
              className="block sm:hidden w-9 h-9 text-orange-500"
            />
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setToggleNav(!toggleNav);
              }}
              className="block sm:hidden w-9 h-9 text-[#D98743] hover:text-text-orange-500"
            />
          </div>
          <div className="relative">
            <div
              className={`fixed h-auto z-50 mt-[4.5rem] -right-32 ${toggleNav && "-right-0 fixed "} 
              md:relative md:right-0 md:mt-0 md:duration-75
              }  `}
            >
              {/** Top Nav */}
              <nav className="flex flex-wrap flex-col border-[1px] rounded-xl sm:duration-75 md:flex-row justify-center 
              gap-3 items-center uppercase py-8 md:relative lg:justify-evenly
              ">

                <a
                  href="/"
                  className="flex justify-center items-center font-normal text-gray-900 rounded-lg 
                  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img
                    alt=""
                    src={require("../../img/me.png")}
                    className="h-auto w-12 md:hidden"
                  ></img>
                </a>
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
                    className="md:h-auto md:w-12 h-0  invisible md:visible"
                  ></img>
                </a>
              </nav>
            </div>
          </div>

          <div className="flex flex-wrap py-5 px-10">
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
                  backgroundImage: `${openTab === 1 &&
                    "url('https://cdn.discordapp.com/attachments/955281529481883729/959364059541671966/Frame_13_1.png')"
                    }`,
                }}
                className="font-pop flex rounded-md text-white bg-no-repeat bg-cover bg-fixed  bg-[#141517] h-auto"
              >
                <div
                  className="px-4 py-5 pb-[8vh] max-h-[40vh] overflow-scroll overflow-x-hidden flex-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-black
                          scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
                >
                  <div className="tab-content tab-space relative">
                    {/** Products Container */}
                    <div
                      className={`grid ${openTab !== 1 && "hidden"
                        } grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 sm:gap-0 lg:grid-cols-3 md:m-2 md:gap-1`}
                      id="link2"
                    >
                      {products.map((product) => (
                        <Product
                          key={product._id}
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
          <div className="overflow-hidden ">
            <Cart onAdd={onAdd} onDecrease={decreaseQty} onIncrease={increateQty} cartItems={cartItems} onRemove={removeItemFromCart} onRemoveAll={removeAllCartItems}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
