import React, { useState } from "react";
import { MdCheckBox } from "react-icons/md";
import { BsFillBackspaceFill } from "react-icons/bs";
import CheckDetails from "./CheckDetails";
import { BsBoxSeam } from "react-icons/bs"
import { MdDeleteSweep } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
function Checkout({ proofView,check,setCheck,check2,setCheck2,shippingFee, totalPay, TotalPayment, deleteOrder, deleteNewCartItems, newCartItems, cartItems, products, showProofModal, onRemove }) {

 
  return (
    <>
      <div key={cartItems} className="parent relative h-auto border-[1px border-pink-500 w-full flex flex-col justify-center md:flex-row xl:py-10 px-0 py-0 items-center">
        <div
          className="left w-full h-full bg-gren-500 px-5 py-4 flex flex-col md:gap-5 gap-3 text-sm font-nsans">
          <img
            src={require("../../img/checkout_tag.png")}
            className="h-[33px] w-[144px]"
          ></img>
          <h1 className="font-bold tracking-wide">PAYMENT METHOD</h1>
          <div className="COD flex justify-between">
            <p>Cash on Delivery</p>
            <input
              type='checkbox'
              checked={check}
              value={check}
              onChange={(e) => {
                setCheck(true) 
                setCheck2(false)
              } }
       
              className=" h-4 w-4 border border-gray-300 rounded-sm bg-white "
            />
          
          </div>
          <div className="Gcash flex justify-between">
            <p>Online payment/Gcash</p>
            <input
              type='checkbox'
              checked={check2}
              value={check2}
              onChange={(e) => {
                setCheck(false) 
                setCheck2(true)
              } }
         
              className=" h-4 w-4 border border-gray-300 rounded-sm bg-white "
            />
            
          </div>
          <div className={`button border-[1px flex justify-end`}>
            <button
                 onClick={() => { showProofModal() }}
              className={`h-7 w-24 text-sm font-bold rounded-md text-[#323232] bg-[#D98743] ${!check2 && "hidden absolute right-0"} `}>
             Send Proof
            </button>

          </div>
          <div className="Order-item flex justify-between">
            <p>Order Total Items: </p>
            <p className="w-18 px-2 py-1 h-7 text-xs border-[1px] ">{totalPay} php</p>
          </div>
          <div className="Total-payment flex justify-between">
            <p>ShippinFee:  </p>
            <p className="w-18 px-2 py-1 h-7 text-xs border-[1px]"> {shippingFee} php</p>
          </div>
          <div className="Total-payment flex justify-between">
            <p>Total Payment: </p>
            <p className="w-18 px-2 py-1 h-7 text-xs border-[1px]">{TotalPayment} php</p>
          </div>
       
        </div>
        <div className="px-5 py-4 w-full h-full border-[1px bg-gra-500">
          <div className="flex justify-between border-b-[1px py-2">
            <h1>Current Items</h1>
            <BsBoxSeam className="h-6 w-7 text-[#088074]"></BsBoxSeam>
          </div>
          <div className="flex items-center justify-between border-[1px">

          </div>
          {newCartItems.map((x, index) => (
            <div className="border-[1px mt-2 border-green-400">
              <div className='relative parent grid grid-cols-7 bg-[#0f0f11d2]  gap-4 border-[1px py-2 items-center'>
                <div className='relative border-[1px h-[5vh] max-w-[5rem] w-[3rem]'>
                  <img src={x.image} className="absolute  border-[1px  inset-y-1 inset-x-0"></img>
                </div>
                {/* <img src={console.log(cartItems)} className="h-12 w-12"></img> */}
                <div className='col-span-3'>
                  <h1 className=' col-span-3 text-[.8rem]'>{x.product_name}</h1>
                  <p className='text-[.6rem]'>{x.qty}</p>
                </div>
                <p className='text-[.8rem]'> {x.product_qty} </p>
                <p className='text-[.8rem]'> {x.product_price} </p>
                <div className='relative  border-[1px h-full w-full'>
                  <div onClick={() => deleteNewCartItems(x)} className='absolute flex inset-y-0 inset-x-2 border-[1px justify-center max-w-[3rem] min-w-[2.2rem] items-center'>
                    <div className='rounded px-2 py-2.5 overflow-hidden  bg-[#CD434C] relative hover:bg-gradient-to-r hover:from-[#CD434C] hover:to-[#f36b74] hover:ring-2 hover:ring-offset-0 hover:ring-[#CD434C] transition-all ease-out duration-300'>
                      <RiDeleteBin6Line className='w-4 h-4 text-white'></RiDeleteBin6Line>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center border-b-[1px py-3">
            <button onClick={() => {
              deleteOrder()
              console.log(newCartItems)
            }} className="border-[1px rounded-lg bg-[#b8505c] flex justify-evenly items-center w-52 p-2">
              <p className="text-sm">Delete order</p>
              <MdDeleteSweep className="h-6 w-7 text-[#e8ecec]"></MdDeleteSweep>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
