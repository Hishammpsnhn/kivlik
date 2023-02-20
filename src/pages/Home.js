import React from 'react'
import Header from '../components/Header'
import background from "../assests/wave.png";
import chair from '../assests/Group 542.png'
function Home() {
    return (
        <>
            <div className="h-[35vh] bg-no-repeat" style={{ backgroundImage: `url(${background})`, backgroundSize: "1921px 400px" }} >
                <Header />
                <div className=' grid grid-cols-3 gap-4'>
                    <span className='col-span-2 text-center m-auto cursor-pointer font-bold font-sans text-[40px] tracking-[2px] text-white hover:text-gray-500'>Careers</span>
                    <img className='w-[350px] h-[500px]' src={chair} />
                </div>
            </div>
        </>
    )
}

export default Home