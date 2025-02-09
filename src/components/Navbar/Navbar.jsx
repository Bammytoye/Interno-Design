'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: 1, name: 'Home', link: '/homepage' },
        { id: 2, name: 'About Us', link: '/about-us' },
        { id: 3, name: 'Services', link: '/services' },
        { id: 4, name: 'Pages', link: '/pages' },
        { id: 5, name: 'Contact Us', link: '/contact-us' },
    ];

    return (
        <nav className='fixed w-full bg-white shadow-lg z-50'>
            <div className='flex justify-between items-center py-3 px-6 md:px-12 lg:px-24'>
                {/* Logo */}
                <div className='flex items-center gap-3'>
                    <Image src='/images/logo.png' alt='Interno Logo' height={30} width={30} />
                    <h2 className='text-2xl md:text-3xl font-extrabold'>Interno</h2>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden md:flex items-center gap-8 lg:gap-12'>
                    {navItems.map((item) => (
                        <li key={item.id} className='hover:text-[#d2691e] font-semibold transition-all duration-300'>
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button className='md:hidden transition-all duration-300' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className='md:hidden flex flex-col items-center gap-4 py-32 w-full bg-white shadow-md h-full'>
                    {navItems.map((item) => (
                        <li key={item.id} className='hover:text-[#d2691e] font-semibold transition-all duration-300'>
                            <Link href={item.link} onClick={() => setIsOpen(false)}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default Navbar;