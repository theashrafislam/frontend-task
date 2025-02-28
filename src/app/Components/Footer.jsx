import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from 'react-icons/io';

const Footer = () => {
    return (
        <div className='my-[140px] flex flex-col md:flex-row items-center gap-[220px]'>
            <div className='flex flex-col gap-12 md:gap-0 md:flex-row justify-between items-center w-[50%]'>
                <div>
                    <Image src="/images/logo.png" alt="hello" width={180} height={180} />
                    <p className='my-[25px] text-[#030A1B] font-dm-sans text-[16px] font-normal leading-[24px] opacity-70'>Contrary to popular  is not simply <br /> random text. It has </p>
                    <ul className='flex items-center gap-2'>
                        <li><FaFacebook className='bg-[#FE753F] rounded-full text-white p-1 text-3xl' /></li>
                        <li><FaInstagramSquare className='bg-[#FE753F] rounded-full text-white p-1 text-3xl' /></li>
                        <li><FaTwitterSquare className='bg-[#FE753F] rounded-full text-white p-1 text-3xl' /></li>
                        <li><IoLogoYoutube className='bg-[#FE753F] rounded-full text-white p-1 text-3xl' /></li>
                        <li><FaLinkedin className='bg-[#FE753F] rounded-full text-white p-1 text-3xl' /></li>
                    </ul>
                </div>
                <div className='text-start'>
                    <h4 className="text-[#030A1B] text-[22px] font-semibold mb-[25px]">About</h4>
                    <p className="opacity-70 text-[#030A1B] text-[16px] font-medium leading-[17px] capitalize mb-[15px]">Company</p>
                    <p className="opacity-70 text-[#030A1B] text-[16px] font-medium leading-[17px] capitalize mb-[15px]">Team</p>
                    <p className="opacity-70 text-[#030A1B] text-[16px] font-medium leading-[17px] capitalize mb-[15px]">Career</p>
                    <p className="opacity-70 text-[#030A1B] text-[16px] font-medium leading-[17px] capitalize">Blogs</p>
                </div>
            </div>
            <div className='w-[50%] flex flex-col md:flex-row justify-between items-center'>
                <div className='text-start'>
                    <h4 className="text-[#030A1B] text-[22px] font-semibold mb-[25px]">Products</h4>
                    <p className="opacity-70 text-[#030A1B] text-[16px] font-medium leading-[17px] capitalize mb-[15px]">E-Books</p>
                    <p className="opacity-70 text-[#030A1B] text-[16px] font-medium leading-[17px] capitalize mb-[15px]">Preasantation</p>
                    <p className="opacity-70 text-[#030A1B] text-[16px] font-medium leading-[17px] capitalize mb-[15px]">Management</p>
                    <p className="opacity-70 text-[#030A1B] text-[16px] font-medium leading-[17px] capitalize">Dashboard</p>
                </div>
                <div className='text-start'>
                    <h4 className="text-[#030A1B] text-[22px] font-semibold mb-[25px]">Address</h4>
                    <p className="opacity-70 text-[#030A1B] text-[16px] font-medium leading-[17px] capitalize mb-[15px]">Country Delevery</p>
                    <p className="opacity-70 text-[#030A1B] text-[16px] font-medium leading-[17px] capitalize mb-[15px]">Counter Beach Post</p>
                    <p className="opacity-70 text-[#030A1B] text-[16px] font-medium leading-[17px] capitalize mb-[15px]">domain.com</p>
                    <p className="opacity-70 text-[#030A1B] text-[16px] font-medium leading-[17px] capitalize">+8801700000000</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;