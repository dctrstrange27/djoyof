import React, { useState } from 'react'
import { useEffect } from 'react'
import Product from '../product/Product';
import { FaBreadSlice } from "react-icons/fa"
import { BsFillSuitHeartFill } from "react-icons/bs"
import { MdOutlineDownloadDone } from "react-icons/md"
import { MdLocalShipping } from "react-icons/md"
import { MdCancel } from "react-icons/md"
import Tab from './Tab';

const Tabs =({ openTab, setOpenTab, products, onAdd, addFavorite, removeFavorite, isMyFavorite, clickableAgain })=> {
    const [hideTabs, setHideTabs] = useState(false)
    const [checkTab, setCheckTab] = useState(1);

    const [winWidth, setWinWidth] = useState(window.innerWidth)

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

    return (
        <>
            <div className="flex font-pop border-[1px 2xl:px-20 md:px-8 bg-[#141517i] justify-center flex-wrap py-5  mt-11 md:mt-0">
                <div className="w-full lg:px-3">
                    {/* ALL tab  */}
                    {/* <Tab setOpenTab={setOpenTab} setCheckTab={setCheckTab} hideTabs={hideTabs} checkTab={checkTab} ></Tab> */}
                    <ul role="tablist" className={`flex w-full text-white text-sm list-none pt-3  text-center justify-items-center py-0 `}>
                        <div onClick={(e) => { e.preventDefault(); setOpenTab(1); setCheckTab(1); }} className={`all items`}>
                            <FaBreadSlice className={`w-5 text-[#d38341] h-auto ${!hideTabs && "hidden"} `}></FaBreadSlice>
                            <div className={`w-full h-auto px-7 py-2 rounded-tl-[15px] ${checkTab === 1 ? "bg-[#d38341]" : "bg-[#21201F]"} `}>
                                <a className={`  ${hideTabs && "hidden"} ` + (checkTab === 1 ? "text-black" : "text-white")}>all Items</a>
                            </div>
                        </div>
                        <div onClick={(e) => { e.preventDefault(); setOpenTab(2); setCheckTab(2); }} className='Favorites'>
                            <BsFillSuitHeartFill className={`w-5 text-[#d38341] h-auto ${!hideTabs && "hidden"} `}></BsFillSuitHeartFill >
                            <div className={`w-full h-auto px-7 py-2 rounded-tl-[15px] ${checkTab === 2 ? "bg-[#d38341]" : "bg-[#21201F]"} `}>
                                <a className={`  ${hideTabs && "hidden"} ` + (checkTab === 2 ? "text-black" : "text-white")}>Favorites</a>
                            </div>
                        </div>
                        <div onClick={(e) => { e.preventDefault(); setOpenTab(3); setCheckTab(3); }} className='Completed'>
                            <MdOutlineDownloadDone className={`w-5 text-[#d38341] h-auto ${!hideTabs && "hidden"} `}></MdOutlineDownloadDone >
                            <div className={`w-full h-auto px-7 py-2 rounded-tl-[15px] ${checkTab === 3 ? "bg-[#d38341]" : "bg-[#21201F]"} `}>
                                <a className={`  ${hideTabs && "hidden"} ` + (checkTab === 3 ? "text-black" : "text-white")}>Completed</a>
                            </div>
                        </div>
                        <div onClick={(e) => { e.preventDefault(); setOpenTab(4); setCheckTab(4); }} className='To Receive'>
                            <MdLocalShipping className={`w-5 text-[#d38341] h-auto ${!hideTabs && "hidden"} `}></MdLocalShipping>
                            <div className={`w-full h-auto px-7 py-2 rounded-tl-[15px] ${checkTab === 4 ? "bg-[#d38341]" : "bg-[#21201F]"} `}>
                                <a className={`  ${hideTabs && "hidden"} ` + (checkTab === 4 ? "text-black" : "text-white")}>To Receive</a>
                            </div>
                        </div>
                        <div onClick={(e) => { e.preventDefault(); setOpenTab(5); setCheckTab(5); }} className='Cancelled'>
                            <MdCancel  className={`w-5 text-[#d38341] h-auto ${!hideTabs && "hidden"} `}></MdCancel >
                            <div className={`w-full h-auto px-7 py-2 rounded-tl-[15px] ${checkTab === 5 ? "bg-[#d38341]" : "bg-[#21201F]"} `}>
                                <a className={`  ${hideTabs && "hidden"} ` + (checkTab === 5 ? "text-black" : "text-white")}>Cancelled</a>
                            </div>
                        </div>

                    </ul>
                </div>
                <div
                    className="relative font-pop z-0 w-full border-green-500 border-[5px  rounded-2xl bg-center bg-auto text-white bg-no-repeat bg-[#141517] h-auto"
                    style={{
                        backgroundImage: `${openTab === 1 &&
                            "url('https://cdn.discordapp.com/attachments/755283323110293547/961084398848057374/bg.png')"
                            }`,
                    }}
                >
                    <div
                        className="px-4 py-5 pb-[8vh] h-[40vh] overflow-scroll overflow-x-hidden flex-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-black
                          scrollbar-thumb-rounded-full scrollbar-track-rounded-full
                          md:max-h-[50vh]  md:rounded-lg 
                          "
                    >
                        <div className="tab-content tab-space relative">
                            {/** Products Container */}
                            <div
                                className={`grid  ${openTab !== 1 && "hidden"
                                    } grid grid-cols-1 ss:grid-cols-2 md:grid-cols-2 sm:gap-0 lg:grid-cols-3 md:m-2 md:gap-1`}
                                id="link2"
                            >
                                {products.map((product) => (
                                    <Product
                                        key={product._id}
                                        onAddCart={onAdd}
                                        product={product}
                                        onAddFav={addFavorite}
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
                                <p>Completed Items..</p>
                            </div>
                            <div
                                className={openTab === 4 ? "block" : "hidden"}
                                id="link3"
                            >
                                <p>To Receive..</p>
                            </div>
                            <div
                                className={openTab === 5 ? "block" : "hidden"}
                                id="link3"
                            >
                                <p>Cancelled Items..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tabs