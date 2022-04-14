import React, { useState } from 'react'
import { useEffect } from 'react'
import Product from '../product/Product';
import { FaBreadSlice } from "react-icons/fa"
import { BsFillSuitHeartFill } from "react-icons/bs"
import { MdOutlineDownloadDone } from "react-icons/md"
import { MdLocalShipping } from "react-icons/md"
import { MdCancel } from "react-icons/md"
import Tab from './Tab';
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
            <div className="flex font-pop border-[1px 2xl:px-20 md:px-8 bg-[#141517i] justify-center flex-wrap py-5  mt-11 md:mt-0">
                <div className="flex w-full lg:px-3 translate-y-2 mt-5">
                    {
                        Tabs.map((tab,index) => (
                            <InTab
                                tab={tab}
                                Icon={icon[index]}
                                setOpenTab={setOpenTab}
                                setCheckTab={setCheckTab}
                                hideTabs={hideTabs}
                                checkTab={checkTab}>
                            </InTab>
                        ))
                    }
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