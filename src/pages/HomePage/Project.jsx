import Image from 'next/image'
import React from 'react'
import { MdArrowRight } from "react-icons/md";

function Project() {
    return (
        <div className=''>
            <div className='p-24 flex flex-col gap-12'>
                <div className='flex flex-col justify-center items-center gap-4 text-center'>
                    <h2 className='font-semibold text-4xl'>
                        Recent Projects
                    </h2>

                    <p className='w-[600px]'>
                        With tools to make every part of your process more human and a support team
                        excited to help you, getting started with us never been easier.
                    </p>
                </div>

                <div className='grid grid-cols-2 justify-between items-center gap-6'>
                    <div>
                        <Image src='/images/project1.png' alt='Project1' height={500} width={1300} />

                        <div className='flex items-center justify-between mt-5'>
                            <span>
                                <p className='font-semibold text-lg'>Winery Dry Creek Building</p>
                                <p className='text-gray-600'>Art Modern</p>
                            </span>
                            <MdArrowRight size={55} className='bg-[#f5c5a3] p-3 rounded-full' />
                        </div>
                    </div>

                    <div>
                        <Image src='/images/project2.png' alt='Project1' height={500} width={1300} />

                        <div className='flex items-center justify-between mt-5'>
                            <span>
                                <p className='font-semibold text-lg'>Creative Workplace Design</p>
                                <p className='text-gray-600'>Minimalist</p>
                            </span>
                            <MdArrowRight size={55} className='bg-[#f5c5a3] p-3 rounded-full' />
                        </div>
                    </div>

                    <div>
                        <Image src='/images/project3.png' alt='Project1' height={500} width={1300} />

                        <div className='flex items-center justify-between mt-5'>
                            <span>
                                <p className='font-semibold text-lg'>Bedroom Interior Pot Work</p>
                                <p className='text-gray-600'>Modern</p>
                            </span>
                            <MdArrowRight size={55} className='bg-[#f5c5a3] p-3 rounded-full' />
                        </div>
                    </div>

                    <div>
                        <Image src='/images/project4.png' alt='Project1' height={500} width={1300} />

                        <div className='flex items-center justify-between mt-5'>
                            <span>
                                <p className='font-semibold text-lg'>Light Ambience Sepia Design</p>
                                <p className='text-gray-600'>Scandinavian</p>
                            </span>
                            <MdArrowRight size={55} className='bg-[#f5c5a3] p-3 rounded-full' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#f7f0eb] p-16 flex justify-center items-center space-x-10'>
                <div className='text-center space-y-6'>
                    <p className='text-[#faba8d] text-7xl font-bold'>12</p>
                    <p className='text-gray-700'>Years of Experience</p>
                </div>

                <div className='border-l-2 border-[#f7dbc7] px-10 space-y-4 text-center'>
                    <p className='text-[#faba8d] text-7xl font-bold'>5k</p>
                    <p className='text-gray-700'>Success Project</p>
                </div>

                <div className='border-l-2 border-[#f7dbc7] px-10 space-y-4 text-center'>
                    <p className='text-[#faba8d] text-7xl font-bold'>1k</p>
                    <p className='text-gray-700'>Active Project</p>
                </div>

                <div className='border-l-2 border-[#f7dbc7] px-10 space-y-4 text-center'>
                    <p className='text-[#faba8d] text-7xl font-bold'>4k</p>
                    <p className='text-gray-700'>Happy Customers</p>
                </div>
            </div>
        </div>
    )
}

export default Project