import Image from 'next/image';
import React from 'react';
import {
    BiLogoFacebook,
    BiLogoInstagram,
    BiLogoLinkedin,
    BiLogoTwitter,
    BiLogoWhatsapp
} from 'react-icons/bi';

const footerLinks = [
    {
        title: "Pages",
        links: ["Style Guide", "Protected", "Licenses", "ChangeLog", "404"],
    },
    {
        title: "Explore",
        links: ["About Us", "Recent Blog", "Pricing Plan", "Our Project", "Contact Us"],
    },
    {
        title: "Contact",
        links: [
            "53, East Birchwood Ave. Brooklyn, New York 11201, USA.",
            "bamigbalatoyese@gmail.com",
            "+234 (0) 816 988 5711",
        ],
    },
];

const socialIcons = [
    BiLogoFacebook,
    BiLogoTwitter,
    BiLogoWhatsapp,
    BiLogoInstagram,
    BiLogoLinkedin,
];

function Footer() {
    return (
        <div className="flex flex-col gap-10 px-6 md:px-12 lg:px-24">
            {/* Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b-2 pb-12 border-gray-200">
                {/* Logo & About Section */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <Image src="/images/logo.png" alt="Interno Logo" height={30} width={30} />
                        <h2 className="text-3xl font-semibold">Interno</h2>
                    </div>
                    <p className="text-gray-600">
                        We are leading architect and interior design firm in the world.
                    </p>
                    <div className="flex gap-3 items-center text-xl">
                        {socialIcons.map((Icon, index) => (
                            <Icon key={index} className="cursor-pointer hover:text-gray-500 transition" />
                        ))}
                    </div>
                </div>

                {/* Footer Links */}
                {footerLinks.map((section, index) => (
                    <div key={index}>
                        <ul className="flex flex-col gap-3 cursor-pointer">
                            <li className="text-lg font-semibold">{section.title}</li>
                            {section.links.map((link, idx) => (
                                <li key={idx} className="text-gray-600 hover:text-gray-800 transition">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Copyright Section */}
            <div className="text-center pb-4 italic text-gray-600">
                Copyright © Interno | Design by{" "}
                <span className="text-[#f0bb96]">VictorFlow</span> | Code by{" "}
                <span className="text-[#f0bb96]">Zeke</span>
            </div>
        </div>
    );
}

export default Footer;
