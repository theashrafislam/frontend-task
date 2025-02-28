"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='flex justify-between items-center my-4 lg:my-12 mx-3 md:mx-6 lg:mx-12'>
            {/* Logo */}
            <div>
                <Image src="/images/logo.png" alt="hello" width={180} height={180} />
            </div>

            {/* Routes for larger screens */}
            <div className='hidden lg:flex'>
                <ul className='flex items-center gap-12'>
                    <li className='text-[#030A1B] text-base font-medium hover:font-semibold hover:text-[#FE753F] cursor-pointer'>
                        Home
                    </li>
                    <li className='text-[#030A1B] text-base font-medium hover:font-semibold hover:text-[#FE753F] cursor-pointer'>
                        Properties
                    </li>
                    <li className='text-[#030A1B] text-base font-medium hover:font-semibold hover:text-[#FE753F] cursor-pointer'>
                        About us
                    </li>
                    <li className='text-[#030A1B] text-base font-medium hover:font-semibold hover:text-[#FE753F] cursor-pointer'>
                        Blog
                    </li>
                    <li className='px-[30px] py-[15px] font-medium text-base text-[#FFF] bg-[#2E6EFF] rounded'>
                        Contact us
                    </li>
                </ul>
            </div>

            {/* Mobile menu toggle button */}
            <div className='lg:hidden'>
                <RiMenu3Fill
                    className='text-2xl cursor-pointer'
                    onClick={() => setOpen(true)}
                />
            </div>

            {/* Mobile menu (overlay) */}
            {open && (
                <div className='fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden'>
                    <div className='fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg p-6'>
                        {/* Close button */}
                        <div className='flex justify-end'>
                            <RiCloseLine
                                className='text-2xl cursor-pointer'
                                onClick={() => setOpen(false)}
                            />
                        </div>

                        {/* Mobile menu routes */}
                        <ul className='mt-8 space-y-6'>
                            <li className='text-[#030A1B] text-base font-medium hover:font-semibold hover:text-[#FE753F] cursor-pointer'>
                                Home
                            </li>
                            <li className='text-[#030A1B] text-base font-medium hover:font-semibold hover:text-[#FE753F] cursor-pointer'>
                                Properties
                            </li>
                            <li className='text-[#030A1B] text-base font-medium hover:font-semibold hover:text-[#FE753F] cursor-pointer'>
                                About us
                            </li>
                            <li className='text-[#030A1B] text-base font-medium hover:font-semibold hover:text-[#FE753F] cursor-pointer'>
                                Blog
                            </li>
                            <li className='w-full px-[30px] py-[15px] font-medium text-base text-[#FFF] bg-[#2E6EFF] rounded'>
                                Contact us
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;