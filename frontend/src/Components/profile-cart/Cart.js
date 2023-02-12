import React, { useEffect, useState } from 'react'
import Item from './Item'
import { RiCloseFill } from 'react-icons/ri'
import { BsGrid1X2Fill } from 'react-icons/bs'
import { API, getUser } from '../../Utils'
import {IoMdArrowDropup} from 'react-icons/io'
import {IoMdArrowDropdown} from 'react-icons/io'
const Cart = ({ cartItems, setCartItems}) => {

    const getAddTocart=async()=>{
        const cart = await API.post('/getAddToCart',{id:getUser()._id})
        setCartItems(cart.data.cartItems) 
    }   

    useEffect(()=>{
        getAddTocart()
    },[])   

    const handleUpdate = async(id,mod,name)=>{
         if(mod == 1)setCartItems(cartItems.map((cart)=> cart._id == id ? {...cart, product_qty:cart.product_qty + 1}:cart ))
         if(mod == 0)setCartItems(cartItems.map((cart)=> cart._id == id ? {...cart, product_qty:cart.product_qty - 1}:cart ))
        try {
            const res = await API.post('/updateCartItem',{
                id:getUser()._id,
                mod:mod,
                name:name
            })
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    const removeToCart = async(id) => {
        const res = await API.post('/deleteCartItem',{id:id, userID:getUser()._id})
        setCartItems(cartItems.filter((x)=> x._id !== id ))
        console.log(res.data)
   }
    const clearCart = (id) => {
        setCartItems([])
    }
    
    return (
        <div className='mt-7 border-[1px'>
            <div className='flex gap-2 border-[1px justify-around m-auto py-3 w-[400px] md:w-[600px]'>
                    <div className='flex gap-2'>
                        <BsGrid1X2Fill className="w-5 h-5 " />
                      <h1 className=''>Items: {cartItems.length}</h1>
                    </div>
                    <h2>Total</h2>
            </div>
            <div className={`border-[1px h-auto font-nuni tracking-normal gap-2 grid grid-cols-1 ${cartItems.length == 0 ? "md:grid-cols-1":""} 
                              m-auto w-[400px] md:w-[800px] md:grid-cols-2`}>
                {!cartItems.length !== 0 ? (
                    <>
                        {cartItems.map((item, idx) => (
                            <div key={idx} className='border-[1px relative '>
                                <div className='flex flex-row gap-2 h-full border-[1px px-2 py-5 drop-shadow-md bg-[#ffffff] dark:bg-two '>
                                <RiCloseFill onClick={() => {
                                    removeToCart(item._id)
                                }} className="w-5 h-5 absolute top-2 right-2 hover:scale-105 duration-200 " />
                                    <div><img className='w-[80px] h-auto' src={item.image} /></div>
                                    <div className='border-[1px'>
                                        <h1 className='dark:text-[#FFF] text-[#3a3939]  text-md font-bold'>{item.product_name}</h1>
                                        <p className='dark:text-[#bebcbc] text-[#7b7979] text-sm '>{item.description}</p>
                                        <div className=' flex gap-2'>
                                            <p className='dark:text-[#b8b5b5] text-[#454444] font-semibold text-sm'>price:</p>
                                            <p className='text-[#1e89b4] font-semibold text-sm'>{item.product_price} php</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='absolute bottom-2 border-[1px right-2 flex gap-2 text-[#fff]'>
                                    <div className='flex flex-col h-auto border-[1px '>
                                    <IoMdArrowDropup onClick={()=>{ handleUpdate(item._id,1,item.product_name)}} className='w-7 absolute hover:scale-125 hover:text-[#Fff] duration-50 ease-in -translate-y-2 text-[#cdcdcd]  border-[1px h-auto '></IoMdArrowDropup>
                                    <IoMdArrowDropdown onClick={()=>{ handleUpdate(item._id,0,item.product_name)}} className='w-7 h-auto hover:scale-125 hover:text-[#Fff] duration-50 ease-in translate-y-2 text-[#cdcdcd]'></IoMdArrowDropdown>
                                    </div>
                                    <p className=' bg-Oone px-1 rounded-md'>{item.product_qty}x</p>
                                
                                    <p className=' bg-Oone px-1  transition delay-100 duration-100 ease-in-out hover:scale-105 rounded-md'>view Products</p>
                                </div>
                            </div>
                        ))}
                    </>) : (
                    <div className='flex justify-center border-[1px'>
                        <h1 className='text-sm text-[#797676]'>No Cart To Show</h1>
                    </div>
                )}
            </div>
            <div className='flex gap-2 justify-around pt-5 m-auto w-[400px] md:w-[600px]'>
                <button className='bg-[#b45a1e] max-w-[120px] w-full text-[#fff] px-2 hover:scale-105 duration-300 text-sm py-1 items-center flex justify-center gap-2 rounded-md'>Checkout</button>
            </div>
        </div>
    )
}

export default Cart