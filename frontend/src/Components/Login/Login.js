
import LoginBody from "./LoginBody";

export const Login = ({
    setShowForm,
    error,
    showForm,
    loading,
    handleLogin,
    setError,
    hasUserLog,
}) => {

  return (
    <>
      <div className="flex md:w-full flex-col px-10 md:gap-5 border-[#d90045] border-[1px md:px-20">
        <h1 className="font-pacifico text-3xl my-4 text-[#fff] tracking-widest" >Log-in</h1>
        {/* input */}
        <LoginBody
          hasUserLog={hasUserLog}
          handleLogin={handleLogin}
          setError={setError}
          setShowForm={setShowForm}
          error={error}
          showForm={showForm}
          loading={loading}
        ></LoginBody>
      </div>
    </>
  );
};
export default Login;

