import React from 'react'
import logo2 from '../assests/logo (1).png'
import arrow from '../assests/arrow.png'
import facebook from '../assests/facebook.png';
import twitter from '../assests/twitter.png';
import youtube from '../assests/youtube (1).png';
import instagram from '../assests/instagram.png';
import playstore from '../assests/playstore.png';
import appstore from '../assests/appstore.png';

const socialMedia = [
    { name: 'facebook', icon: facebook, url: "#" },
    { name: 'instagram', icon: instagram, url: "#" },
    { name: 'twitter', icon: twitter, url: "#" },
    { name: 'youtube', icon: youtube, url: "#" },
]
const company = [
    { name: "Who We Are", url: '#' },
    { name: "Blog", url: '#' },
    { name: "careers", url: '#' },
    { name: "Report Fraud", url: '#' },
    { name: "contact", url: '#' },
    { name: "Investor Relations", url: '#' },
]
const downloadOptions = [
    { name:"appstore",icon: appstore, url: "#" },
    { name:"playstore",icon: playstore, url: "#" },
]

function Footer() {
    return (
        <div className='bg-gray mt-10 text-[#484747]'>
            <div className=' mx-3 md:mx-28 py-14 flex text-[20px] '>
                <div className='grid grid-cols-8  gap-10 md:gap-0'>
                    <div className='col-start-1 col-end-9 md:col-start-1 md:col-end-4 '>
                        <img src={logo2} />
                        <p className='pt-5 '>KIVLIK is a mobile steam car wash company, which offers premium car wash and detailing services at your doorstep. Conveniently book a car wash with a few taps on your phone. KIVLIK has several packages to meet your budget and requirements. Conveniently book a carwash with a few taps using the KIVLIK App or website. You can pick a time, location and package from the App or web. KIVLIK washes each vehicle using our Steam Cleaning system.</p>
                    </div>
                    <div className=' col-start-1 col-end-4 md:col-start-4 md:col-end-6 md:px-16'>
                        <p className='text-[25px] md:text-[30px] uppercase text-primary' >company</p>
                        <ul className='pt-5 capitalize text-[#484847]'>
                            {company.map((item, i) => (
                                <a key={i} href={item.url}>
                                    <li className={`${company.length - 1 !== i && ' pb-3'}`}>{item.name}</li>
                                </a>
                            ))}
                        </ul>
                    </div>
                    <div className='col-start-4 col-end-9 md:col-start-6 md:col-end-9 md:px-16' >
                        <div>
                            <p className='text-[25px] md:text-[30px] text-primary'>Got Questions?</p>
                            <p className='text-[30px] md:text-[40px] text-primary'>Help Center</p>
                        </div>
                        <div className='flex justify-end'>
                            <img src={arrow} />
                        </div>
                        <p>
                            Follow Us</p>
                        <div className='flex '>
                            {
                                socialMedia.map((item, i) => (
                                    <a key={i} href={item.url}>
                                        <img className='px-1 my-5' src={item.icon} alt={item.name} />
                                    </a>
                                ))
                            }
                        </div>
                        <div className='flex flex-row'>
                            {
                                downloadOptions.map((item, i) => (
                                    <a key={i} href={item.url}>
                                        <img className={`${downloadOptions.length-1 === i ? 'pr-0' :'pr-2'}`} src={item.icon} alt={item.name} />
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer