import React from 'react'

function InTab({ tab,Icon,setCheckTab, hideTabs, checkTab, setOpenTab}) {
    return (
        <>
            <div className=''>
                <div onClick={(e) => { e.preventDefault(); setOpenTab(tab.id); setCheckTab(tab.id);}}
                    className={` 
                              h-auto text-[.8em] px-[1rem] border-[1px py-2 rounded-t-[15px]  border-[1px cursor-pointer
                             ${checkTab === tab.id ? " -translate-y-[.8em] transition-transform duration-300 h-10" : ""}
                             ${checkTab === tab.id  || hideTabs ? "bg-[#dedddd] text-[.9em] tracking-wide dark:bg-[#ff9853]" :" bg-[#949494] dark:bg-[#21201F] "}
                             ${checkTab === tab.id  && hideTabs ? 'dark:bg-[#3a3939] rounded-tl-lg rounded-lg px-0' : ''}
                             ${hideTabs && "dark:bg-[#141414] rounded-tl-none "}
                    `}>
                    <Icon className={`w-[1rem] h-auto 
                                    ${checkTab === tab.id ? "w-[1.25rem] ease-linear duration-400  dark:text-[#fc812f] " : "w-5 dark:text-[#5b5b5c] "} 
                                    ${!hideTabs && "hidden"} 
                                    `}>

                    </Icon>
                    <div className={` 
                                    ${hideTabs && "hidden"}  
                                    ${checkTab === tab.id ? "dark:text-[#444242] text-[#0f0f0f] font-semibold" : "dark:text-[#b1b1b1] font-light"}
                                    
                    `}>
                        <a key='' className='tracking-wide'>{tab.name}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InTab