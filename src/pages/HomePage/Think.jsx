import Image from 'next/image';
import React from 'react';

function Think() {
    return (
        <div className='p-6 md:p-12 lg:p-24'>
            <div className='flex flex-col gap-12 md:gap-16 lg:gap-24 justify-center bg-[#f5e8df] px-6 md:px-10 py-10 md:py-16 items-center rounded-[50px] md:rounded-[80px] lg:rounded-[100px] mb-16 md:mb-24 lg:mb-32'>
                <h2 className='font-semibold text-2xl md:text-3xl lg:text-4xl text-center'>
                    What the People Thinks About Interno
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 text-sm'>
                    {[
                        { name: 'Lisa Clairton', location: 'New York, USA', image: '/images/testimonal1.png', text: 'We selected Interno interior because of rigorous design background and education.' },
                        { name: 'David Knight', location: 'Ogbomosho, Nigeria', image: '/images/testimonal3.png', text: 'The team exceeded our expectations and emerged as leaders of our project.' },
                        { name: 'Lisa Tony', location: 'Paris, France', image: '/images/testimonal2.png', text: 'They balanced the architectural vision and the project realities beautifully.' }
                    ].map((item, index) => (
                        <div key={index} className='flex flex-col gap-5 bg-gray-50 px-6 md:px-10 py-5 rounded-2xl'>
                            <div className='flex items-center gap-4'>
                                <Image src={item.image} alt='testimony Image' width={50} height={50} />
                                <span>
                                    <p className='font-bold'>{item.name}</p>
                                    <p>{item.location}</p>
                                </span>
                            </div>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='grid lg:grid-cols-5 space-y-16 lg:gap-8 justify-center lg:justify-between items-center'>
                {['/images/brand1.png', '/images/brand2.png', '/images/brand3.png', '/images/brand4.png', '/images/brand5.png'].map((src, index) => (
                    <Image key={index} src={src} alt='brand logo' width={100} height={100} />
                ))}
            </div>
        </div>
    );
}

export default Think;
