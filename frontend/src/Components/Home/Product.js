import React from "react";
const Product = (props) => {
  const { product, onAddCart } = props;

  return (
    <>
      <div className="px-0 flex">
        <div className="">
          <img className="object-contain h-auto w-[60px]" alt="" src={product.image} />
        </div>

        <div className="ss:w-ss w-screen flex-col pl-2">
          <h1 className="text-[.8rem] font-light font-pop">{product.product_name}</h1>
          <div className="flex justify-between border-b-[.4px] border-[#7070705c]">
            <p className="text-[.7rem] bottom-0">price:</p>
            <div className="font-light flex justify-center items-center">
              <p className="price_1 text-[#000000] rounded-[8px] py-[2px] mr-2 px-2.5 text-[12px] bg-[#F29A4B]">
                {" "}
                {product.product_price} php{" "}
              </p>
              <button
                onClick={() => {
                  onAddCart(product);
                }}
                className={
                  "text-[.8rem] group-hover:animate-pulse font-medium text-[#000000] rounded-[8px] py-[2px] px-3.5 bg-[#FFCB9D]"
                }
              >
                {" "}
                Add{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
