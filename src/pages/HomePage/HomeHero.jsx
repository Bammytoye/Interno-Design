import React from 'react';
import { TbArrowBigRightLineFilled } from 'react-icons/tb';

function HomeHero() {
    return (
        <div>
            {/* hero */}
            <div className='hero bg-hero h-[640px] xl:h-[840px] bg-cover bg-center bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20'>
                {/* text */}
                <div className='mx-auto h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 md:px-12 lg:px-24'>
                    <div className='max-w-2xl flex flex-col gap-5'>
                        <h1 className='text-4xl md:text-5xl lg:text-[84px] font-semibold leading-none'>
                            Let&#39;s Create Your Dream Interior
                        </h1>

                        <h4 className='max-w-md md:max-w-lg text-gray-900 md:text-black'>
                            The world needs innovators and problem solvers who turn challenges into greater opportunities.
                        </h4>

                        <button className='flex w-[150px] mx-auto lg:mx-0 gap-3 items-center bg-[#d2691e] py-3 px-4 text-white rounded-2xl hover:text-gray-800 hover:bg-gray-300 transition-all duration-300'>
                            Get Started
                            <TbArrowBigRightLineFilled />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHero;
