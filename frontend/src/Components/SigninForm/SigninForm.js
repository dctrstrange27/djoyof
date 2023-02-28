import React from 'react'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
const SigninForm = ({
    hasUserLog,
    setShowForm,
    showForm,
    setError,
    loading,
    setLoading,
    error,
    handleLogin,
    showContinue,
    setShowCon,
    hideError,
    setHideError,
    
    }) => {
    return (
        <div className='border-[1px w-full flex justify-center border-[#f51515]'>
            {showForm ? (
                <Signup
                    hasUserLog={hasUserLog}
                    setShowForm={setShowForm}
                    showForm={showForm}
                    setError={setError}
                    loading={loading}
                    setLoading={setLoading}
                    error={error}
                    handleLogin={handleLogin}
                    showContinue={showContinue}
                    setShowCon={setShowCon}
                    hideError={hideError}
                    setHideError={setHideError}
                >
                </Signup>
            ) : (
                <Login
                    setShowForm={setShowForm}
                    showForm={showForm}
                    hasUserLog={hasUserLog}
                    error={error}
                    handleLogin={handleLogin}
                    setError={setError}>
                </Login>
            )
            }

        </div>
    )
}

export default SigninForm