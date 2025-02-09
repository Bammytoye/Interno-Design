import Image from 'next/image'
import React from 'react'
import { MdArrowRight } from 'react-icons/md'
import { CgArrowRight } from "react-icons/cg";

function Blogs() {
    return (
        <div className='p-24 flex flex-col gap-12'>
            <div className='flex flex-col justify-center items-center gap-4 text-center'>
                <h2 className='font-semibold text-4xl'>
                    Recent Blogs
                </h2>

                <p className='w-[600px]'>
                    Get updates about our latest trends and techniques
                    used in interior design project works.
                </p>
            </div>

            <div className='grid grid-cols-3 justify-between items-center gap-6'>
                <div className='border-2 border-gray-200 p-2 rounded-[60px] h-[420px]'>
                    <Image src='/images/blog1.png' alt='BlogOne' width={600} height={300} />

                    <p className='w-[350px] text-lg font-semibold'>Residential Interior Designer In New York, USA</p>

                    <span className='flex justify-between items-center'>
                        <p className='text-sm text-gray-500'>November 23, 2001</p>
                        <MdArrowRight size={25} className='bg-[#f5c5a3] p-1 rounded-full' />
                    </span>
                </div>

                <div className='border-2 border-gray-200 p-2 rounded-[60px] h-[420px]'>
                    <Image src='/images/blog1.png' alt='BlogOne' width={600} height={300} />

                    <p className='w-[350px] text-lg font-semibold'>How To Choose The Best Wall Art And Decor House</p>

                    <span className='flex justify-between items-center'>
                        <p className='text-sm text-gray-500'>November 23, 2001</p>
                        <MdArrowRight size={25} className='bg-[#f5c5a3] p-1 rounded-full' />
                    </span>
                </div>

                <div className='border-2 border-gray-200 p-2 rounded-[60px] h-[420px]'>
                    <Image src='/images/blog1.png' alt='BlogOne' width={600} height={300} />

                    <p className='w-[350px] text-lg font-semibold'>Tips To Increase The Interior Value Of Your House</p>

                    <span className='flex justify-between items-center'>
                        <p className='text-sm text-gray-500'>November 23, 2001</p>
                        <MdArrowRight size={25} className='bg-[#f5c5a3] p-1 rounded-full' />
                    </span>
                </div>

                <div className='border-2 border-gray-200 p-2 rounded-[60px] h-[420px]'>
                    <Image src='/images/blog1.png' alt='BlogOne' width={600} height={300} />

                    <p className='w-[350px] text-lg font-semibold'>Best Solution For Any Office And Business Interior</p>

                    <span className='flex justify-between items-center'>
                        <p className='text-sm text-gray-500'>November 23, 2001</p>
                        <MdArrowRight size={25} className='bg-[#f5c5a3] p-1 rounded-full' />
                    </span>
                </div>

                <div className='border-2 border-gray-200 p-2 rounded-[60px] h-[420px]'>
                    <Image src='/images/blog1.png' alt='BlogOne' width={600} height={300} />

                    <p className='w-[350px] text-lg font-semibold'>Get Solution For Building Construction Work</p>

                    <span className='flex justify-between items-center'>
                        <p className='text-sm text-gray-500'>November 23, 2001</p>
                        <MdArrowRight size={25} className='bg-[#f5c5a3] p-1 rounded-full' />
                    </span>
                </div>

                <div className='border-2 border-gray-200 p-2 rounded-[60px] h-[420px]'>
                    <Image src='/images/blog1.png' alt='BlogOne' width={600} height={300} />

                    <p className='w-[350px] text-lg font-semibold'>Attain The Best Finish For The Kitchen Cabinets</p>

                    <span className='flex justify-between items-center'>
                        <p className='text-sm text-gray-500'>November 23, 2001</p>
                        <MdArrowRight size={25} className='bg-[#f5c5a3] p-1 rounded-full' />
                    </span>
                </div>
            </div>

            <div className='mt-10 p-20 flex flex-col justify-center items-center gap-5 bg-gray-600 rounded-3xl'>
                <h2 className='text-white font-bold text-4xl'>
                    Wanna join the interno?
                </h2>

                <h2 className='text-white'>
                    Contact Us & Get A Free Consultation
                </h2>

                <span className='flex bg-[#f0bb96] py-3 px-5 items-center rounded-2xl gap-4 cursor-pointer hover:text-gray-800 hover:bg-gray-300 transition-all duration-300'>
                    Contact With Us
                    <CgArrowRight />
                </span>
            </div>
        </div>
    )
}

export default Blogs