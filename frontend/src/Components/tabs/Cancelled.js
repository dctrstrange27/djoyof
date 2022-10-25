import React, { useEffect } from 'react'
import { useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import { userAPI } from '../../Utils'
import { getUser } from '../../Utils'

const Cancelled = ({openTab}) => {

    const [cancelled,setCancelled] = useState([])

    const loadCanlled = async()=>{
        const res = await userAPI.post('/cancelled')
        setCancelled(res.data.cancelled)
    }
    useEffect(()=>{
        loadCanlled()
    },[openTab])
    
    const deleteOrder =async(id)=>{
        const res = await userAPI.post(`/deleteCancelled/${id}`,{_id:getUser()._id})
        console.log(res.data)
        setCancelled(cancelled.filter((order)=>  id !== order._id ))
    }
  return (
    <>
        {
             cancelled.map((order, idx) => (
                <div key={idx} className='w-full bg-[#ffffff9c] dark:bg-[#2e2d2d9f] dark:text-[#fff] rounded-xl shadow-lg shadow-Light_shadow p-5'>
                    <p className='text-right mb-4'>Order #{order._id}</p>
                    <hr className='border-gray-700' />
                    <div>
                        {order.items.map((o, i) =>
                            <div key={i} className='flex my-2 items-center' >
                                <div className='w-1/2 flex items-center'>
                                    <img className='h-8 w-8' src={o.image} />
                                    <p className='mx-1 text-sm'>{o.product_name}</p>
                                </div>
                                <div className='w-1/2 grid grid-cols-3 items-center'>
                                    <p>{o.product_qty}</p>
                                    <p>₱ {o.product_qty * o.product_price}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='mt-8 flex justify-between items-center  '>
                        <p>Payment Method : {order.transactionType} </p>
                        <button
                            onClick={() => {
                                                       deleteOrder(order._id)
                            }}
                            className=" bg-light_del_btn dark:bg-[#ac0606] dark:hover:bg-[#c70303] p-1 duration-300 hover:scale-105 justify-center items-center flex md:p-2 rounded-md">
                            <p className=' text-[#ececec] mr-2  hover:text-[#Fff] hover:font-semibold '> Delete </p>
                            <FaTrashAlt className="text-neutral-50 text-[#fff]" />
                        </button>
                    </div>
                </div>))

        }
    </>

  )
}

export default Cancelled