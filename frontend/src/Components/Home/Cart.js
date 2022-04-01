import React from 'react'

export const Cart = (props) => {
    const [checkTab, setCheckTab] = React.useState(0);
    const { cartItems, onAdd, onRemove } = props;

    return (
        <>
            <div className="flex flex-wrap py-4 px-4">
                
                <div className="w-full">
                    <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                        <li className="-mb-px mr-2 last:mr-0 text-center flex max-h-10 shadow-lg bg-[#24262B]">
                            <a
                                className={
                                    "text-sm font-bold tracking-[0.1em] font-nuni px-5 py-3   border-[0px]  " +
                                    (checkTab === 1
                                        ? "text-[#F29A4B]" : "text-white -600 bg-transparent")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setCheckTab(1);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Cart
                            </a>
                            <div className='flex justify-center items-center '>
                                <img  alt='' src={require('../../img/n-cart.png')} className='max-h-[2rem]  border-[0px]'></img>
                            </div>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 text-center flex max-h-10 shadow-lg bg-[#24262B]">
                            <a
                                className={
                                    "text-sm font-bold tracking-[0.1em] font-nuni px-5 py-3   border-[0px]  " +
                                    (checkTab === 2
                                        ? "text-[#F29A4B]" : "text-white -600 bg-transparent")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setCheckTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Checkout
                            </a>
                            <div className='flex justify-center items-center '>
                                <img  alt='' src={require('../../img/n-check.png')} className='max-h-[2rem]  border-[0px]'></img>
                            </div>
                        </li>

                    </ul>
                    <div className="font-pop flex rounded-md text-white   bg-[#141517] h-auto max-h-[50vh] w-full">
                        <div className="px-4 py-5 pl-10 pb-[8vh] flex-auto scrollbar-thin scrollbar scrollbar scrollbar-thumb-zinc-600 scrollbar-track-black
                          overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                            <div className="tab-content tab-space relative">
                                <div className={checkTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className='text-white'>
                                        {cartItems.length === 0 && <div> Cart is Empty...</div>}
                                        {cartItems.map((item)=>
                                            <div key= {item._id} className="row">
                                                <div className='col-2' >{item.product_name}</div>
                                                <div className='col-2'>
                                                    <button onClick={()=> onAdd(item)} className='add'>+</button>
                                                    <button onClick={()=> onRemove(item)} className='remove'>-</button>
                                                </div>
                                                <div className='col-2'>
                                                    {item.product_qty} x ${item.product_price.toFixed(2)}
                                                </div>
                                            </div>
                                        )}
                                       
                                    </div>
                                </div>
                                <div className={checkTab === 2 ? "block" : "hidden"} id="link1">
                                    checkout..

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           



        </>
    )

}
export default Cart
