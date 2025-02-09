import React from 'react'
import { TbArrowBigRightLineFilled } from "react-icons/tb";

function HomeHero() {
    return (
        <div>
            {/* hero */}
            <div className='hero bg-hero h-[640px] xl:h-[840px] lg:bg-cover bg-center bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20'>
                {/* text */}
                <div className='mx-auto h-full flex pt-40 px-24'>
                    <div className='w-[757px] flex gap-5 flex-col items-center text-center lg:text-left lg:items-start'>
                        <h1 className='text-[64px] lg:text-[84px] font-semibold leading-none'>
                            Let&#39;s Create Your Dream Interior
                        </h1>

                        <h4 className='w-[500px]'>
                            The world needs innovators and problem solvers who turn challenges into greater opportunities.
                        </h4>

                        <button className='flex gap-3 items-center bg-[#d2691e] py-3 px-3 text-white  rounded-2xl hover:text-gray-800 hover:bg-gray-300 transition-all duration-300'>
                            Get Started
                            <TbArrowBigRightLineFilled />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero