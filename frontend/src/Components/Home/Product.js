import React from "react";
const Product = (props) => {
  const { product, onAddCart } = props;

  return (
    <>
      <div className="relative flex px-8 items-center place-content-evenly h-auto md:mx-2 lg:mx-4">
        <div className="bg-[#212121] absolute border-[#F29A4B] border-2  -left-3 z-40 -bottom-4 rounded-full ">
          <img className="object-contain h-24 w-24 rounded-full p-2" alt="" src={product.image} />
        </div>
        <div className="bg-[#09090A] col-span-3 ml-2 h-auto space-y-6 w-full max-w-sm px-5 pl-[60px] py-1 mt-8 relative after:content-[''] after:w-[90%] after:h-[2px]  after:bg-[#F29A4B] after:left-0 after:bottom-0 after:top-[110%] after:absolute">
          <h1 className="text-base font-semibold font-Poppins">{product.name}</h1>
          <div className="flex text-base font-light mt-1 space-x-4">
            <h2 className="">price: </h2>
            <p className="price_1 font-medium text-[#000000] rounded-[8px] py-[2px] px-2.5 text-[12px] bg-[#F29A4B]">
              {" "}
              {product.price} php{" "}
            </p>
            <button
              onClick={() => {
                onAddCart(product);
              }}
              className={
                "text-sm font-medium text-[#000000] rounded-[8px] py-[2px] px-3.5 bg-[#FFCB9D]"
              }
            >
              {" "}
              Add{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
