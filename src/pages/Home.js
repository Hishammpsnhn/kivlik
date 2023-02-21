import React, { useState } from 'react'
import Header from '../components/Header'
import background from "../assests/wave.png";
import chair from '../assests/Group 542.png'
import Form from '../components/Form';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';

const Navdata = [
    { item: "About Us", url: '#' },
    { item: "Services", url: '#' },
    { item: "Princing", url: '#' },
    { item: "Contact", url: '#' },
]

function Home() {
    const [sidenav, SetsideNav] = useState(false);
    return (
        <>

            <div className="h-full bg-no-repeat bg-contain " style={{ backgroundImage: `url(${background}) `,backgroundSize:"100vw 40vh" }} >
                <Header SetsideNav={SetsideNav} Navdata={Navdata} />
                <div onClick={()=> SetsideNav(false)}>
                {sidenav ? <SideNav Navdata={Navdata} /> : <></>}
                    <div className=' md:grid md:grid-cols-5 mb-30 p-10 flex flex-col-reverse'>
                        <div className='  col-span-5 md:col-span-3 w-full h-full md:flex justify-center text-center m-auto flex-col'>
                            <p className='cursor-pointer hidden md:block  m-20 font-bold font-sans text-[40px] tracking-[2px] text-white hover:text-gray-500 '>Careers</p>
                            <div className='text-start md:ml-28 '>
                                <p className='font-bold font-sans sm:text-[40px] text-[30px] tracking-[2px] text-[#20404a] '>Submit Your Resume</p>
                                <p className='font-sans sm:text-[30px] text-[25px] text-[#38879d]'>Become discoverable for all of our roles</p>

                            </div>
                        </div>
                        <img className='md:col-span-2 col-span-5 md:w-[350px] md:h-[500px] sm:w-[250px] sm:h-[400px] w-[150px] h-[250px] mt-[25px]' src={chair} alt="chair"/>
                    </div>
                <Form />
                <Footer />
                </div>
            </div>

        </>
    )
}

export default Home