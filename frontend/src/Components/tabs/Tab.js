import React from 'react'
import { useState } from 'react'
import { FaBreadSlice } from "react-icons/fa"
import { BsFillSuitHeartFill } from "react-icons/bs"
import { MdOutlineDownloadDone } from "react-icons/md"
import { MdLocalShipping } from "react-icons/md"
import { MdCancel } from "react-icons/md"

const Tab = ({ setCheckTab, hideTabs, checkTab, setOpenTab }) => {
    const Tabs = [
        {
            indx: 1,
            name: "All items"
        },
        {
            indx: 2,
            name: "Favorites"
        },
        {
            indx: 3,
            name: "Completed"
        },
        {
            indx: 4,
            name: "To Receive"
        },
        {
            indx: 5,
            name: "Cancelled"
        },
    ]
    const icon = [
        FaBreadSlice,
        BsFillSuitHeartFill,
        MdOutlineDownloadDone,
        MdLocalShipping,
        MdCancel,
    ]    
    const [clicked,setClicked] = useState(1)     

   


    return (
        <>
            <ul role="tablist" className={`flex w-full flex-row text-white text-sm list-none pt-3  text-center justify-items-center py-0 `}>
                <div onClick={(e) => {
                    e.preventDefault()
                    setCheckTab(clicked)
                    setOpenTab(clicked)
                }}
                    className={`all items`}>
                    <div>
                        {icon.map((X) => {
                            return <X className={`w-5 text-[#d38341] h-auto ${!hideTabs && "hidden"} `} />
                        })}
                    </div>
                    <div className='flex'>
                        {
                            Tabs.map((tb, idx) => {
                                return <>
                                    <div className={`w-full h-auto px-7 py-2 rounded-tl-[15px] ${checkTab === idx + 1 ? "bg-[#d38341]" : "bg-[#21201F]"} `}>
                                        <div className={` ${hideTabs && "hidden"} ` + (checkTab === idx + 1 ? "text-black" : "text-white")} >
                                            <a key={idx}>{tb.name}</a>
                                        </div>
                                    </div>
                                </>
                            })}
                    </div>
                </div>




            </ul>
        </>
    )
}

export default Tab