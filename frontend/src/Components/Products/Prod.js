import React from 'react'
import { FaHeart } from "react-icons/fa"
import { getCartLen } from '../../Utils'

const Prod = ({prod,cartItems,addToCart,setShowNotif}) => {
  return (
    <>  
      <div className="relative border-[1px flex dark:text-[#fff] text-xs justify-center py-7">
        <div className="relative border-[1px border-green-400 w-[200px] translate-x-4 md:translate-x-0">
          <div className="absolute z-20 -left-24 -top-7 -bottom-[13px] bg-product_bg dark:bg-[#191a1e] justify-center flex rounded-full items-center w-[7rem]
                          h-[7rem] w-max-[4rem] border-[.1px] border-[#944603c2] dark:border-[#f97f2ec2]">
            <img src={prod.image} className="w-[5rem] h-[3.5rem]"></img>
          </div>
          <div className="pl-10 border-[1px bg-product_lbl_bg dark:bg-four dark:shadow-2xl shadow-lg shadow-Light_shadow dark:shadow-[#424242d0] py-2 after:content-[''] after:absolute after:w-full after:h-[1px] 
                          after:translate-y-2 after:-translate-x-3 after:bg-[#944603c2] dark:after:bg-[#f97f2ec2] after:right-0 after:bottom-0">
            {/* name and price*/}
            <h1 className="tracking-wide font-pop text-[15px] py-2">{prod.product_name}</h1>
            <div className=" flex justify-evenly">
              <p className="text-Light_normal dark:text-Tabs_bg">
                {" "}
                {prod.product_price} php{" "}
              </p>
              <button 
                onClick={async()=>{
                    addToCart(prod)
                    setShowNotif(true)  
                    //console.log(prod)
                }}
                className={"dark:bg-Ofive rounded-[5px] hover:scale-105 drop-shadow-lg bg-[#bb4b23eb] hover:bg-[#ff771d] text-[#fff] dark:text-[#ffffff] py-[3px] px-[8.8px]"}>
                {" "}Add{" "}</button>
            </div>
          </div>
          <div className="border-[1px mt-4 text-[.8rem] md:text-sm flex items-center justify-evenly">
            <p className="grow">Likes</p>
            <div className="flex-none flex px-4 gap-3">
              <p>{prod.total_likes}</p>
              <FaHeart className={` w-8 h-6 ${'text-rose-500 text-neutral-600'}`} />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Prod