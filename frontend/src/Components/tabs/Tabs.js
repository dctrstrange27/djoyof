import React, { useState } from 'react'
import { useEffect } from 'react'
import Product from '../product/Product';
import { FaBreadSlice } from "react-icons/fa"
import { BsFillSuitHeartFill } from "react-icons/bs"
import { MdAutoAwesome, MdOutlineDownloadDone } from "react-icons/md"
import { MdLocalShipping } from "react-icons/md"
import { MdCancel } from "react-icons/md"
import UseDarkMode from '../DarkMode/UseDarkMode';
import { API, getUser, userAPI } from '../../Utils';
import { FaTrashAlt } from 'react-icons/fa';
import { AiOutlineClear } from 'react-icons/ai'
import InTab from './InTab';
import ToReceived from './ToReceived';
import { GiConsoleController } from 'react-icons/gi';
import { orderAPI } from '../../Utils';
import Cancelled from './Cancelled';

const Tabs = ({ openTab, setOpenTab, onAdd, addFavorite, removeFavorite, isMyFavorite, clickableAgain, userData }) => {
    const [hideTabs, setHideTabs] = useState(false)
    const [checkTab, setCheckTab] = useState(1);

    const [winWidth, setWinWidth] = useState(window.innerWidth)

    const [toReceive, setToReceive] = useState([])
    const [cancelled, setCancelled] = useState([])
    const [completed, setCompleted] = useState([])
    const [hadUpdate, setHadUpdate] = useState(false)

    const [canStat, setCanStat] = useState(false)

    const [colorTheme, setTheme] = UseDarkMode()

    const [handle, setHandle] = useState(false)
    const [product, setProduct] = useState([])
        
    const getProducts = async () => {
        try {
            const response = await API.get("/getAllProducts");
            setProduct(response.data.products);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getProducts()
     
    }, [hadUpdate])

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

    const icon = [
        FaBreadSlice,
        BsFillSuitHeartFill,
        MdOutlineDownloadDone,
        MdLocalShipping,
        MdCancel,
    ]
    const Tabs = [
        { id: 1, name: "All items", },
        { id: 2, name: "Favorites", },
        { id: 3, name: "Completed", },
        { id: 4, name: "To Receive", },
        { id: 5, name: "Cancelled", },
    ]
    return (
        <>
            <div className="flex font-pop w border-[1px bg-[#141517i] justify-center w-full ">
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
                        className="font-pop z-[999] w-full shadow-lg shadow-Light_shadow dark:shadow-lg duration-500 dark:shadow-[#00000069] bg-Tabs_bg border-green-500  border-[2px]
                                    rounded-2xl rounded-tl-none bg-center bg-auto text-white bg-no-repeat dark:bg-two h-auto bg-light-tab-bg backdrop-blur-sm">
                        <div className="px-4 border-[1px z-[999] bg-[#ffffff58] dark:bg-[#ffffff00]  py-5 pb-[8vh] h-[40vh] overflow-scroll flex-auto scrollbar-none md:max-h-[50vh]  md:rounded-lg "><div className="text-sm">
                            {/** Products Container */}
                            <div className={`grid  ${openTab !== 1 && "hidden"} grid grid-cols-1 md:grid-cols-1 sm:gap-0 lg:grid-cols-3 md:m-2 md:gap-1`} id="link2">
                                {product.map((product) => (
                                    <Product
                                        key={product._id}
                                        onAddCart={onAdd}
                                        product={product}
                                        onAfddFav={addFavorite}
                                        onRemoveFav={removeFavorite}
                                        liked={isMyFavorite(product._id)}
                                        clickableAgain={clickableAgain}
                                    ></Product>
                                ))
                                }
                            </div>

                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <p>Favorites Items..</p>
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
                                    {completed.map((order, idx) =>
                                        <div key={idx} className='w-full bg-[#ffffff64] dark:bg-[#2e2d2d9f] dark:text-[#fff]  rounded-xl shadow-lg shadow-Light_shadow p-5'>
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
                            {/* To Receive Tab       */}
                            <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
                                    <ToReceived openTab={openTab} />
                                </div>
                            </div>
                            <div className={`${openTab === 5 ? "block" : "hidden"} relative h-auto border-b-[1px] border-b-[#fff]  `} id="link3">
                                <div className={``}>
                                    <button onClick={() => {
                                        //deleteAllCan()
                                    }}
                                        className=" bg-light_del_btn dark:bg-[#836b3f] right-0 -bottom-12 p-1 absolute  hover:scale-105  justify-center items-center flex md:p-2 rounded-md">
                                        <p className=' text-[#ececec] mr-2 hover:text-[#Fff] hover:font-semibold '> Clear all cancelled orders</p>
                                        <AiOutlineClear className="text-neutral-50 text-[#fff]" />
                                    </button>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                    <Cancelled openTab={openTab}/>
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