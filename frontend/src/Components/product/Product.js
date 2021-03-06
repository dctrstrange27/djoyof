import React from "react";
import { FaHeart } from "react-icons/fa"

const Product = ({ product, onAddCart, onAddFav, liked, onRemoveFav, clickableAgain }) => {
  return (
    <>
      <div className="relative flex border-[1px text-xs justify-center py-7">
        <div className="relative border-[1px border-green-400 w-[200px] translate-x-4 md:translate-x-0">
          <div className="absolute z-20 -left-12 -bottom-[13px] bg-[#191a1e] justify-center flex rounded-full items-center w-[5rem] h-[5rem] w-max-[4rem] border-[.1px] border-[#f97f2ec2]">
            <img src={product.image} className="w-[3rem] h-[3.5rem]"></img>
          </div>
          <div className="bg-[#191a1e]  pl-10 shadow-2xl shadow-[#424242d0] py-2 after:content-[''] after:absolute after:w-full after:h-[1px] after:translate-y-2 after:-translate-x-3 after:bg-[#f97f2ec2] after:right-0 after:bottom-0">
            {/* name and price*/}
            <h1 className="tracking-wide">{product.product_name}</h1>
            <div className=" flex justify-evenly">
              <p className="text-[#cacaca]">
                {" "}
                {product.product_price} php{" "}
              </p>
              <button onClick={() => { onAddCart(product); }} 
                className={"bg-[#f89c5e] rounded-[5px]  text-black px-[8.5px]"}>
                {" "}Add{" "}</button>
            </div>
          </div>
          {/* <div className="border-[1px mt-4 text-[.8rem] md:text-sm flex items-center justify-evenly">
            <p className="grow">Likes</p>
            <div className="flex-none flex px-4 gap-3">
              <p>{product.total_likes}</p>
              <FaHeart onClick={() => {
                if (!clickableAgain) return
                if (liked) onRemoveFav(product._id)
                else onAddFav(product._id)
              }} className={` w-8 h-6 ${liked ? 'text-rose-500' : 'text-neutral-600'}`} />
            </div>
          </div> */}
        </div>
      </div>

    </>
  );
};

export default Product;
