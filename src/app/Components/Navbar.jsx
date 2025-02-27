import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between my-12'>
            {/* logo  */}
            <div>
                <Image src="/images/logo.png" alt="hello" width={180} height={180}/>
            </div>


            {/* routes */}
            <div>
                <ul className='flex items-center gap-12'>
                    <li className='text-[#030A1B] text-base font-medium  hover:font-semibold hover:text-[#FE753F] cursor-pointer'>Home</li>
                    <li className='text-[#030A1B] text-base font-medium  hover:font-semibold hover:text-[#FE753F] cursor-pointer'>Properties</li>
                    <li className='text-[#030A1B] text-base font-medium  hover:font-semibold hover:text-[#FE753F] cursor-pointer'>About us</li>
                    <li className='text-[#030A1B] text-base font-medium  hover:font-semibold hover:text-[#FE753F] cursor-pointer'>Blog</li>
                    <button className='px-[30px] py-[15px] font-medium text-base text-[#FFF] bg-[#2E6EFF] rounded'>Contact us</button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;