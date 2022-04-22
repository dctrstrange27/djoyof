import React from "react";
import Home from "../src/Components/Home/Home";
import Login from "../src/Components/Login/Login";
import About from "./Components/About/About";
import Signup from "./Components/Login/Signup";
import NotFound from "./Components/error/NotFound";
import Service from "./Components/Service/Service";
import Contact from "./Components/ContactUs/Contact";
import Main from "./Components/Home/Main"
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"

import { amIloggedIn, API, saveUser, signOut } from "../src/Utils";


function App(){
  return(
    <Router>
      <SomeotherComponent/>
    </Router>
  )
}


function SomeotherComponent() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState();
  const [openTab, setOpenTab] = React.useState(1);
  const [products, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [toggleNav, setToggleNav] = useState(false);
  const [clickableAgain, setClickableAgain] = useState(true);
  const [proof, setProofFile] = useState();
  const [proofView, setProofView] = useState();
  const [currentItems, setCurrentITems] = useState();
  const [togs, setTogs] = useState(false);
  const resetToggle = () => {
      setTogs(false)
  };
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
  const loadUserData = async () => {
    const userData = amIloggedIn(navigate);
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
  }, [navigate]);


  return (
    <>
      <div className="bg-[#18181d] overflow-hidden ">
  
          <Routes>
            <Route path="/" element={
              <Home
                resetToggle={resetToggle}
                decreaseQty={decreaseQty}
                increateQty={increateQty}
                removeItemFromCart={removeItemFromCart}
                removeAllCartItems={removeAllCartItems}
                proof={proof}
                setProofFile={setProofFile}
                proofView={proofView}
                setProofView={setProofView}
                currentItems={currentItems}
                setCurrentITems={setCurrentITems}
                show={show}
                setShow={setShow}
                userData={userData}
                setUserData={setUserData}
                openTab={openTab}
                setOpenTab={setOpenTab}
                products={products}
                setProduct={setProduct}
                cartItems={cartItems}
                setCartItems={setCartItems}
                favorites={favorites}
                setFavorites={setFavorites}
                toggleNav={toggleNav}
                setToggleNav={setToggleNav}
                onAdd={onAdd}
                clickableAgain={clickableAgain}
                setClickableAgain={setClickableAgain}
                togs={togs}
                setTogs={setTogs}

              />}>
              <Route path="djoyof" element={<Home/>} />
              <Route path="About" element={<About />} />
              <Route path="Main" element={
                <Main
                  openTab={openTab}
                  products={products}
                  setOpenTab={setOpenTab}
                  onAdd={onAdd}
                  addFavorite={addFavorite}
                  removeFavorite={removeFavorite}
                  isMyFavorite={isMyFavorite}
                  clickableAgain={clickableAgain}
                  onDecrease={decreaseQty}
                  onIncrease={increateQty}
                  cartItems={cartItems}
                  onRemove={removeItemFromCart}
                  onRemoveAll={removeAllCartItems}
                  showProofModal={() => {
                    setShow(true);
                  }}

                />} />
              <Route path="Service" element={<Service />} />
              <Route path="Contact" element={<Contact />} />
              <Route element={<NotFound />} />
            </Route>
            <Route path="Login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
          </Routes>
    
        <Outlet />
      </div>
    </>
  );
}

export default App;
