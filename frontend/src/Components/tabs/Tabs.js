import React, { useState } from 'react'
import { useEffect } from 'react'
import Product from '../product/Product';
import { FaBreadSlice } from "react-icons/fa"
import { BsFillSuitHeartFill } from "react-icons/bs"
import { MdOutlineDownloadDone } from "react-icons/md"
import { MdLocalShipping } from "react-icons/md"
import { MdCancel } from "react-icons/md"
import UseDarkMode from '../DarkMode/UseDarkMode';
import { API, getUser } from '../../Utils';
import { FaTrashAlt } from 'react-icons/fa';

import InTab from './InTab';
const Tabs = ({ openTab, setOpenTab, products, onAdd, addFavorite, removeFavorite, isMyFavorite, clickableAgain }) => {
    const [hideTabs, setHideTabs] = useState(false)
    const [checkTab, setCheckTab] = useState(1);

    const [winWidth, setWinWidth] = useState(window.innerWidth)

    const [toReceive, setToReceive] = useState([])
    const [cancelled, setCancelled] = useState([])
    const [completed, setCompleted] = useState([])

    const [hadUpdate, setHadUpdate] = useState(false)

    const [colorTheme, setTheme] = UseDarkMode()


    const handleResize = () => {
        setWinWidth(window.innerWidth)
        winWidth <= 768 ? setHideTabs(true) : setHideTabs(false)

    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    const deleteCancelOrder =(id)=>{
        setCancelled(cancelled.filter((x) => x.id !== id  ))
        console.log(id)
      
    }
 
    const loadData = async () => {
        try {
            const res = await API.post("/getMyOrders", {
                _id: getUser()._id,
                orderStatus: 0
            })

            const res2 = await API.post("/getMyOrders", {
                _id: getUser()._id,
                orderStatus: -1
            })

            const res3 = await API.post("/getMyOrders", {
                _id: getUser()._id,
                orderStatus: 1
            })

            setToReceive(res.data.orders)
            setCancelled(res2.data.orders)
            setCompleted(res3.data.orders)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        loadData()
    }, [openTab])

    useEffect(() => {
        loadData()
    }, [hadUpdate])

    const icon = [
        FaBreadSlice,
        BsFillSuitHeartFill,
        MdOutlineDownloadDone,
        MdLocalShipping,
        MdCancel,
    ]
    const Tabs = [
        {
            id: 1,
            name: "All items",

        },
        {
            id: 2,
            name: "Favorites",

        },
        {
            id: 3,
            name: "Completed",

        },
        {
            id: 4,
            name: "To Receive",

        },
        {
            id: 5,
            name: "Cancelled",

        },
    ]
    return (
        <>
            <div className="flex font-pop w border-[1px bg-[#141517i] justify-center w-full 
                            ">
                <div className=' w-full '>
                    <div className={` 
                                ${hideTabs && 'justify-evenly py-5'}
                                flex w-full lg:px-0 z-0 translate-y-3 md:mt-5 border-[1px
                                `}>
                        {
                            Tabs.map((tab, index) => (
                                <InTab
                                    tab={tab}
                                    Icon={icon[index]}
                                    setOpenTab={setOpenTab}
                                    setCheckTab={setCheckTab}
                                    hideTabs={hideTabs}
                                    checkTab={checkTab}
                                    key={index}>
                                </InTab>
                            ))
                        }
                    </div>
                    <div
                        className="font-pop z-[999] w-full shadow-lg shadow-Light_shadow dark:shadow-lg duration-500 dark:shadow-[#00000069] bg-Tabs_bg border-green-500  border-[2px
                                    rounded-2xl rounded-tl-none bg-center bg-auto text-white bg-no-repeat dark:bg-[#141517] h-auto]"
                        style={{ backgroundImage: `${colorTheme == 'dark' ? "url('https://cdn.discordapp.com/attachments/755283323110293547/994837890574073907/Light_first_sec_bg.png')" : "url('https://cdn.discordapp.com/attachments/755283323110293547/961084398848057374/bg.png')"}`, backdropFilter: "blur(100px)" }}
                    >
                        <div
                            className="px-4 border-[1px z-[999]  bg-[#ffffff58] dark:bg-[#ffffff00]  py-5 pb-[8vh] h-[40vh] overflow-scroll flex-auto scrollbar-none md:max-h-[50vh]  md:rounded-lg ">
                            <div className="text-sm">
                                {/** Products Container */}
                                <div
                                    className={`grid  ${openTab !== 1 && "hidden"
                                        } grid grid-cols-1 md:grid-cols-2 sm:gap-0 lg:grid-cols-3 md:m-2 md:gap-1`}
                                    id="link2"
                                >
                                    {products.map((product) => (
                                        <Product
                                            key={product._id}
                                            onAddCart={onAdd}
                                            product={product}
                                            onAfddFav={addFavorite}
                                            onRemoveFav={removeFavorite}
                                            liked={isMyFavorite(product._id)}
                                            clickableAgain={clickableAgain}
                                        ></Product>
                                    ))}
                                </div>

                                <div
                                    className={openTab === 2 ? "block" : "hidden"}
                                    id="link2"
                                >
                                    <p>Favorites Items..</p>
                                </div>
                                <div
                                    className={openTab === 3 ? "block" : "hidden"}
                                    id="link3"
                                >
                                    <div className='grid grid-cols-2 gap-1'>
                                        {
                                            completed.map((order, idx) =>
                                                <div key={idx} className='w-full bg-[#ffffff64]  dark:text-[#fff]  rounded-xl shadow-lg shadow-Light_shadow p-5'>
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
                                                </div>)
                                        }
                                    </div>
                                </div>
                                <div
                                    className={openTab === 4 ? "block" : "hidden"}
                                    id="link3"
                                >
                        {/* To Receive Tab       */}
                                    <div className='grid grid-cols-2 gap-1'>
                                        {
                                            toReceive.map((order, idx) =>
                                                <div key={idx} className='relative bg-[#ffffff64]  dark:text-[#fff] w-full rounded-xl shadow-lg shadow-Light_shadow p-5'>
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
                                                    <button  onClick={async () => {
                                                            //const { _id, orderStatus  } = req.body
                                                            const update = await API.post("/updateOrder", {
                                                                _id: order._id,
                                                                orderStatus: -1
                                                            })
                                                            setHadUpdate(!hadUpdate)
                                                        }}
                                                    
                                                            className="w-full bg-light_del_btn dark:bg-dark_del_btn p-1 justify-center items-center flex md:p-2 rounded-md">
                                                            <p className=' text-[#ececec] mr-2  hover:text-[#Fff] '> Cancel Order </p>
                                                            <FaTrashAlt className="text-neutral-50 text-[#fff]" /> 
                                                        </button>
                                                </div>)
                                        }
                                    </div>
                                </div>
                                <div
                                    className={openTab === 5 ? "block" : "hidden"}
                                    id="link3"
                                >
                                    <div className='grid grid-cols-2 gap-2'>
                                        {
                                            cancelled.map((order, idx) =>
                                                <div key={idx} className='w-full bg-[#ffffff9c] dark:text-[#fff] rounded-xl shadow-lg shadow-Light_shadow p-5'>
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
                                                            onClick={()=>{
                                                                    deleteCancelOrder(order._id)
                                                            }} 
                                                            className=" bg-light_del_btn dark:bg-dark_del_btn p-1 justify-center items-center flex md:p-2 rounded-md">
                                                            <p className=' text-[#ececec] mr-2  hover:text-[#Fff] hover:font-semibold '> Delete </p>
                                                            <FaTrashAlt className="text-neutral-50 text-[#fff]" /> 
                                                        </button>
                                                    </div>


                                                </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Tabs