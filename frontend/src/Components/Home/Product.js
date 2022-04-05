import React from "react";
const Product = (props) => {
  const { product, onAddCart } = props;

  return (
    <>
      <div className="group relative flex px-20 ss:flex-wrap md:px-2 xl:px-8 flex-col justify-evenly  border-[1px items-center border-pink-70  border-[1px place-content-evenly h-auto md:mx-2 lg:mx-4 ">
        <div className="w-[240px] bg-blu-500 relative">
          <div className=" bg-[#212121] absolute md:ml-0 ml-5 border-[#F29A4B] border-[1px] -translate-x-7 -left-3 z-10  -bottom-3 md:-bottom-4 rounded-full ">
            <img className="object-contain h-[4.5rem] w-[4.5rem] md:h-20 md:w-20 lg:h-20 lg:w-20 rounded-full p-2" alt="" src={product.image} />
          </div>
          <div className="bg-[#1e1e21]/90 bg-gren-500 border-[1px translate-x-5 duration-150 hover:bg-transparent col-span-3 h-[60px] h-max-[100px]
                        w-[200px] max-w-[200px]  pl-10 after:content-[''] after:w-[90%] after:h-[2px] after:bg-[#F29A4B] after:left-0 after:bottom-0 after:top-[110%] after:absolute
                        md:py-4 mt-10 md:mt-8 md:translate-x-3 md:w-[230px] md:max-w-[280px] md:max-h-[90px]">
            {/* name and price*/}
            <h1 className="text-base text-[.8rem] md:text-sm font-semibold font-Poppins">{product.product_name}</h1>
            <div className="flex text-base px-1 bg-pink-30 font-light space-x-4">
              <p className="price_1 font-medium text-[.7rem] md:text-sm text-[#000000] rounded-[8px] py-[2px] px-2.5  bg-[#F29A4B]">
                {" "}
                {product.product_price} php{" "}
              </p>
              <button
                onClick={() => {
                  onAddCart(product);
                }}
                className={
                  "text-[.7rem] md:text-sm group-hover:animate-pulse font-medium text-[#000000] rounded-[8px] py-[2px] px-3.5 bg-[#FFCB9D]"
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
