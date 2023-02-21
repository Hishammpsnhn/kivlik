import React from 'react'
import Header from '../components/Header'
import background from "../assests/wave.png";
import chair from '../assests/Group 542.png'
import Form from '../components/Form';
import Footer from '../components/Footer';
function Home() {
    return (
        <>
            <div className="h-full bg-no-repeat" style={{ backgroundImage: `url(${background})`, backgroundSize: "1921px 400px" }} >
                <Header />
                <div className=' grid grid-cols-5 mb-30 p-10'>
                    <div className='col-span-3 w-full h-full flex justify-center text-center m-auto flex-col'>
                        <p className='cursor-pointer  m-20 font-bold font-sans text-[40px] tracking-[2px] text-white hover:text-gray-500 '>Careers</p>
                        <div className='text-start ml-28'>
                            <p className='font-bold font-sans text-[40px] tracking-[2px] text-[#20404a] '>Submit Your Resume</p>
                            <p className='font-sans text-[30px] text-[#5a6568]'>Become discoverable for all of our roles</p>

                        </div>
                    </div>
                    <img className='col-span-2 w-[350px] h-[500px] mt-[25px]' src={chair} />
                </div>
            </div>
                <Form />
                <Footer />
        </>
    )
}

export default Home