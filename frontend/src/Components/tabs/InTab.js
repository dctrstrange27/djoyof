import React from 'react'

function InTab({ tab,Icon,setCheckTab, hideTabs, checkTab, setOpenTab  }) {
    return (
        <>
            <div className=''>
                <div onClick={(e) => { e.preventDefault(); setOpenTab(tab.id); setCheckTab(tab.id);}}
                    className={` 
                              h-auto text-[.8em] px-[1rem] py-2 rounded-tl-[15px] 
                             ${checkTab === tab.id ? "  -translate-y-2 ease-in duration-300 h-10" : ""}
                             ${checkTab === tab.id  || hideTabs ? "bg-[#ff9853]" :"bg-[#21201F] "}
                             ${checkTab === tab.id  && hideTabs ? 'bg-[#3a3939] rounded-tl-lg rounded-lg px-0' : ''}
                             ${hideTabs && "bg-[#141414] rounded-tl-none "}
                    `}>
                    <Icon className={`w-[1rem] h-auto 
                                    ${checkTab === tab.id ? "w-[1.25rem] ease-linear duration-400 text-[#fc812f] " : "w-5 text-[#5b5b5c] "} 
                                    ${!hideTabs && "hidden"} 
                                
                                    `}>

                    </Icon>
                    <div className={` 
                                    ${hideTabs && "hidden"}  
                                    ${checkTab === tab.id ? "text-[#444242] font-semibold" : "text-[#b1b1b1] font-light"}
                                    
                    `}>
                        <a key='' className='tracking-wide'>{tab.name}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InTab