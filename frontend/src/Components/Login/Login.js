
import LoginBody from "./LoginBody";

export const Login = ({
    setShowForm,
    showForm,
    error,
    loading,
    handleLogin,
    setError,
    hasUserLog,
}) => {

  return (
    <>
      <div className="flex justify-center items-center flex-col w-[80%] md:gap-5 border-[#d90045] border-[1px ">
        <h1 className="font-pacifico text-start w-full text-3xl my-4 text-[#fff] tracking-widest" >Log-in</h1>
        {/* input */}
        <LoginBody
          setShowForm={setShowForm}
          showForm={showForm}
          hasUserLog={hasUserLog}
          handleLogin={handleLogin}
          setError={setError}
          error={error}
          loading={loading}
        ></LoginBody>
      </div>
    </>
  );
};
export default Login;

