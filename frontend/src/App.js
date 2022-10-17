import React from "react";
import Home from "../src/Components/Home/Home";
import Login from "../src/Components/Login/Login";
import About from "./Components/About/About";
import Signup from "./Components/Signup/Signup";
import DarkMode from "./Components/DarkMode/DarkMode";
import NotFound from "./Components/error/NotFound";
import Service from "./Components/Service/Service";
import Contact from "./Components/ContactUs/Contact";
import Help from "./Components/Help/Help";
import Profile from "./Components/profile_setting/Profile";
import Settings from "./Components/profile_setting/Settings";
import Orders from "./Components/profile_setting/Orders";
import Main from "./Components/Home/Main"
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import { amIloggedIn, API, saveUser } from "../src/Utils";
import { AiOutlineConsoleSql } from "react-icons/ai";
import Signupconfig from "./Components/Signup/Signupconfig";
import ForgotConfig from "./Components/forgotPassword/ForgotConfig";


function App() {
    return (
        <Router>
            <SomeotherComponent />
        </Router>
    )
}
const SomeotherComponent=()=> {
    let navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [clickableAgain, setClickableAgain] = useState(true);
    const [proof, setProofFile] = useState();
    const [proofView, setProofView] = useState();
    const [togs, setTogs] = useState(false);
    const [check, setCheck] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [showContinue, setShowCon] = useState(false)
    //Data related
    const [openTab, setOpenTab] = React.useState(1);
    const [userData, setUserData] = useState();
    const [userName, setUserName] = useState()

    const [newCartItems, setNewCartItems] = useState([])
    const [products, setProduct] = useState([])
    
    const [cartItems, setCartItems] = useState([])
    const [favorites, setFavorites] = useState([])
    const [cancelOrder, setCancelOrder] =useState([])
  
    const computeCartTotal = (cartItems) => {
        let total = 0.0
        cartItems.forEach((prod, idx) => {
            total += (prod.product_price * prod.product_qty)
        })
        console.log(total)
        return total
    }
    
    const updateSetShow = () => {
        setShow(false)
    };
    const onAdd = (product) => {
        const exist = cartItems.find((x) => {
            return x._id === product._id;
        });
        if (exist) {
            setCartItems([...cartItems.filter((i) => i._id !== exist._id),
            {
                ...exist,
                product_qty: exist.product_qty + 1,
            }
                ,]);
        } else {
            setCartItems([...cartItems, { ...product, product_qty: 1 }]);
        }
    };

    const placeOrder = async () => {
        try {
            const response = await API.post("/placeOrder", {
                email_address: userData.email_address,
                orders: {
                    customer_id: userData._id,
                    customer_name: userData.customer_name,
                    customer_address: userData.customer_address,
                    contact_no: userData.contact_no,
                    items: newCartItems,
                    total: computeCartTotal(newCartItems),
                    transactionType: check ? "COD" : "GCash"
                }
            })
            loadUserData()
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const getAllCarts = () => {
        setNewCartItems([...cartItems])
    }
    const deleteOrder = () => {
        setNewCartItems([]);
    }
    const deleteNewCartItems = (item) => {
        setNewCartItems(newCartItems.filter((i) => i._id !== item._id))
    }
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
        localStorage.getItem("userData", JSON.stringify(userNewInfo))

        saveUser(userNewInfo);
        setUserData(userNewInfo.data.userData);
        setCartItems(userNewInfo.data.userData.cartItems);
        setNewCartItems(userNewInfo.data.userData.cartItems);
        setFavorites(userNewInfo.data.userData.favorites);
        //setCancelOrder(userNewInfo.data.userData.cancelOrder)
    };
   
    //fetching Data from API 
    const loadProducts = async () => {
        try {
            const response = await API.get("/getAllProducts");
            setProduct(response.data.products);
          
        } catch (e) {
            console.log(e)
        }
    };


    useEffect(() => {
        const updateCart = async () => {
            if (!userData) return;
            await API.post("/updateCart", {
                 _id: userData._id,
                 cartItems
                 });
                 const userNewInfo = await API.post("/getUserDetails", {
                    _id: userData._id,
                });
                saveUser(userNewInfo);
        };
      
        updateCart();
    }, [cartItems]);

    useEffect(() => {
        //  getAllUsers();
        loadUserData();
        loadProducts();
    }, [navigate]);
    return (
        <>
            <div className="dark:bg-five duration-500 bg-P_bg overflow-hidden invert-0">
           
                <Routes>
                    <Route path="/" element={
                        <Home
                            updateSetShow={updateSetShow}
                            setProofFile={setProofFile}
                            proofView={proofView}
                            setProofView={setProofView}
                            show={show}
                            setShow={setShow}
                            userData={userData}
                            togs={togs}
                            setTogs={setTogs}
                        />}>
                        <Route path="djoyof" element={<Home />} />
                        <Route path="About" element={<About />} />
                        <Route path="Main" element={
                            <Main
                                check={check}
                                proof={proof}
                                setCheck={setCheck}
                                onPlaceOrder={placeOrder}
                                check2={check2}
                                setCheck2={setCheck2}
                                deleteNewCartItems={deleteNewCartItems}
                                onRemove={removeItemFromCart}
                                deleteOrder={deleteOrder}
                                newCartItems={newCartItems}
                                getAllCarts={getAllCarts}
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
                                onRemoveAll={removeAllCartItems}
                                showProofModal={() => {
                                    setShow(true);
                                }}
                            />} />
                        <Route path="Service" element={<Service />} />
                        <Route path="Contact" element={<Contact />} />
                        <Route path="Help" element={<Help />} />    
                        <Route path="Profile" element={<Profile />} />
                        <Route path="Settings" element={<Settings />} />
                        <Route path="Orders" element={<Orders />} />
                        <Route element={<NotFound />} />
                    </Route>
                    <Route path="Login" element={<Login />} />
                    <Route path="recoverAccount" element={<ForgotConfig />} />
                    <Route path="Signup" element={
                        <Signupconfig
                        userName={userName}
                        setUserName={setUserName}
                        userData={userData}
                        showContinue={showContinue}
                        setShowCon={setShowCon}
                        />} />
                     {/* <Route path="loading" element={<Loading />}  />  */}
                    <Route path="DarkMode" element={<DarkMode />} />
                </Routes>

                <Outlet />
            </div>
        </>
    );
}

export default App;
