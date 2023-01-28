import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className=' dark:bg-[#151616] bg-Tabs_bg/30 h-[40vh] md:h-[25vh] w-full dark:text-[#FFF]'>
                <div className='grid grid-cols-1 md:grid-cols-2 mx-auto w-[80%] py-10'>
                    <div className="flex items-center justify-center border-[1px">
                        <img src={require("../../img/logo.png")} className='w-[100px] h-auto'></img>
                        <div className="flex border-[1px flex-col">
                            <h1 className="font-bold font-nsans italic tracking-wider text-[#dd7922]">DJOYOF</h1>
                            <h1 className="font-extrabold text-xl font-nsans tracking-wider  dark:text-[#8c8a88]">BAKING</h1>
                        </div>
                    </div>
                    <div className='mt-2 border-[1px grid grid-cols-2 md:grid-cols-3 py-5 px-5'>
                        <div className="flex flex-col gap-2">
                            <h1 className='font-bold uppercase font-nsans text-sm'>Navigation</h1>
                            {
                                [['Main'], ['Products'], ['Service'], ['Help']].map((path,idx) => (
                                    <Link to={`${path}`} key={idx} className='font-nsans text-sm'>{path}</Link>
                                ))}
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className='font-bold uppercase font-nsans text-sm'>Company</h1>
                            {
                                [['About'], ['Services'], ['FaQs']].map((path,idx) => (
                                    <Link to={path} key={idx} className='font-nsans text-sm'>{path}</Link>
                                ))}
                        </div>
                        <div className="flex flex-col gap-2 mt-2">
                            <h1 className='font-bold uppercase font-nsans text-sm'>Social Media</h1>
                            {
                                [['Instagram'], ['Facebook'],].map((path,idx) => (
                                    <Link to={path} key={idx} className='font-nsans text-sm'>{path}</Link>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center font-nuni text-sm py-2 mx-auto w-[90%]  border-t-[.1px] border-[#ffffff30]'>
                <div className=''>
                    <h1 className='dark:text-[#Fff]'>© 2018 DjoyofBaking. All rights reserved.</h1>
                </div>
            </div>

        </>
    )
}

export default Footer