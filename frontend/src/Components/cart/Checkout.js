import React, { useState } from "react";
import { MdCheckBox } from "react-icons/md";
import { BsFillBackspaceFill } from "react-icons/bs";
import CheckDetails from "./CheckDetails.js";
import { BsBoxSeam } from "react-icons/bs"
import { MdDeleteSweep } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import {API} from '../../Utils'
function Checkout({proof, onPlaceOrder,check,setCheck,check2,
                   setCheck2,TotalPayment, cartItems,
                   showProofModal, userData,setCheckTab,loadUserData,confirmCart,setConfirmCart }) {

    const isDisabled = ( ) => {
        if(!cartItems) return true
        else if(cartItems.length === 0) return true

        if(!check && !check2) return true
        if(check2)
            if(!proof) return true
        return false
    }
    const delConOrders=(id)=>{
        setConfirmCart(confirmCart.filter(x => x._id !== id))
    }
    const deleteOrder=()=>{
        setConfirmCart([])
    }
    const shippingFee = 30;
    
    const cartTotal=()=>{
        let total = 0;
        confirmCart.map((cart =>{ total += cart.product_qty * cart.product_price}))
        return total
    }
    const totalPayment=()=>(cartTotal() + shippingFee)
    const placeOrder = async () => {
        try {
            const response = await API.post("/place_order", {
                email_address: userData.email_address,
                orders: {
                    customer_name: userData.customer_name,
                    customer_address: userData.customer_address,
                    contact_no: userData.contact_no,
                    items: confirmCart,
                    total: totalPayment(),
                    transactionType: check ? "COD" : "GCash"
                }
            })
            loadUserData()
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div key={cartItems} className="parent relative h-auto border-[1px border-pink-500 w-full flex flex-col justify-center md:flex-row  px-0 py-0 items-center">
                <div
                    className="left w-full h-full bg-gren-500 px-5 py-4 flex flex-col md:gap-5 gap-3 dark:text-[#fff] text-sm font-nsans">
                  
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
                            }}
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
                            }}

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
                        <p className="w-18 px-2 py-1 h-7 text-xs border-[1px] ">{cartTotal()} php</p>
                    </div>
                    <div className="Total-payment flex justify-between">
                        <p>ShippinFee:  </p>
                        <p className="w-18 px-2 py-1 h-7 text-xs border-[1px]"> {shippingFee} php</p>
                    </div>
                    <div className="Total-payment flex justify-between">
                        <p>Total Payment: </p>
                        <p className="w-18 px-2 py-1 h-7 text-xs border-[1px]">{totalPayment()} php</p>
                    </div>

                    <button onClick={() => { 
                        placeOrder()
                        setCheckTab(1)
                        }}
                        disabled={isDisabled()}
                        className={`${isDisabled()? 'bg-[#896751]' : 'bg-[#ff9853]'} border-[1px rounded-lg  text-gray-800 font-bold flex justify-evenly items-center w-1/2 mx-auto mt-8 p-2`}>
                        <p className="text-sm">Place Order</p>
                    </button>
                </div>
                <div className="px-5 py-4 w-full h-full border-[1px] border-[#fff] bg-gra-500 dark:text-[#fff]">
                    <div className="flex justify-between border-b-[1px py-2">
                        <h1>Current Items</h1>
                        <BsBoxSeam className="h-6 w-7 hover:text-[#19978a] text-[#088074]"></BsBoxSeam>
                    </div>
                    <div className="flex items-center justify-between border-[1px">

                    </div>
                    {confirmCart.map((x, index) => (
                        <div key={index} className="border-[1px mt-2 border-green-400">
                            <div className='relative parent grid grid-cols-7 bg-[#ffffff9c] dark:bg-[#0f0f11d2] gap-4 border-[1px py-2 items-center'>
                                <div className='relative border-[1px h-[5vh] max-w-[5rem] w-[3rem]'>
                                    <img src={x.image} className="absolute  border-[1px  inset-y-1 inset-x-0"></img>
                                </div>
                               
                                <div className='col-span-3'>
                                    <h1 className=' col-span-3 text-[.8rem]'>{x.product_name}</h1>
                                    <p className='text-[.6rem]'>{x.qty}</p>
                                </div>
                                <p className='text-[.8rem]'> {x.product_qty} </p>
                                <p className='text-[.8rem]'> {x.product_price} </p>
                                <div className='relative  border-[1px h-full w-full'>
                                    <div onClick={() => delConOrders(x._id)} className='absolute flex inset-y-0 inset-x-2 border-[1px justify-center max-w-[3rem] min-w-[2.2rem] items-center'>
                                        <div className='rounded px-2 py-2.5 overflow-hidden  bg-[#CD434C] relative hover:bg-gradient-to-r hover:from-[#CD434C] hover:to-[#f36b74] hover:ring-2 hover:ring-offset-0 hover:ring-[#CD434C] transition-all ease-out duration-300'>
                                            <RiDeleteBin6Line className='w-4 h-4 text-[#fff] dark:[#]'></RiDeleteBin6Line>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                    <div className="flex justify-center border-b-[1px py-3">
                        <button onClick={() => {
                            deleteOrder()
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