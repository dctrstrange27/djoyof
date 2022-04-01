import React from "react";
const Product = (props) => {
  const { product, onAddCart } = props;

  return (
    <>
      <div className=" relative flex flex-col gap-7 px-8 justify-center items-center place-content-evenly h-auto ">
        <div className="bg-[#09090A] h-auto w-full max-w-sm px-5 pl-[60px] py-1 mt-8 relative after:content-[''] after:w-[90%] after:h-[2px]  after:bg-[#F29A4B] after:left-0 after:bottom-0 after:top-[110%] after:absolute">
          <h1 className="text-base">{product.name}</h1>
          <div className="flex text-base font-light mt-1 place-content-evenly">
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
