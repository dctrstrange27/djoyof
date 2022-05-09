import React, { useState } from 'react'
import { useEffect } from 'react'
import Product from '../product/Product';
import { FaBreadSlice } from "react-icons/fa"
import { BsFillSuitHeartFill } from "react-icons/bs"
import { MdOutlineDownloadDone } from "react-icons/md"
import { MdLocalShipping } from "react-icons/md"
import { MdCancel } from "react-icons/md"

import InTab from './InTab';
const Tabs = ({ openTab, setOpenTab, products, onAdd, addFavorite, removeFavorite, isMyFavorite, clickableAgain }) => {
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
                                flex w-full lg:px-3 translate-y-2 md:mt-5 border-[1px 
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
                        className="font-pop z-0 w-full shadow-lg shadow-[#00000069]  border-green-500 border-[2px rounded-2xl bg-center bg-auto text-white bg-no-repeat bg-[#141517] h-auto"
                        style={{ backgroundImage: `${openTab === 1 && "url('https://cdn.discordapp.com/attachments/755283323110293547/961084398848057374/bg.png')"}`, }}
                    >
                        <div
                            className="px-4 border-[1px  py-5 pb-[8vh] h-[40vh] overflow-scroll flex-auto scrollbar-none md:max-h-[50vh]  md:rounded-lg ">
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
            </div>
        </>
    )
}

export default Tabs