import React from 'react'
import { Link } from 'react-router-dom'
const Nav = ({nav,Icon,checkNav,setCheckNav}) => { 
  return (
    <>
      <Link to={nav.nav} onClick={(e) => { setCheckNav(nav.id) }} className={`border-black border-[1px text-[12px] xl:text-[15px] tracking font-pop font-normal leading-5 flex
         hover:text-[#d36c2b] dark:hover:text-[#ec8f42] ${checkNav === nav.id ? "text-Aside_icon font-bold  dark:text-Ofive" : "text-[#151a1e] dark:text-[#abadb2]"} `}>
                            <Icon className='w-[1rem] xl:invisible -translate-y-[2px] h-auto mr-2'></ Icon>
                            <h1 className='hidden md:block duration-200  text-[15px] font-medium  font-mulish ease-linear'>{nav.name}</h1>
                        </Link> 
    </>
  )
}
export default Nav