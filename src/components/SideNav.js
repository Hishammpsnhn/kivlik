import React from 'react'

function SideNav({ Navdata }) {

    return (
        <div className='w-full opacity-1' >
            <ul>
                {Navdata.map((items, i) => (
                    <a href={items.url}>
                        <li key={i}
                            className={` p-3 font-semibold hover:opacity-60  text-lg font-poppins  `}
                        >{items.item}</li>
                    </a>
                ))}
                <a href="/">
                    <li
                        className={` p-3 hover:opacity-60  text-lg font-poppins font-semibold  `}
                    >Login</li>
                </a>
                <a href='/'>
                    <li
                        className={` p-3 hover:opacity-60 text-lg font-poppins font-semibold `}
                    >Sign Up</li>
                </a>
            </ul>
        </div>
    )
}

export default SideNav