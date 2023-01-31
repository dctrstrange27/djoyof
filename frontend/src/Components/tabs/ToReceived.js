import React, { useEffect, useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import { userAPI } from '../../Utils'
import { getUser } from '../../Utils'
const ToReceived = ({openTab}) => {
    const [toReceive, setToReceive] = useState([])
    
    const loadToReceived = async()=>{
        try {
            const res = await userAPI.post('/loadOrders',{id: getUser()._id})
            setToReceive(res.data.orders)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        loadToReceived()
    },[openTab])
    const cancelOrder = async(id)=>{
        try {
            const res = await userAPI.post(`/cancelOrder/${id}`)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
        setToReceive(toReceive.filter((order)=> order._id !== id))
    }
    return (
    <>
                  {
                                        toReceive.map((order, idx) =>
                                            <div key={idx} className='relative bg-[#ffffff64] dark:bg-[#2e2d2d9f] dark:text-[#fff] w-full rounded-xl shadow-lg shadow-Light_shadow p-5'>
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
                                                <div className='mt-8'>
                                                    <p>Payment Method : {order.transactionType} </p>
                                                </div>
                                                <button onClick={ () => {
                                                    cancelOrder(order._id)
                                                }}
                                                    className="w-full bg-light_del_btn dark:bg-[#c70a0a] hover:scale-105 duration-200 dark:hover:bg-[#fb0404]  p-1 justify-center items-center flex md:p-2 rounded-md">
                                                    <p className=' text-[#ececec] mr-2  hover:text-[#Fff] '> Cancel Order </p>
                                                    <FaTrashAlt className="text-neutral-50 text-[#fff]" />
                                                </button>
                                            </div>)
                                    }
    
    </>
  )
}

export default ToReceived