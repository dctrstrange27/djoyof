import React, { useState, useEffect } from "react";
import { API, userAPI, saveUser, rememberMe, getRemembered, userGoogleAPI, getUser } from "../../Utils";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai"
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { RiLockPasswordLine } from 'react-icons/ri'
import { Link } from "react-router-dom";
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { GoogleLogin } from '@react-oauth/google';
import jwt_Decode from 'jwt-decode'


export const Login = ({ setLogin, login, setUserData, setUseGoogle,useLocal, setUseLocal }) => {
  const [email_address, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)
  const [gData,setggleData] = useState([])

  console.log(gData.email)

  let navigate = useNavigate();
  let googleAccountCredentials = ""

  const signIn = async () => {
    setLoading(true)
    try {
      console.log("use Local", useLocal)
      setError('')
      setLogin(!login)
      setUseLocal(true)
      const response = await userAPI.post("/login", { email_address, password });
      console.log(response)
      saveUser(response);
      setUserData(response)
      if (remember) rememberMe(email_address, password)
      navigate("/djoyof"); 
      
    } catch (e) {
      console.log(e);
       setError(e.response.data.error_message);
      setLoading(false)
    }
  };
  
  const createGoogleAccount = async(info)=>{
      try {
          const res = await userGoogleAPI.post("/createGoogleAccount",
          {email_address:info.email,
            customer_name:info.name,
            picture:info.picture,
            verified:info.email_verified,
          })
          setUseGoogle(true);saveUser(res);navigate('/djoyof');
      } catch (error) {console.log(error)}
  }

  useEffect(() => {
    const remembered = getRemembered()
    if (remembered) { setEmail(remembered.email_address); setPassword(remembered.password)
    }
  }, []
  )
  const [openTab, setOpenTab] = React.useState(1)
  const [values, setValues] = React.useState({ password: "", showPassword: false, });

  return (
    <>
      <div className="flex justify-center items-center border-[3px bg-[#19191e]  border-pink-500 overflow-auto h-screen
                    
                     ">
        {/* first box */}
        <div className="flex border-[1px lg:border-[.5px] border-[#ed852b75]  md:rounded-[4.5rem] border-[1px
                        bg-center bg-auto bg-no-repeat lg:bg-[#101010d6] flex-1 max-w-[90rem] mx-auto h-[47rem] max-h-[47rem] min-h-[30rem]
                        justify-center items-center lg:bg-none
                        relative">
          <img className="absolute invisible lg:visible inset-y-0 h-[46.5rem] border-[1px"
            src={require("../../img/loginbg.png")} >
          </img>
          <img className="absolute invisible lg:visible left-20"
            src={require("../../img/text.png")} >
          </img>
          {/* center sec */}
          <div className="  relative flex flex-1 h-[50vh max-w-lg flex-col w-full  sm:px-5 shadow-2xl shadow-[#00000069] bg-[#0f0f11] bg-opacity-[80%]  
                          rounded-[3rem] border-[#ed852bd5] md:border-y-[.5px] ">
            <div className="border-t-[1px] sm:border-t-[0px] flex flex-col rounded-t-[3.5rem]">
              <img alt="" src={require("../../img/logo.png")} className="h-auto w-[90px] md:max-w-[30%] self-center z-10 py-3 lg:w-[120px] lg:h-auto"></img>
              <h1 className="w-fit self-center py-2 font-bold text-[#CBCBCB] text-sm md:text-[1rem]  tracking-[0.25rem]  z-10 lg:py-0">SIGN IN TO DJOYOF</h1>
            </div>
            {/* INPUT */}
            <form className="flex flex-col border-[1px px-6 font-nsans text-[0.8rem] border-green-500">
              <div className="border-[1px border-[#fff relative ">
                <label className="sm:block hidden mb-1 font-nsans tracking-normal text-[#fff]"> Email </label>
                <MdOutlineAlternateEmail className=" w-7 h-5 text-[#fff] top-8 absolute " />
                <input className="flex component-preview p-4 items-center justify-center gap-2 h-[30px] text-[#fff] w-full text-sm focus:outline-none  leading-2 focus:border-[#c83737]
                                                   dark:border-gray-600 focus:ring  dark:focus:ring-[#c85e378d] my-2 pl-7 rounded-lg border-0 bg-[#ffffff1c]
                                                    transition duration-200 "
                  type="text"
                  name="password"
                  value={email_address}
                  onChange={(e) => setEmail(e.target.value)} />

              </div>


              <div className="border-[1px border-[#fff relative ">
                <label className="sm:block hidden mb-1 font-nsans tracking-normal text-[#fff]"> Password </label>
                <RiLockPasswordLine className="w-7 h-5 text-[#fff] top-8 absolute " />
                {visible ? (
                  <BsEye onClick={() => {
                    setVisible(!visible)
                  }}
                    className={` w-7 h-4 right-2 top-[2.3rem] scale-105 text-[#fa9136d5] absolute `} />

                ) : (
                  <BsEyeSlash onClick={() => {
                    setVisible(!visible)
                 
                  }}
                    className={` w-7 h-4 right-2 top-[2.3rem] scale-105 text-[#aaa7a7] absolute `} />)}
                <input className="flex component-preview p-4 items-center justify-center gap-2 h-[30px] text-[#fff] w-full text-sm focus:outline-none  leading-2 focus:border-[#c83737]
                                                   dark:border-gray-600 focus:ring  dark:focus:ring-[#c85e378d] my-2 pl-7 rounded-lg border-0 bg-[#ffffff1c]
                                                    transition duration-200 "
                  type={`${visible ? "text" : "password"}`}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />

              </div>
              <div className="w-full border-[1px m-2 flex justify-end">
                <GoogleLogin theme= "filled_black" size="medium"
                  onSuccess={credentialResponse => {
                     googleAccountCredentials = jwt_Decode(credentialResponse.credential)
                    //  console.log(googleAccountCredentials)
                    createGoogleAccount(googleAccountCredentials)
                    setggleData(googleAccountCredentials)
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />;
              </div>
              {/* <button className="bg-[#fff]" onClick={() => { loginWithGoogle() }}>sign in with google</button> */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center z-10">
                  <input
                    id="remember_me"
                    type="checkbox"
                    value={remember}
                    onChange={(e) => { setRemember(e.target.value) }}
                    className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                  />
                  <label className="ml-2 block text-sm font-bold lg:text-[0.90rem]  leading-5 text-[#a3a3a3]">
                    {" "}
                    Remember Me{" "}
                  </label>
                </div>
                <Link to="/recoverAccount" className="text-sm lg:text-[0.90rem] font-bold  text-[#1CADFF] z-10">
                  {" "}
                  Forgot Password?{""}
                </Link>
              </div>
              <div className={`justify-center ${loading || error.length > 0 ? 'block' : 'hidden'}`}>
                <AiOutlineLoading className={`my-2 mx-auto w-5 h-5 text-orange-500 text-[#fff] animate-spin ${loading ? 'block' : 'hidden'}`} />
                <p className={`text-center text-xs text-gray-600  ${loading ? 'block' : 'hidden'}`}>Analyzing..</p>
                <p className="text-sm text-[#fa5644] text-center">{error}</p>
              </div>
              <div className="py-3 lg:py-[20px] flex items-center justify-center z-10">
                <button
                  // disabled={email_address.length === 0 || password.length === 0 || loading}
                  onClick={(e) => {
                    e.preventDefault()
                    signIn()
                  }}
                  className={`
                          text-white bg-[#d0722a] hover:bg-[#f98934] focus:ring-4 focus:outline-none focus:ring-blue-300 w-full
                       font-bold rounded-sm text-sm text-[#fff] px-5 py-2 justify-center inline-flex items-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-800`}>
                  Log In
                </button>
              </div>
              <div className="text-center z-10 mt-1 pb-7">
                <Link to="/Signup"
                  className=" underline font-['Nunito Sans']  text-sm lg:text-[0.90rem]  text-[#CBCBCB]">
                  Sign up for an account
                </Link>
              </div>
            </form>

          </div>
          <img className="absolute invisible lg:visible lg:right-16 lg:bottom-0 h-full lg:h-70 lg:w-auto"
            src={require("../../img/foot.png")} >
          </img>
        </div>
      </div>
    </>
  );
};
export default Login;
