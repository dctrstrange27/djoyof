import React from 'react'
import Item from './Item'
import { RiCloseFill } from 'react-icons/ri'
import { BsGrid1X2Fill } from 'react-icons/bs'

const Cart = ({ cartItems, setCartItems }) => {

    const removeToCart = (id) => {
        setCartItems(cartItems.filter(cart => cart._id !== id))
    }

    const clearCart = (id) => {
        setCartItems([])
    }

    return (
        <>  
        <div className='flex gap-2 justify-around  m-auto w-[400px] md:w-[600px]'>
                    <div>
                        <BsGrid1X2Fill className="w-5 h-5" />
                        <h1 className=''>Items: {cartItems.length}</h1>
                    </div>
                    <h2>Total</h2>
                </div>
            <div className='border-[1px h-auto font-nuni tracking-normal gap-2 grid grid-cols-1 md:grid-cols-2 m-auto w-[400px] md:w-[600px]'>
                {cartItems.length !== 0 ? (
                    <>
                        {cartItems.map((item, idx) => (
                            <div key={idx} className='border-[1px relative '>
                                <RiCloseFill onClick={() => {
                                    removeToCart(item._id)
                                    console.log(item._id)
                                }} className="w-5 h-5 absolute hover:scale-105 duration-200 right-2 top-1" />
                                <div className='flex flex-row gap-2 h-full border-[1px px-2 py-5 bg-two '>
                                    <div><img className='w-[80px] h-auto' src={item.image} /></div>
                                    <div className='border-[1px'>
                                        <h1 className='text-[#FFF] text-md font-bold'>{item.product_name}</h1>
                                        <p className='text-[#bebcbc] text-sm '>{item.description}</p>
                                        <p className=' flex gap-2'>
                                            <p className='text-[#b8b5b5] text-sm'>price:</p>
                                            <p className='text-[#2bbaf2] font-semibold text-sm'>{item.product_price} php</p>
                                        </p>
                                    </div>
                                </div>
                                <div className='absolute bottom-2 right-2 flex gap-2 '>
                                    <p className=' bg-Oone px-1 rounded-md'>{item.product_qty}x</p>
                                    <p className=' bg-Oone px-1 rounded-md'>view Products</p>
                                </div>
                            </div>
                        ))}
                    </>) : (
                    <div className='flex justify-center border-[1px'>
                        <h1 className='text-sm text-[#797676]'>No Task To Show</h1>
                    </div>
                )}


            </div>
        </>
    )
}

export default Cart