import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
function CheckDetails({deleteNewCartItems,newCartItems }) {
    return (
        <div className='relative parent grid grid-cols-7 bg-[#0f0f11d2]  gap-4 border-[1px] border-[#fff] py-2 items-center'>
            <div className='relative border-[1px h-[5vh] max-w-[5rem] w-[3rem]'>
                <img src={newCartItems.image} className="absolute  border-[1px  inset-y-1 inset-x-0"></img>
            </div>
            {/* <img src={console.log(cartItems)} className="h-12 w-12"></img> */}
            <div className='col-span-3'>
                <h1 className=' col-span-3 text-[.8rem]'>{newCartItems.product_name}</h1>
                <p className='text-[.6rem]'>{newCartItems.qty}</p>
            </div>
            <p className='text-[.8rem]'> {newCartItems.product_qty} </p>
            <p className='text-[.8rem]'> {newCartItems.product_price} </p>
            <div className='relative  border-[1px h-full w-full'>
                <div onClick={() =>  deleteNewCartItems()} className='absolute flex inset-y-0 inset-x-2 border-[1px justify-center max-w-[3rem] min-w-[2.2rem] items-center'>
                    <div className='rounded px-2 py-2.5 overflow-hidden  bg-[#CD434C] relative hover:bg-gradient-to-r hover:from-[#CD434C] hover:to-[#f36b74] hover:ring-2 hover:ring-offset-0 hover:ring-[#CD434C] transition-all ease-out duration-300'>
                    <RiDeleteBin6Line className='w-4 h-4 text-white'></RiDeleteBin6Line>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default CheckDetails