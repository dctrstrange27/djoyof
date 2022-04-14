import React from 'react'
import { GiSlicedBread } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
function MobileNav({Toggle,toggleNav,setToggleNav,toggleAside,setToggleAside}) {

    return (
        <div className="BurgerNav w-full drop-shadow-2xl fixed md:hidden  z-40 bg-[#1A1B1F] flex justify-between items-center py-4 px-10">
            <GiSlicedBread
                onClick={(e) => {
                    e.stopPropagation();
                    // console.log(toggleAside)
                    setToggleAside(!toggleAside);
                }}
                className="block md:hidden w-7 h-7 text-orange-500"
            />
            <h1 className="text-pop text-[#919193] text-[16px] font-semibold ">
                DJOYOF
            </h1>
            <GiHamburgerMenu
                onClick={(e) => {
                    e.stopPropagation();
                   
                    setToggleNav(!toggleNav);
                }}
                className="block md:hidden w-7 h-7 text-[#D98743] hover:text-text-orange-500"
            />
        </div>
    )
}

export default MobileNav