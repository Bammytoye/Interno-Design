import Image from 'next/image'
import React from 'react'

function Think() {
    return (
        <div className='p-24'>
            <div className='flex flex-col gap-24 justify-center bg-[#f5e8df] px-10 py-16 items-center rounded-[100px] mb-32'>
                <h2 className='font-semibold text-4xl'>
                    What the People Thinks About Interno
                </h2>

                <div className='flex justify-between items-center gap-6 px-10 text-sm'>
                    <div className='flex flex-col gap-5 bg-gray-50 px-10 py-5 rounded-2xl'>
                        <div className='flex items-center gap-4'>
                            <Image src='/images/testimonal1.png' alt='testimony Image' width={50} height={50} />

                            <span>
                                <p>Lisa Clairton</p>
                                <p>New York, USA</p>
                            </span>
                        </div>

                        <p>
                            We selected Interno interior because of rigorous design background and education.
                        </p>
                    </div>

                    <div className='flex flex-col gap-5 bg-gray-50 px-10 py-5 rounded-2xl'>
                        <div className='flex items-center gap-4'>
                            <Image src='/images/testimonal3.png' alt='testimony Image' width={50} height={50} />

                            <span>
                                <p>David Knight</p>
                                <p>Ogbomosho, Nigeria</p>
                            </span>
                        </div>

                        <p>
                            The team exceeded our expectations and emerged as leaders of our project&#39;s.
                        </p>
                    </div>

                    <div className='flex flex-col gap-5 bg-gray-50 px-10 py-5 rounded-2xl'>
                        <div className='flex items-center gap-4'>
                            <Image src='/images/testimonal2.png' alt='testimony Image' width={50} height={50} />

                            <span>
                                <p>Lisa Tony</p>
                                <p>Paris, France</p>
                            </span>
                        </div>

                        <p>
                            They balanced the architectural vision and the project realities beautifully.
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <Image src='/images/brand1.png' alt='testimony Image' width={100} height={100} />
                <Image src='/images/brand2.png' alt='testimony Image' width={100} height={100} />
                <Image src='/images/brand3.png' alt='testimony Image' width={100} height={100} />
                <Image src='/images/brand4.png' alt='testimony Image' width={100} height={100} />
                <Image src='/images/brand5.png' alt='testimony Image' width={100} height={100} />
            </div>
        </div>
    )
}

export default Think