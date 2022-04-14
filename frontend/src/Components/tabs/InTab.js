import React from 'react'

function InTab({ tab,Icon,setCheckTab, hideTabs, checkTab, setOpenTab  }) {
    return (
        <>
            <div className=''>
                <div onClick={(e) => { e.preventDefault(); setOpenTab(tab.id); setCheckTab(tab.id);}}
                    className={` h-auto text-[.8em] px-7 py-2 rounded-tl-[15px] 
                    ${checkTab === tab.id ? "bg-[#d38341] -translate-y-2 ease-in duration-300 h-10" : "bg-[#21201F]"} `}>
                    <Icon className={`w-[1rem] h-auto text-white ${checkTab === tab.id ? "w-[1.35rem] ease-linear duration-400" : "w-5"} ${!hideTabs && "hidden"} `}></Icon>
                    <div className={` ${hideTabs && "hidden"} ` + (checkTab === tab.id ? "text-black" : "text-white")} >
                        <a key='' className='tracking-wide'>{tab.name}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InTab