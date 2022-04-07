import React, { useEffect, useState } from "react";
import Checkout from "./Checkout";

import { IoAddSharp } from "react-icons/io5";
import { BiMinus } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { GoCheck } from "react-icons/go";

export const Cart = ({ products, cartItems, onAdd, onIncrease, onDecrease, onRemove, onRemoveAll, showProofModal }) => {
  const [checkTab, setCheckTab] = React.useState(1);
  const [totalCost, setTotalCost] = useState(0.0);

  useEffect(() => {
    var cost = 0;
    cartItems.forEach((i) => (cost += i.product_price * i.product_qty));

    setTotalCost(cost);
  }, [cartItems]);

  return (
    <>
      <div className="relative flex md:px-10 2xl:px-20 border-[1px  pb-20  bg-pink-40 h-auto overflow-hidden w-full">
        <div className="flex flex-col relative  md:px-0 w-[100%]">
    {/* tab  */}
          <ul className="flex mb-0 list-none  overflow-hidden  overflow-y-hidden flex-wrap space-x-5 pt-3 pb-4 flex-row"

            role="tablist"
          >
            <li className="w-[90px] -mb-px mr-2 last:mr-0 text-center items-center flex max-h-10 bg-[#24262B]">
              <a
                className={
                  "duration-200 font-bold text-[.9rem] md:text-sm tracking-[0.1em] font-NunitoSans text-lg px-3 py-3 " +
                  (checkTab === 1
                    ? "text-[#F29A4B]"
                    : "text-white -600 bg-transparent")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setCheckTab(1);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Cart
              </a>
              <div className="flex justify-center items-center ">
                <ImCart className="w-4 h-4 text-[#F29A4B]" />
              </div>
            </li>
            <li className="-mb-px mr-2 last:mr-0 text-center items-center flex max-h-10 bg-[#24262B]">
              <a
                className={
                  " duration-200 font-bold  text-[.9rem] md:text-sm  tracking-[0.1em] font-NunitoSans text-lg px-3 py-3 " +
                  (checkTab === 2
                    ? "text-[#F29A4B]"
                    : "text-white -600 bg-transparent")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setCheckTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Checkout
              </a>
              <div className="flex justify-center items-center ">
                <GoCheck className="w-6 h-6 text-[#F29A4B]" />
              </div>
            </li>
          </ul>
          <div className="bg-[#141517] md:rounded-2xl md:px-5 font-pop flex justify-center items-center text-white">
            <div className="rounded-md  px-5 max-h-[100vh] overflow-x-scroll  flex-auto scrollbar-thin scrollbar scrollbar scrollbar-thumb-zinc-600 scrollbar-track-black
                          scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
              <div className={checkTab === 1 ? "block" : "hidden"} id="link1">
                <div className="flex justify-between items-center border-b-[0.1rem] my-8">
                  <p className="text-[15px] md:text-sm font-semibold py-2">Current Order</p>
                  <button
                    onClick={() => {
                      // kunwari lang to di pa final HAHA
                      onRemoveAll();
                    }}
                    className={
                      "text-xs group-hover:animate-pulse text-[#000000] rounded-[8px] py-2 px-3.5 bg-[#FFCB9D]"
                    }
                  >
                    Clear All
                  </button>
                </div>
                {cartItems.length === 0 ? (
                  <p className="text-center mt-4 text-xs text-gray-400 font-Poppins">
                    No Items On Cart
                  </p>
                ) : (
                  <>
                    {/* fields */}
                    <div className=" text-[14px]  md:text-[15px] flex justify-between font-NunitoSans md:flex md:justify-between md:mx-3 mb-9">
                      <div className="flex gap-3 md:px-3  md:justify-evenly md:space-x-16">
                        <p className="">item</p>
                        <p>name</p>
                      </div>
                      <div className=" flex justify-center gap-2 md:space-x-32 ">
                        <p>quantity</p>
                        <p>remove</p>
                        <p>price</p>
                      </div>
                    </div>
                    {/* //current item */}
                    <div className="md:space-y-4 md:mt-4 ">
                      {cartItems.map((i, idx) => (
                        <div
                          key={idx}
                          className=" bg-[#0E0F10] text-[14px] justify-between md:text-[15px] flex rounded-sm items-center md:justify-between"
                        >
                          <div className=" flex gap-3 md:px-3 md:justify-evenly  md:space-x-16  text-[13px]  md:text-[15px]  bg-[#1F1F1F]  md:p-2">
                            <div className="relative flex items-center bg-gray-500 h-[50px] w-[50px]">
                              <img
                                alt=""
                                src={i.image}
                                className="object-contain"
                              />
                            </div>
                            <div className="flex items-center md:space-x-4 md:w-1/2">

                              <p className=" ">{i.product_name}</p>
                            </div>


                          </div>
                          <p className="font-thin cursor-pointer">
                            review
                          </p>
                          <div className=" flex justify-center gap-2 md:space-x-32">

                            <div className="grid grid-cols-3 gap-2 md:gap-4">
                              <button onClick={() => onDecrease(i)}>
                                <BiMinus className="col-span-1  h-4  w-4  md:h-6 md:w-6 text-orange-600" />
                              </button>
                              <p>{i.product_qty}</p>
                              <button onClick={() => onIncrease(i)}>
                                <IoAddSharp className="col-span-1 h-4  w-4 md:h-6 md:w-6 text-orange-600" />
                              </button>
                            </div>
                            <button onClick={() => onRemove(i)} className="bg-red-500 p-1  md:p-2 rounded-md">
                              <FaTrashAlt className="text-neutral-50" />
                            </button>
                            <p>${i.product_price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div></div>
                      <p>${totalCost}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div></div>
                      <button
                        className={
                          "text-sm group-hover:animate-pulse font-medium text-[#000000] rounded-[8px] py-2 px-3.5 bg-[#FFCB9D]"
                        }
                      >
                        Confirm Orders
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div className={checkTab === 2 ? "block" : "hidden"} id="link1">
              <Checkout products={products} showProofModal={showProofModal}></Checkout>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
