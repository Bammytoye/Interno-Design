import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    const navItems = [
        { id: 1, name: 'Home', link: '/homepage' },
        { id: 1, name: 'About Us', link: '/about-us' },
        { id: 1, name: 'Services', link: '/services' },
        { id: 1, name: 'Pages', link: '/pages' },
        { id: 1, name: 'Contact Us', link: '/contact-us' },
    ] 


    return (
        <div className='fixed w-full flex py-3 px-24 bg-white justify-between items-center cursor-pointer shadow-lg z-50'>
            <div className='flex items-center gap-3'>
                <Image src='/images/logo.png' alt='Interno Logo' height={30} width={30} /> 
                <h2 className='text-4xl font-extrabold '> Interno</h2>   
            </div>

            <div>
                <ul className='flex items-center gap-12'>
                    {navItems.map((items, index)=> (
                        <li 
                            key={index.id}
                            className='hover:text-[#d2691e] hover:border-b-2 hover:border-[#d2691e] transition-all duration-300'
                            >
                            <Link href={items.link}>
                                {items.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar