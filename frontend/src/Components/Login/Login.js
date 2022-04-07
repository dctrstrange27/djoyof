import React, { useState, useEffect } from "react";
import { API, saveUser, rememberMe, getRemembered } from "../../Utils";
import { useHistory } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai"
import { Link } from "react-router-dom";

export const Login = () => {
  const [email_address, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  let history = useHistory();

  const signIn = async () => {
    setLoading(true)
    try {
      setError('')
      const response = await API.post("/login", { email_address, password });
      saveUser(response);
      if (remember)
        rememberMe(email_address, password)
      history.push("/home");
    } catch (e) {
      console.log(e);
      if (e.response.data) setError(e.response.data.description)
      else setError("Sorry but we can't reach the server")
      setLoading(false)
    }
  };

  useEffect(() => {
    const remembered = getRemembered()
    if (remembered) {
      setEmail(remembered.email_address)
      setPassword(remembered.password)
    }
  }, [])
  const [openTab, setOpenTab] = React.useState(1)

  return (
    <>
      <div className="bg-[#323439] flex justify-center items-center w-screen h-screen overflow-auto lg:px-10 xl:border-[1px xl:px-[7rem] 2xl:px-[6rem] 3xl:px-[7rem] md:py-18 lg:py-20">
        {/* first box */}
        <div className="flex bg-[#141517 bg-[#141517] relative justify-center items-center w-full border-0 h-full md:border-y-[1px] xl:rounded-[2.9rem] md:border-opacity-25 2xl:border-[#F29A4B] 
                     2xl:rounded-[47px]  bg-center bg-no-repeat xl:bg-[length:750px_auto] 2xl:bg-[length:1000px_auto] md:px-28 lg:px-[16rem] "
          style={{ backgroundImage: `${openTab === 1 && "url('https://cdn.discordapp.com/attachments/755283323110293547/961084398848057374/bg.png')"}`, }}>
          <img className="absolute lg:left-10 invisible lg:visible xl:left-16 2xl:left-20 lg:h-70 lg:w-auto "
            src={require("../../img/text.png")} ></img>
            {/* center sec */}
          <div className="flex flex-col w-full h-auto px-12  bg-[#0f0f11] bg-opacity-[80%] md:rounded-[3rem] xl:max-w-lg border-[#ed852bd5] border-y-[.5px]  ">
            <img alt="" src={require("../../img/logo.png")} className="h-auto w-[130px] md:max-w-[30%] self-center z-10 py-3 lg:w-[120px] lg:h-auto"></img>
            <h1 className="w-fit self-center py-2 text-[#CBCBCB] text-[1rem] tracking-[0.25rem] font-medium z-10 lg:py-0">
              SIGN IN TO DJOYOF
            </h1>
            <form className="flex flex-col border-[1px font-nsans text-sm lg:text-[0.8rem] border-green-500">
              <div className="mb-4 py-2 z-10">
                <label className="block mb-1  text-[#CBCBCB]  tracking-[0.1rem] z-10" for="email">Email</label>
                <input
                  id="email"
                  value={email_address}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="email"
                  className="text-[#CBCBCB]  py-2 px-3 w-full h-[37px] bg-[#1A1B1E] border-[#1A1B1E] focus:outline-none border border-b-[#F29A4B] border-opacity-50"
                />
              </div>
              <div className="mb-4 z-10">
                <label
                  className="block mb-1  text-[#CBCBCB] tracking-[0.1rem]"
                  for="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-[#CBCBCB] py-2 px-3 w-full h-[37px] bg-[#1A1B1E] border-[#1A1B1E] focus:outline-none border border-b-[#F29A4B] border-opacity-50 "
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center z-10">
                  <input
                    id="remember_me"
                    type="checkbox"
                    value={remember}
                    onChange={(e) => { setRemember(e.target.value) }}
                    className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                  />
                  <label
                    for="remember_me"
                    className="ml-2 block text-sm lg:text-[0.90rem] leading-5 text-[#a3a3a3]"
                  >
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <a href="/" className="text-sm lg:text-[0.90rem]  text-[#1CADFF] z-10">
                  {" "}
                  Forgot your password?{" "}
                </a>
              </div>
              <div className={`justify-center ${loading || error.length > 0 ? 'block' : 'hidden'}`}>
                <AiOutlineLoading className={`my-2 mx-auto w-5 h-5 text-orange-500 animate-spin ${loading ? 'block' : 'hidden'}`} />
                <p className={`text-center text-xs text-gray-600  ${loading ? 'block' : 'hidden'}`}>Wait loading puking ina...</p>
                <p className="text-xs my-4 text-rose-400 text-center">{error}</p>
              </div>
              <div className="py-[45px] lg:py-[20px] flex items-center justify-center z-10">
                <button
                  disabled={email_address.length === 0 || password.length === 0 || loading}
                  onClick={(e) => {
                    e.preventDefault()
                    signIn()
                  }}
                  className={`${email_address.length === 0 && password.length === 0 && 'disabled'} 
                     text-sm font-['Nunito Sans'] tracking-[0.1rem] w-30 px-4 py-1  bg-[#cc9361] self-center rounded-md font-semibold capitalize text-white hover:bg-[#F29A4B] focus:outline-none  transition`}
                >
                  Sign In
                </button>
              </div>
              <div className="text-center z-10 mt-1 pb-7">
                <Link exact to ="/Signup"

                  className=" underline font-['Nunito Sans']  text-sm lg:text-[0.90rem]  text-[#CBCBCB]"
                >
                  Sign up for an account
                </Link>
              </div>
            </form>
          </div>
          <img className="absolute invisible lg:visible lg:right-16 lg:bottom-0 h-full lg:h-70 lg:w-auto"
            src={require("../../img/foot.png")} ></img>
        </div>
      </div>
    </>
  );
};
export default Login;
