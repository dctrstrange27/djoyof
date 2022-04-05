import { useState, useEffect } from "react";
import React from "react";
import { useHistory } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";
import { amIloggedIn, API, saveUser, signOut } from "../../Utils";

import { IoExitOutline, IoHome } from "react-icons/io5";
import { BsSearch, BsFillSuitHeartFill } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { GiSlicedBread } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";

export const Home = () => {
  let history = useHistory();

  const [openTab, setOpenTab] = React.useState(1);

  const [products, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [toggleSide, setToggleSide] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const [userData, setUserData] = useState();

  const onAdd = (product) => {
    const exist = cartItems.find((x) => {
      console.log(x._id, product._id, x._id === product._id);
      return x._id === product._id;
    });
    if (exist) {
      setCartItems([
        ...cartItems.filter((i) => i._id !== exist._id),
        {
          ...exist,
          product_qty: exist.product_qty + 1,
        },
      ]);
    } else {
      setCartItems([...cartItems, { ...product, product_qty: 1 }]);
    }
  };

  const removeAllCartItems = () => {
    setCartItems([]);
  };

  const removeItemFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i._id !== item._id));
  };

  const increateQty = (item) => {
    var idx = -1;

    let copy = [...cartItems];

    copy.find((val, i) => {
      if (val._id === item._id) idx = i;
      return val._id === item._id;
    });

    copy[idx].product_qty += 1;

    setCartItems(copy);
  };

  const decreaseQty = (item) => {
    var idx = -1;

    let copy = [...cartItems];

    copy.find((val, i) => {
      if (val._id === item._id) idx = i;
      return val._id === item._id;
    });

    copy[idx].product_qty -= 1;

    if (copy[idx].product_qty === 0)
      copy = copy.filter((i) => i._id !== item._id);

    setCartItems(copy);
  };

  const resetToggle = () => {
    setToggleSide(false);
    setToggleNav(false);
  };

  const loadUserData = async() => {
    const userData = amIloggedIn(history);
    const userNewInfo = await API.post("/getUserDetails", { _id : userData._id })
    saveUser(userNewInfo)
    setUserData(userNewInfo.data.userData);
    setCartItems(userNewInfo.data.userData.cartItems);
  }

  const loadProducts = async() => {
    try{
      const response = await API.get("/getAllProducts")
      setProduct(response.data.products)
    }catch(e){
        console.log(e)
    }
}

  useEffect(()=>{
    const updateCart = async () =>{
        if(!userData) return;
        await API.post("/updateCart", { _id : userData._id , cartItems})
        const userNewInfo = await API.post("/getUserDetails", { _id : userData._id })
        saveUser(userNewInfo)
        console.log("Cart Updated")
    }
    updateCart()
  }, [cartItems])

  useEffect(() => {
    loadUserData()
    loadProducts()
  }, [history]);

  return (
    <>
      {userData && (
        <div className="relative ss:w-full border-8] justify-center flex">
          {/* aside nav */}
          <div className="flex justify-center border-green-40 xl:px-32 xl:min-w-full w-screen">
            <div className="md:bg-red-30 xl:h-full xl:ml-[8rem] md:fixed md:h-full lg:fixed lg:h-full xl:fixed left-0  z-40">
              <aside
                className={`z-30 xl:h-full lg:w-32 md:w-16 w-[4rem] duration-500 md:h-full h-screen md:lef-0 md:static absolute -left-96 ${toggleSide && "left-0"
                  } h-auto bg-transparent border-[#fffff] border-r-[.01px]`}
                aria-label="Sidebar"
              >
                <div className="bg-[#24262bd9] h-full py-10 px-3 flex justify-center items-center rounded">
                  <ul className="flex flex-col gap-4 md:gap-1 lg:gap-3 xl:gap-7 ">
                    <li>
                      <a
                        href="/"
                        className="flex justify-center items-center font-normal text-gray-900 rounded-lg p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <IoExitOutline className="w-4 h-4 md:h-6 md:w-6 text-orange-500" />
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="/"
                        className="flex justify-center items-center font-normal text-gray-900 rounded-lg  p-4 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <BsSearch className="w-4 h-4 md:h-5 md:w-5 text-orange-500" />
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
                        <ImCart className="w-4 h-4 md:h-5 md:w-5 text-orange-500" />
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
                      {/* <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                  <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                </a> */}
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            {/* body */}
            <div className="flex xl:w-full xl:ml-[8rem] lg:ml-[8rem] md:ml-[4rem] justify-center border-[1px overflow-hidden bg-[#1A1B1F] overflow-y-hidden shadow-lg">
              <div className="flex bg-[#1A1B1F]  w-screen  ">
                <div className="border-pink-70 w-full border-[3px min-h-screen overflow-x-hidden"
                  onClick={() => {
                    resetToggle();
                  }}
                >
                  <div className="relative w-full">
                    <div className="BurgerNav w-full fixed md:hidden z-40 bg-[#1A1B1F] flex justify-between items-center py-4 px-10">
                      <GiSlicedBread
                        onClick={(e) => {
                          e.stopPropagation();
                          setToggleSide(!toggleSide);
                        }}
                        className="block md:hidden w-7 h-7 text-orange-500"
                      />
                      <h1 className="text-pop text-[#919193] text-[16px] font-semibold ">DJOYOF</h1>
                      <GiHamburgerMenu
                        onClick={(e) => {
                          e.stopPropagation();
                          setToggleNav(!toggleNav);
                        }}
                        className="block md:hidden w-7 h-7 text-[#D98743] hover:text-text-orange-500"
                      />
                    </div>
                  </div>
                  <div className="relative border-cyan-700 border-[6px ">
                    <div
                      className={`fixed h-auto z-50  duration-500 mt-[4.5rem] -right-32 ${toggleNav && "-right-0 fixed "
                        } md:relative md:right-0 md:mt-0 md:duration-75`}>
                      {/** Top Nav */}
                      <nav className="flex  flex-wrap flex-col md:flex-row justify-center gap-3 items-center uppercase py-8 md:relative lg:justify-evenly bg-[#1A1B1F]">
                        <a
                          href="/"
                          className="  flex justify-center items-center font-normal text-gray-900 rounded-full
                         dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
                        >
                          <img
                            alt=""
                            src={userData.profile_picture}
                            className="h-12 w-12 p-1 md:hidden rounded-full object-cover"
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

                  <div className="flex font-pop border-green-500 border-[5px md:px-8 bg-[#141517i] justify-center flex-wrap py-5  mt-11 md:mt-0">
                    <div className="w-full lg:px-3">
                      {/* ALL tab  */}
                      <ul role="tablist" className="grid md:grid-cols-5 grid-cols-5 mb-0 w-full list-none pt-3
                           md:w-[80%]   lg:w-[70%]
                      ">
                        {["ALL ITEMS", "FAVORITES", "COMPLETED", "ON DELIVERY", "CANCELLED"].map(
                          (tb, idx) => (
                            <li
                              key={idx}
                              className={` last:mr-0 flex-auto  -z-1 text-center`}
                            >
                              <a
                                className={
                                  "relative rounded-tl-xl duration-200 -z-1 ease-in-out md:translate-y-3 text-[.6rem] md:text-[.8rem] font-semibold lowercase  px-1 md:px-5 py-3 md:pb-5 shadow-lg rounded-sm block leading-normal " +
                                  (openTab === idx + 1
                                    ? "text-[#353535] bg-[#F29A4B] origin-bottom text-[14px] md:translate-y-0"
                                    : "text-white bg-[#21201F] border-[.5px] border-[#515151] -600 ")
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

                      <div className="relative font-pop z-0 flex rounded-2xl text-white bg-no-repeat  bg-[#141517] h-auto"
                        style={{
                          backgroundImage: `${openTab === 1 &&
                            "url('https://cdn.discordapp.com/attachments/955281529481883729/959364059541671966/Frame_13_1.png')"
                            }`,
                        }}
                        
                      >
                        <div
                          className="px-4 py-5 pb-[8vh] h-[40vh] overflow-scroll overflow-x-hidden flex-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-black
                          scrollbar-thumb-rounded-full scrollbar-track-rounded-full
                          md:max-h-[50vh]  md:rounded-lg 
                          ">
                          <div className="tab-content tab-space relative">
                            {/** Products Container */}
                            <div
                              className={`grid  ${openTab !== 1 && "hidden"
                                } grid grid-cols-1  ss:grid-cols-2 md:grid-cols-2 sm:gap-0 lg:grid-cols-3 md:m-2 md:gap-1`}
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
                    <Cart
                      onAdd={onAdd}
                      onDecrease={decreaseQty}
                      onIncrease={increateQty}
                      cartItems={cartItems}
                      onRemove={removeItemFromCart}
                      onRemoveAll={removeAllCartItems}
                    ></Cart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      )}
    </>
  );
};
export default Home;

