import Image from 'next/image';
import React from 'react';
import { MdArrowRight } from 'react-icons/md';
import { CgArrowRight } from 'react-icons/cg';

const blogPosts = [
    {
        id: 1,
        title: "Residential Interior Designer In New York, USA",
        date: "November 23, 2001",
        image: "/images/blog1.png",
    },
    {
        id: 2,
        title: "How To Choose The Best Wall Art And Decor House",
        date: "November 23, 2001",
        image: "/images/blog1.png",
    },
    {
        id: 3,
        title: "Tips To Increase The Interior Value Of Your House",
        date: "November 23, 2001",
        image: "/images/blog1.png",
    },
    {
        id: 4,
        title: "Best Solution For Any Office And Business Interior",
        date: "November 23, 2001",
        image: "/images/blog1.png",
    },
    {
        id: 5,
        title: "Get Solution For Building Construction Work",
        date: "November 23, 2001",
        image: "/images/blog1.png",
    },
    {
        id: 6,
        title: "Attain The Best Finish For The Kitchen Cabinets",
        date: "November 23, 2001",
        image: "/images/blog1.png",
    },
];

function Blogs() {
    return (
        <div className="p-10 md:p-12 lg:p-24 flex flex-col gap-12">
            {/* Header Section */}
            <div className="flex flex-col justify-center items-center gap-4 text-center">
                <h2 className="font-semibold text-3xl md:text-4xl">Recent Blogs</h2>
                <p className="max-w-xl text-gray-600">
                    Get updates about our latest trends and techniques used in interior design project works.
                </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div key={post.id} className="border border-gray-200 p-4 rounded-3xl lg:h-[420px]">
                        <Image src={post.image} alt={post.title} width={600} height={300} className="rounded-xl" />
                        <p className="text-lg font-semibold mt-3">{post.title}</p>
                        <span className="flex justify-between items-center mt-2">
                            <p className="text-sm text-gray-500">{post.date}</p>
                            <MdArrowRight size={25} className="bg-[#f5c5a3] p-1 rounded-full cursor-pointer" />
                        </span>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="mt-10 p-10 md:p-20 flex flex-col justify-center items-center gap-5 bg-gray-600 rounded-3xl text-center">
                <h2 className="text-white font-bold text-3xl md:text-4xl">Wanna join the interno?</h2>
                <p className="text-white text-lg">Contact Us & Get A Free Consultation</p>
                <button className="flex items-center bg-[#f0bb96] py-3 px-6 rounded-2xl gap-4 cursor-pointer hover:text-gray-800 hover:bg-gray-300 transition-all duration-300">
                    Contact With Us <CgArrowRight />
                </button>
            </div>
        </div>
    );
}

export default Blogs;
