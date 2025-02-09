import Image from 'next/image'
import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter, BiLogoWhatsapp } from 'react-icons/bi'

function Footer() {
    return (
        <div className='flex flex-col gap-10 px-24'>
            <div className='grid grid-cols-4 justify-between items-start space-x-16 border-b-2 pb-12 border-gray-200'>
                <div className='flex flex-col gap-4 '>
                    <div className='flex items-center gap-3'>
                        <Image src='/images/logo.png' alt='Interno Logo' height={30} width={30} />
                        <h2 className='text-4xl font-semibold '> Interno</h2>
                    </div>

                    <h2 className='text-md'>
                        We are leading architect and interior design firm in the world.
                    </h2>

                    <div className='flex gap-3 items-center'>
                        <BiLogoFacebook />
                        <BiLogoTwitter />
                        <BiLogoWhatsapp />
                        <BiLogoInstagram />
                        <BiLogoLinkedin />
                    </div>
                </div>

                <div>
                    <ul className='flex flex-col gap-3 items-start justify-start cursor-pointer'>
                        <li className='text-lg font-semibold'>Pages</li>
                        <li>Style Guide</li>
                        <li>Protected</li>
                        <li>Licenses</li>
                        <li>ChangeLog</li>
                        <li>404</li>
                    </ul>
                </div> 

                <div>
                    <ul className='flex flex-col gap-3 items-start justify-start cursor-pointer'>
                        <li className='text-lg font-semibold'>Explore</li>
                        <li>About Us</li>
                        <li>Recent Blog</li>
                        <li>Pricing Plan</li>
                        <li>Our Project</li>
                        <li>Contact Us</li>
                    </ul>
                </div> 

                <div>
                    <ul className='flex flex-col gap-3 items-start justify-start cursor-pointer'>
                        <li className='text-lg font-semibold'>Contact</li>
                        <li>53, East Birchwood Ave. Brooklyn, New York 11201, USA.</li>
                        <li>bamigbalatoyese@gmail.com</li>
                        <li>+234 (0) 816 988 5711</li>
                    </ul>
                </div> 
            </div>

            <div className='text-center pb-4 italic'>
                Copyright © Interno | Design by <span className='text-[#f0bb96]'>VictorFlow</span> | Code by <span className='text-[#f0bb96]'>Zeke</span>
            </div>
        </div>
    )
}

export default Footer