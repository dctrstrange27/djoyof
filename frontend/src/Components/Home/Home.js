import { useState, useEffect } from "react";
import React from "react";
import { useHistory } from "react-router-dom";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import Aside from "../nav/Aside";
import Nav from "../nav/Nav";
import Tabs from "../tabs/Tabs";
import SendProof from "../Modal/SendProof";


import { amIloggedIn, API, saveUser, signOut } from "../../Utils";



const Home = () => {
  let history = useHistory();

  const [openTab, setOpenTab] = React.useState(1);

  const [products, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);


  const [userData, setUserData] = useState();
  const [favorites, setFavorites] = useState([]);
  const [clickableAgain, setClickableAgain] = useState(true);
  const [proof, setProofFile] = useState();
  const [proofView, setProofView] = useState();
  const [show, setShow] = useState(false);

  const [currentItems, setCurrentITems] = useState();

  const onAdd = (product) => {
    const exist = cartItems.find((x) => {
      return x._id === product._id;
    });
    if (exist) {
      setCartItems([
        ...cartItems.filter((i) => i._id !== exist._id),
        {
          ...exist,
          product_qty: exist.product_qty + 1,
        },
      ]);
    } else {
      setCartItems([...cartItems, { ...product, product_qty: 1 }]);
    }
  };

  const removeAllCartItems = () => {
    setCartItems([]);
  };

  const removeItemFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i._id !== item._id));
  };

  const increateQty = (item) => {
    var idx = -1;

    let copy = [...cartItems];

    copy.find((val, i) => {
      if (val._id === item._id) idx = i;
      return val._id === item._id;
    });

    copy[idx].product_qty += 1;

    setCartItems(copy);
  };

  const decreaseQty = (item) => {
    var idx = -1;

    let copy = [...cartItems];

    copy.find((val, i) => {
      if (val._id === item._id) idx = i;
      return val._id === item._id;
    });

    copy[idx].product_qty -= 1;

    if (copy[idx].product_qty === 0)
      copy = copy.filter((i) => i._id !== item._id);

    setCartItems(copy);
  };
  const loadUserData = async () => {
    const userData = amIloggedIn(history);
    const userNewInfo = await API.post("/getUserDetails", {
      _id: userData._id,
    });
    saveUser(userNewInfo);
    setUserData(userNewInfo.data.userData);
    setCartItems(userNewInfo.data.userData.cartItems);
    setFavorites(userNewInfo.data.userData.favorites);
  };

  const loadProducts = async () => {
    try {
      const response = await API.get("/getAllProducts");
      setProduct(response.data.products);
    } catch (e) {
      console.log(e);
    }
  };

  const isMyFavorite = (id) => {
    const arr = favorites.filter((prod) => id === prod);
    return arr.length > 0;
  };

  const addFavorite = async (product_id) => {
    setClickableAgain(false);
    const update = await API.post("/updateMyFavorites", {
      mode: 0,
      _id: userData._id,
      product_id,
    });
    loadProducts();
    loadUserData();
    setClickableAgain(true);
  };

  const removeFavorite = async (product_id) => {
    setClickableAgain(false);
    const favs = await API.post("/updateMyFavorites", {
      mode: -1,
      _id: userData._id,
      product_id,
    });
    loadProducts();
    loadUserData();
    setClickableAgain(true);
  };

  useEffect(() => {
    const updateCart = async () => {
      if (!userData) return;
      await API.post("/updateCart", { _id: userData._id, cartItems });
      const userNewInfo = await API.post("/getUserDetails", {
        _id: userData._id,
      });
      saveUser(userNewInfo);
    };
    updateCart();
  }, [cartItems]);

  useEffect(() => {
    loadUserData();
    loadProducts();
  }, [history]);

  const [toggleNav, setToggleNav] = useState(false);
  const [toggleAside, setToggleAside] = useState(false);
  const resetToggle = () => {
    setToggleAside(false);
    setToggleNav(false);
  };

  return (
    <>
      {show && (
        <div
          onClick={() => { setShow(false) }}
          className="fixed top-0 flex justify-center items-center left-0 h-screen w-full z-[9999]"
        >
          <div className="w-1/2">
            <SendProof
              proofView={proofView}
              setProofFile={setProofFile}
              setProofView={setProofView}
            />
          </div>
        </div>
      )}
      {userData && (
        <div onClick={() => {
          resetToggle();
        }} className="relative ss:w-full borde-8  justify-center flex">
          {/* aside nav */}
          <Nav className="" toggleNav={toggleNav} setToggleNav={setToggleNav} toggleAside={toggleAside} setToggleAside={setToggleAside} ></Nav>
          <div className="flex justify-center bg-reen-500/20 xl:px-[-2rem] 2xl:px-[8rem] 3xl:px-[15rem] xl:min-w-full w-screen">
            <div className="">
              <Aside toggleAside={toggleAside} setToggleAside={setToggleAside} ></Aside>
            </div>
            {/* body */}
            <div className=" py-1 md:py-10 flex max-w-7xl mx-auto sm:px-20 lg:px-21 justify-center border-[1px overflow-hidden bg-[#1A1B1F] overflow-y-hidden shadow-xl">
              <div className="flex bg-[#1A1B1F] border-[1px  w-screen  ">
                {/* whole page */}
                <div className="border-pink-70 w-full flex flex-col border-pink-400 border-[1px
                                justify-center items-center min-h-screen overflow-x-hidden"
                >
                  {/* product part        */}
                  <Tabs openTab={openTab}
                    products={products}
                    setOpenTab={setOpenTab}
                    onAdd={onAdd}
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite}
                    isMyFavorite={isMyFavorite}
                    clickableAgain={clickableAgain}>
                  </Tabs>
                  <Cart
                    onAdd={onAdd}
                    onDecrease={decreaseQty}
                    onIncrease={increateQty}
                    cartItems={cartItems}
                    onRemove={removeItemFromCart}
                    onRemoveAll={removeAllCartItems}
                    products={products}
                    showProofModal={() => {
                      setShow(true);
                    }}
                  ></Cart>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
