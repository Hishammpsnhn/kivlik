import React from 'react'
import logo from '../assests/logo.png'

function Header() {
    return (
        <div className=''>
            <div class="relative">
                <div class="mx-auto max-w-7xl px-6">
                    <div class="flex items-center justify-between  py-6 md:justify-start md:space-x-10">
                        <div class="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <img class="h-8 w-auto sm:h-10 " src={logo} alt="" />
                            </a>
                        </div>
                        <div class="-my-2 -mr-2 md:hidden">
                            <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span class="sr-only">Open menu</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        <nav class="hidden space-x-10 md:flex">
                            <a href="#" class="text-base font-bold hover:text-gray-500 text-white text-[25px]">About Us</a>
                            <a href="#" class="text-base font-medium hover:text-gray-500 text-white text-[25px]">Services</a>
                            <a href="#" class="text-base font-medium hover:text-gray-500 text-white text-[25px]">Pricing</a>
                            <a href="#" class="text-base font-medium hover:text-gray-500 text-white text-[25px]">Contact</a>
                        </nav>
                        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                            <a href="#" class="whitespace-nowrap text-base text-[25px]  text-white hover:text-gray-500">Login</a>
                            <a href="#" class="ml-8 whitespace-nowrap text-[25px] text-base font-medium text-white hover:text-gray-500">Sign Up</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header