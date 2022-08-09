import React, { useState, useEffect } from "react";
import { API, saveUser, rememberMe, getRemembered } from "../../Utils";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai"
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email_address, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  let navigate = useNavigate();

  const signIn = async () => {
    setLoading(true)
    try {
      setError('')
      const response = await API.post("/login", { email_address, password });
      saveUser(response);
      if (remember)
        rememberMe(email_address, password)
      navigate("/Main");
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


  const [values, setValues] = React.useState({ password: "", showPassword: false, });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <>
      <div className="flex justify-center items-center border-[3px bg-[#19191e] dark:bg-P_bg  border-pink-500 overflow-auto h-screen
                    
                     ">
        {/* first box */}
        <div className="  flex border-[1px lg:border-[.5px] border-[#ed852b75]  md:rounded-[4.5rem] border-[1px
                        bg-center bg-auto bg-no-repeat lg:bg-[#101010d6] flex-1 max-w-[90rem] mx-auto h-[47rem] max-h-[47rem] min-h-[30rem]
                        justify-center items-center lg:bg-none
                        relative
                        ">
          <img className="absolute invisible lg:visible inset-y-0 h-[46.5rem] border-[1px"
            src={require("../../img/loginbg.png")} >
          </img>
          <img className="absolute invisible lg:visible left-20"
            src={require("../../img/text.png")} >
          </img>
          {/* center sec */}
          <div className="relative flex flex-1 h-[50vh max-w-lg flex-col w-full  sm:px-5 shadow-2xl shadow-[#00000069] bg-[#0f0f11] bg-opacity-[80%]  
                          rounded-[3rem] border-[#ed852bd5] md:border-y-[.5px] ">
            <div className="border-t-[1px] sm:border-t-[0px] flex flex-col rounded-t-[3.5rem]">
              <img alt="" src={require("../../img/logo.png")} className="h-auto w-[90px] md:max-w-[30%] self-center z-10 py-3 lg:w-[120px] lg:h-auto"></img>
              <h1 className="w-fit self-center py-2 font-bold text-[#CBCBCB] text-sm md:text-[1rem]  tracking-[0.25rem]  z-10 lg:py-0">SIGN IN TO DJOYOF</h1>
            </div>
            {/* INPUT */}
            <form className="flex flex-col border-[1px px-6 font-nsans text-[0.8rem] border-green-500">
              <div className="py-2">
                <label className="sm:block hidden text-[#CBCBCB] z-10" for="email">Email</label>
                <input
                  placeholder="Phone or Email"
                  id="email"
                  value={email_address}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="email"
                  className="text-[#CBCBCB]  py-2 px-3 w-full h-[37px] bg-transparent sm:bg-[#1A1B1E] border-[#1A1B1E] focus:outline-none border border-b-[#F29A4B] border-opacity-50" />
                 
              </div>
              <div className="">
                <label className="sm:block hidden first-line:text-[#CBCBCB] tracking-[0.1rem]" for="password"> Password</label>
              </div>

              <Input
                placeholder="Password"
                inputProps={{ style: { color: "#CBCBCB", fontWeight: "normal", fontSize: "12px", fontFamily: "poppins", letterSpacing: "1.2px" } }}
                className={`py-2 px-3 w-full h-[37px] font-sm bg-transparent mt-5 sm:bg-[#1A1B1E] border-[#1A1B1E] border border-b-[#F29A4B] border-opacity-50 `}
                type={values.showPassword ? "text" : "password"}

                onChange={(e) => {
                  handlePasswordChange("password")
                  setPassword(e.target.value)
                }

                }
                value={password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}

                    >
                      {values.showPassword ? <Visibility className='h-4 w-4 text-white' /> : <VisibilityOff className='h-4 w-4 text-[#868686] ' />}
                    </IconButton>
                  </InputAdornment>
                }
              />


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
      className="ml-2 block text-sm font-bold lg:text-[0.90rem] leading-5 text-[#a3a3a3]"
                  >
                    {" "}
                    Remember Me{" "}
                  </label>
                </div>
                <a href="/" className="text-sm lg:text-[0.90rem] font-bold  text-[#1CADFF] z-10">
                  {" "}
                  Forgot Password?{" "}
                </a>
              </div>
              <div className={`justify-center ${loading || error.length > 0 ? 'block' : 'hidden'}`}>
                <AiOutlineLoading className={`my-2 mx-auto w-5 h-5 text-orange-500 animate-spin ${loading ? 'block' : 'hidden'}`} />
                <p className={`text-center text-xs text-gray-600  ${loading ? 'block' : 'hidden'}`}>Analyzing..</p>
                <p className="text-xs my-4 text-rose-400 text-center">{error}</p>
              </div>
              <div className="py-3 lg:py-[20px] flex items-center justify-center z-10">
                <button
                  disabled={email_address.length === 0 || password.length === 0 || loading}
                  onClick={(e) => {
                    e.preventDefault()
                    signIn()
                  }}
                  className={`${email_address.length === 0 && password.length === 0 && 'disabled'} 
                          text-white bg-[#d0722a] hover:bg-[#f98934] focus:ring-4 focus:outline-none focus:ring-blue-300 w-full
                       font-bold rounded-sm text-sm text-[#fff] px-5 py-2 justify-center inline-flex items-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-800`}>
                  Log In
                </button>
              </div>
              <div className="text-center z-10 mt-1 pb-7">
                <Link exact to="/Signup"
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
