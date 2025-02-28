import Image from 'next/image';
import React from 'react';
import { BsShieldFillCheck } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import { PiFlowerTulip } from "react-icons/pi";
import { FaCar, FaPersonSwimming } from 'react-icons/fa6';
import { LuSofa } from "react-icons/lu";

const PropertyFeatured = () => {
    return (
        <div className="bg-[#F9F9F9] py-[70px] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-[70px]">
                <h1 className="text-[#030A1B] text-[30px] lg:text-[44px] font-semibold text-center mb-[10px]">Property Featured</h1>
                <p className="text-[#030A1B] text-center text-[16px] font-normal opacity-70">Real estate is a crowded field. But with the number of buyers purchasing homes through <br /> real estate agents and brokers growing there’s plenty of </p>
            </div>
            {/* cards  */}
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-[30px] items-end'>
                {/* 1st colum  */}
                <div className='flex flex-col gap-[30px] mx-3 lg:mx-0'>
                    <div className='p-[25px] rounded-[10px] bg-white'>
                        <BsShieldFillCheck className='w-[46px] h-[46px] text-[#FE753F] p-2 rounded bg-[#fabba2]' />
                        <h4 className="text-[#030A1B] text-[22px] font-semibold mb-[10px] mt-[15px]">100% Security</h4>
                        <p className="text-[#030A1B] font-poppins text-[16px] font-normal opacity-70">For many of us, buying a home is a dre and one not easily attainable. </p>
                    </div>
                    <div className='p-[25px] rounded-[10px] bg-white'>
                        <TbAirConditioning className='w-[46px] h-[46px] p-2 rounded bg-opacity-50 bg-[#fabba2] text-[#FE753F]' />
                        <h4 className="text-[#030A1B] text-[22px] font-semibold mb-[10px] mt-[15px]">Free air conditioner</h4>
                        <p className="text-[#030A1B] font-poppins text-[16px] font-normal opacity-70">For many of us, buying a home is a dre and one not easily attainable. </p>
                    </div>
                    <div className='p-[25px] rounded-[10px] bg-white'>
                        <PiFlowerTulip className='w-[46px] h-[46px] p-2 rounded bg-opacity-50 bg-[#fabba2] text-[#FE753F]' />
                        <h4 className="text-[#030A1B] text-[22px] font-semibold mb-[10px] mt-[15px]">Flower garden</h4>
                        <p className="text-[#030A1B] font-poppins text-[16px] font-normal opacity-70">For many of us, buying a home is a dre and one not easily attainable. </p>
                    </div>
                </div>
                {/* 2nd colum  */}
                <div className='mx-3 lg:mx-0'>
                    <Image src={'/images/featured.png'} width={100} height={100} alt='featured' className='w-full' />
                </div>
                {/* 3rd colum  */}
                <div className='flex flex-col gap-[30px] mx-3 lg:mx-0'>
                    <div className='p-[25px] rounded-[10px] bg-white'>
                    <FaCar className='w-[46px] h-[46px] p-2 rounded bg-opacity-50 bg-[#fabba2] text-[#FE753F]'/>
                        <h4 className="text-[#030A1B] text-[22px] font-semibold mb-[10px] mt-[15px]">Parkers & movers</h4>
                        <p className="text-[#030A1B] font-poppins text-[16px] font-normal opacity-70">For many of us, buying a home is a dre and one not easily attainable. </p>
                    </div>
                    <div className='p-[25px] rounded-[10px] bg-white'>
                    <LuSofa className='w-[46px] h-[46px] p-2 rounded bg-opacity-50 bg-[#fabba2] text-[#FE753F]'/>
                        <h4 className="text-[#030A1B] text-[22px] font-semibold mb-[10px] mt-[15px]">Rental furniture</h4>
                        <p className="text-[#030A1B] font-poppins text-[16px] font-normal opacity-70">For many of us, buying a home is a dre and one not easily attainable. </p>
                    </div>
                    <div className='p-[25px] rounded-[10px] bg-white'>
                    <FaPersonSwimming className='w-[46px] h-[46px] p-2 rounded bg-opacity-50 bg-[#fabba2] text-[#FE753F]'/>
                        <h4 className="text-[#030A1B] text-[22px] font-semibold mb-[10px] mt-[15px]">Swimming pool</h4>
                        <p className="text-[#030A1B] font-poppins text-[16px] font-normal opacity-70">For many of us, buying a home is a dre and one not easily attainable. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyFeatured;