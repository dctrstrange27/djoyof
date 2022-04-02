import React, { useEffect, useState } from "react";

import { IoAddSharp } from "react-icons/io5";
import { BiMinus } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { GoCheck } from "react-icons/go";

export const Cart = ({ cartItems, onAdd, onIncrease, onDecrease, onRemove, onRemoveAll }) => {
  const [checkTab, setCheckTab] = React.useState(1);
  const [totalCost, setTotalCost] = useState(0.0);

  useEffect(() => {
    var cost = 0;
    cartItems.forEach((i) => (cost += i.product_price * i.product_qty));

    setTotalCost(cost);
  }, [cartItems]);

  return (
    <>
      <div className="flex px-10 pb-20 h-auto overflow-hidden">
        <div className="flex flex-col w-full">
          <ul
            className="flex mb-0 list-none border-[1px] overflow-hidden   overflow-y-hidden flex-wrap space-x-5 pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 text-center items-center flex max-h-10 bg-[#24262B]">
              <a
                className={
                  "duration-200 font-bold tracking-[0.1em] font-NunitoSans text-lg px-3 py-3 " +
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
                  " duration-200 font-bold tracking-[0.1em] font-NunitoSans text-lg px-3 py-3 " +
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
          <div className="relative font-pop flex justify-center items-center text-white">
            <div
              className="rounded-md bg-[#141714] px-5 max-h-[40vh] overflow-x-scroll  flex-auto scrollbar-thin scrollbar scrollbar scrollbar-thumb-zinc-600 scrollbar-track-black
                          scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
              <div className={checkTab === 1 ? "block" : "hidden"} id="link1">
                <div className="flex justify-between items-center border-b-[0.1rem] my-8">
                  <p className="text-lg font-semibold py-2">Current Order</p>
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
                    <div className="font-NunitoSans md:flex justify-between mx-8 mb-9">
                      <div className="flex justify-between space-x-16">
                        <p className="">item</p>
                        <p>name</p>
                      </div>
                      <div className="flex space-x-32">
                        <p>quantity</p>
                        <p>remove</p>
                        <p>price</p>
                      </div>
                    </div>
                    <div className=" space-y-4 mt-4">
                      {cartItems.map((i, idx) => (
                        <div
                          key={idx}
                          className=" bg-[#0E0F10] flex rounded-sm items-center justify-between"
                        >
                          <div className="flex  items-center space-x-4 w-1/2">
                            <div className="h-24 w-24 bg-[#1F1F1F] p-2">
                              <img
                                alt=""
                                src={i.image}
                                className="object-contain"
                              />
                            </div>
                            <p>{i.product_name}</p>
                          </div>
                          <div className="flex justify-between items-center w-5/12 space-x-4 mr-5 ">
                            <p className="text-sm font-thin cursor-pointer">
                              review
                            </p>
                            <div className="grid grid-cols-3 gap-4">
                              <button onClick={() => onDecrease(i)}>
                                <BiMinus className="col-span-1 h-6 w-6 text-orange-600" />
                              </button>
                              <p>{i.product_qty}</p>
                              <button onClick={() => onIncrease(i)}>
                                <IoAddSharp className="col-span-1 h-6 w-6 text-orange-600" />
                              </button>
                            </div>
                            <button onClick={() => onRemove(i)} className="bg-red-500 p-2 rounded-md">
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
                checkout..
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
