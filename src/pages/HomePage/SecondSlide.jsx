import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgArrowRight } from 'react-icons/cg';
import { BiSolidPhoneCall } from 'react-icons/bi';

function SecondSlide() {
    return (
        <div className='flex flex-col gap-7 items-center p-6 md:p-12 lg:p-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 px-4 md:px-10 lg:px-20 py-8 md:py-12'>
                {[
                    { title: 'Interior Design', text: 'Enhancing the interior to achieve a healthier environment for the people using right space.' },
                    { title: 'Furniture', text: 'Movable articles that are used to make a room or building suitable for living or working.' },
                    { title: 'Flooring', text: 'Thin object or finished material applied over a floor structure to provide a walking surface.' }
                ].map((item, index) => (
                    <div key={index} className='text-center space-y-5 flex flex-col'>
                        <h2 className='font-semibold text-xl'>{item.title}</h2>
                        <p>{item.text}</p>
                        <Link href='#' className='flex justify-center mx-auto w-[140px] gap-3 items-center bg-[#d2691e] py-3 px-3 text-white rounded-2xl hover:text-gray-800 hover:bg-gray-300 transition-all duration-300'>
                            View More
                            <CgArrowRight />
                        </Link>
                    </div>
                ))}
            </div>

            <div className='flex flex-col-reverse lg:flex-row justify-between  gap-10 items-center space-y-10 lg:space-y-0 lg:space-x-16 px-4 md:px-10 lg:px-24'>
                <div className='flex flex-col space-y-6 md:space-y-10'>
                    <h2 className='font-semibold text-4xl md:text-5xl lg:text-6xl text-center lg:text-left'>
                        We Tackle The Most Challenging Designs
                    </h2>

                    <h3 className='text-md text-gray-700 text-center lg:text-left'>
                        The world needs innovators and problem solvers who turn challenges into greater opportunities. We have an insatiable curiosity about transformative trends challenging the status.
                    </h3>

                    <div className='flex gap-2 items-center justify-center lg:justify-start'>
                        <BiSolidPhoneCall size={45} className='bg-[#f5c5a3] p-3 rounded-full' />
                        <span>
                            <p className='font-bold'>0123456789</p>
                            <p>Call Us Anytime</p>
                        </span>
                    </div>

                    <Link href='#' className='flex w-[200px] gap-3 items-center justify-center bg-[#d2691e] py-3 px-3 text-white rounded-2xl hover:text-gray-800 hover:bg-gray-300 transition-all duration-300 mx-auto lg:mx-0'>
                        Get Free Estimate
                        <CgArrowRight />
                    </Link>
                </div>

                <div className='w-full flex justify-center'>
                    <Image src='/images/hero2.png' height={500} width={1300} alt='Image' className='max-w-full h-auto' />
                </div>
            </div>
        </div>
    );
}

export default SecondSlide;
