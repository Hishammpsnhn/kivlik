import React, { useState } from 'react'
import logo from '../assests/logo.png'


function Header({ SetsideNav, Navdata }) {
    const [activeTab, setActiveTab] = useState('About Us')
    return (
        <div className=''>
            <div className="relative">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex items-center justify-between  py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/">
                                <img className="h-8 w-auto sm:h-10 " src={logo} alt="" />
                            </a>
                        </div>
                        <div className="-my-2 -mr-2 md:hidden">
                            <button type="button"
                                onClick={() => SetsideNav((prev) => !prev)}
                                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span className="sr-only">Open menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden space-x-10 md:flex">
                            {
                                Navdata.map((item, i) => (
                                    <a key={i} 
                                    href={item.url} 
                                    className={`hover:text-gray-500 text-white text-[25px] hover:opacity-25 ${activeTab===item.item && "font-semibold"}`}
                                    onClick={()=> setActiveTab(item.item)}
                                    >{item.item}</a>
                                ))
                            }

                        </nav>
                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                            <a href="/" className="whitespace-nowrap  text-[25px]  text-white hover:opacity-25">Login</a>
                            <a href="/" className="ml-8 whitespace-nowrap text-[25px]  text-white hover:opacity-25">Sign Up</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header