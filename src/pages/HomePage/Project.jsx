import Image from 'next/image'
import React from 'react'
import { MdArrowRight } from "react-icons/md";

function Project() {
    return (
        <div className='p-6 md:p-12 lg:p-24'>
            <div className='flex flex-col gap-12'>
                <div className='flex flex-col justify-center items-center gap-4 text-center'>
                    <h2 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>
                        Recent Projects
                    </h2>

                    <p className='w-full md:w-[600px]'>
                        With tools to make every part of your process more human and a support team
                        excited to help you, getting started with us has never been easier.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {[1, 2, 3, 4].map((project, index) => (
                        <div key={index}>
                            <Image src={`/images/project${project}.png`} alt={`Project${project}`} height={500} width={1300} className='w-full h-auto' />

                            <div className='flex items-center justify-between mt-5'>
                                <span>
                                    <p className='font-semibold text-lg'>
                                        {project === 1 && "Winery Dry Creek Building"}
                                        {project === 2 && "Creative Workplace Design"}
                                        {project === 3 && "Bedroom Interior Pot Work"}
                                        {project === 4 && "Light Ambience Sepia Design"}
                                    </p>
                                    <p className='text-gray-600'>
                                        {project === 1 && "Art Modern"}
                                        {project === 2 && "Minimalist"}
                                        {project === 3 && "Modern"}
                                        {project === 4 && "Scandinavian"}
                                    </p>
                                </span>
                                <MdArrowRight size={40} className='bg-[#f5c5a3] p-2 rounded-full' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='lg:bg-[#f7f0eb] p-6 md:p-12 lg:p-16 mt-10 grid lg:grid-cols-4 justify-center items-center space-y-6 md:space-y-0 md:space-x-10'>
                {[{ number: "12", label: "Years of Experience" }, { number: "5k", label: "Success Project" }, { number: "1k", label: "Active Project" }, { number: "4k", label: "Happy Customers" }].map((item, index) => (
                    <div key={index} className={`text-center space-y-4 ${index !== 0 ? 'lg:border-l-2 border-b-2 border-[#f7dbc7] pb-6 lg:px-6 md:px-10' : ''}`}>
                        <p className='text-[#faba8d] text-5xl md:text-6xl lg:text-7xl font-bold'>{item.number}</p>
                        <p className='text-gray-700'>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project
