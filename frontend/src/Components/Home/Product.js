import React from "react";
import { FaHeart } from "react-icons/fa"

const Product = ({ product, onAddCart, onAddFav, liked, onRemoveFav, clickableAgain }) => {
  return (
    <>
      <div className="group relative flex px-8 items-center place-content-evenly h-auto md:mx-2 lg:mx-4 ">
        <div className=" bg-[#212121] absolute border-[#F29A4B] border-2  -left-3 z-10 -bottom-4 rounded-full ">
          <img className="object-contain h-28 w-28 rounded-full p-2" alt="" src={product.image} />
        </div>
        <div className="bg-[#1e1e21]/90 duration-150 hover:bg-transparent col-span-3 h-auto space-y-6 w-full max-w-sm pl-20 py-4 mt-8 relative after:content-[''] after:w-[90%] after:h-[2px]  after:bg-[#F29A4B] after:left-0 after:bottom-0 after:top-[110%] after:absolute">
          <h1 className="text-base font-semibold font-Poppins">{product.product_name}</h1>
          <div className="flex text-base font-light mt-1 space-x-4">
            <p className="price_1 font-medium text-[#000000] rounded-[8px] py-[2px] px-2.5 text-[12px] bg-[#F29A4B]">
              {" "}
              {product.product_price} php{" "}
            </p>
            <button
              onClick={() => {
                onAddCart(product);
              }}
              className={
                "text-sm group-hover:animate-pulse font-medium text-[#000000] rounded-[8px] py-[2px] px-3.5 bg-[#FFCB9D]"
              }
            >
              {" "}
              Add{" "}
            </button>
          </div>
          <FaHeart onClick={()=> {
              if(!clickableAgain) return
              if(liked) onRemoveFav(product._id)
              else onAddFav(product._id)
          }} className={`w-5 h-5 ${liked ? 'text-rose-500' : 'text-neutral-600'}`}/>
          <p>{product.total_likes}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
