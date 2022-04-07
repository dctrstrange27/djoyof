import React from 'react'
import { BiErrorAlt } from 'react-icons/bi'
function NotFound() {
    return (
        <>
            <div className='font-pop w-screen h-screen flex flex-row gap-5 justify-center items-center text-[#BBBCBC]'>
                <BiErrorAlt className='w-32 h-32'>
                </BiErrorAlt>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-[6rem]'>ERROR 404</h1>
                    <h1 className='text-[1.3rem]'>Woops. Looks like this page doesn't exist.</h1>
                </div>
             
            </div>
        </>
    )
}

export default NotFound