import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
function CheckDetails({ product }) {
    return (
        <div className='parent grid grid-cols-7 gap-2 border-[1px py-2 items-center'>
            <img src={product.image} className="h-12 w-12"></img>
            <div className=' col-span-3'>
                <h1 className=' col-span-3 text-[.8rem]'>{product.product_name}</h1>
                <p className='text-[.6rem]'>Quantity</p>
            </div>
            <p className='text-[.8rem]'> {1} </p>
            <p className='text-[.8rem]'> {product.product_price} </p>
            <div className='bg-[#CD434C] flex justify-center h-full items-center'>
                <RiDeleteBin6Line className='w-5 h-5 text-white'></RiDeleteBin6Line>
            </div>

        </div>
    )
}

export default CheckDetails