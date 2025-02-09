import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CgArrowRight } from "react-icons/cg";
import { BiSolidPhoneCall } from "react-icons/bi";

function SecondSlide() {
    return (
        <div className='flex flex-col gap-7 items-center p-24'>
            <div className='flex justify-between items-center px-10 py-12 gap-20'>
                <div className='text-center space-y-5 flex flex-col'>
                    <h2 className='font-semibold text-xl'>
                        Interior Design
                    </h2>

                    <p>
                        Enhancing the interior to achieve a healthier environment for the people
                        using right space.
                    </p>

                    <Link href='#'
                        className='flex justify-center mx-auto w-[140px] gap-3 items-center bg-[#d2691e] py-3 px-3 text-white  rounded-2xl hover:text-gray-800 hover:bg-gray-300 transition-all duration-300'
                    >
                        View More
                        <CgArrowRight />
                    </Link>
                </div>

                <div className='text-center space-y-5 flex flex-col'>
                    <h2 className='font-semibold text-xl'>
                        Furniture
                    </h2>

                    <p>
                        Movable articles that are used to make a room or building suitable
                        for living or working.
                    </p>

                    <Link href='#'
                        className='flex justify-center mx-auto w-[140px] gap-3 items-center bg-[#d2691e] py-3 px-3 text-white  rounded-2xl hover:text-gray-800 hover:bg-gray-300 transition-all duration-300'
                    >
                        View More
                        <CgArrowRight />
                    </Link>
                </div>

                <div className='text-center space-y-5 flex flex-col'>
                    <h2 className='font-semibold text-xl'>
                        Flooring
                    </h2>

                    <p>
                        Thin object ny finished material applied over a floor structure to provide
                        a walking surface.
                    </p>

                    <Link href='#'
                        className='flex justify-center mx-auto w-[140px] gap-3 items-center bg-[#d2691e] py-3 px-3 text-white  rounded-2xl hover:text-gray-800 hover:bg-gray-300 transition-all duration-300'
                    >
                        View More
                        <CgArrowRight />
                    </Link>
                </div>
            </div>

            <div className='flex justify-between items-center space-x-32'>
                <div className='flex flex-col space-y-10'>
                    <h2 className='font-semibold text-6xl'>
                        We Tackle The Most Challenging Designs
                    </h2>

                    <h3 className='text-md text-gray-700'>
                        The world needs innovators and problem solvers who
                        turn challenges into greater opportunities. We have an insatiable curiosity about
                        transformative trends challenging the status.
                    </h3>

                    <div className='flex gap-2 items-center'>
                        <BiSolidPhoneCall size={55} className='bg-[#f5c5a3] p-3 rounded-full' />
                        <span>
                            <p>0123456789</p>
                            <p>Call Us Anytime</p>
                        </span>
                    </div>

                    <Link href='#'
                        className='flex w-[200px] gap-3 items-center bg-[#d2691e] py-3 px-3 text-white  rounded-2xl hover:text-gray-800 hover:bg-gray-300 transition-all duration-300'
                    >
                        Get Free Estimate
                        <CgArrowRight />
                    </Link>
                </div>

                <div>
                    <Image src='/images/hero2.png' height={500} width={1300} alt='Image' />
                </div>
            </div>
        </div>
    )
}

export default SecondSlide