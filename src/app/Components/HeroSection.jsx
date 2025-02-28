"use client"

import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';

const HeroSection = () => {

    const [buy, setBuy] = useState(true);
    const [rent, setRent] = useState(false);
    const [sell, setSell] = useState(false);

    const handleTabs = (value) => {
        if (value === 'buy') {
            setBuy(true);
            setRent(false);
            setSell(false);
        } else if (value === 'rent') {
            setRent(true);
            setBuy(false);
            setSell(false);
        } else {
            setSell(true);
            setBuy(false);
            setRent(false);
        }

    }

    return (
        <div className='flex lg:flex-row flex-col-reverse justify-between gap-3 relative'>
            <div className='w-[100%] lg:w-[55%] pt-12 lg:pt-24'>
                <h1 className='hidden lg:flex text-[#030A1B] text-[61px] not-italic font-semibold leading-[120%]'>Find the perfect <br /> place to stay with <br /> your family</h1>
                <div className="sm:flex lg:hidden flex items-center justify-center text-center">
                    <h1 className="text-[#030A1B] text-[20px] font-semibold mx-2">
                        Find the perfect place to stay with your family
                    </h1>
                </div>
                <p className='text-[#030A1B] text-sm lg:text-[18px] not-italic font-medium text-center lg:text-start leading-[27px] mt-7 mx-3 lg:mx-0'>Buying a home is a life-changing experience, so shouldn’t <br /> your real estate agent be a life changer.</p>

                <div className='mt-10'>
                    {/* tabs  */}
                    <div className='bg-white p-6 flex items-center justify-center lg:justify-start gap-11 w-[100%] lg:w-64 h-12 shadow-2xl'>
                        <li onClick={() => handleTabs('buy')} className={`list-none text-lg font-medium hover:font-semibold hover:text-[#FE753F] ${buy && 'text-[#FE753F]'} cursor-pointer`}>Buy</li>
                        <li onClick={() => handleTabs('rent')} className={`list-none text-lg font-medium hover:font-semibold hover:text-[#FE753F] text-[#030A1B] ${rent && 'text-[#FE753F]'} cursor-pointer`}>Rent</li>
                        <li onClick={() => handleTabs('sell')} className={`list-none text-lg font-medium hover:font-semibold hover:text-[#FE753F] text-[#030A1B] ${sell && 'text-[#FE753F]'} cursor-pointer`}>Sell</li>
                    </div>


                    {/* buy filter */}
                    {buy && <div className='bg-white p-6  drop-shadow-[-10px_0px_50px_rgba(0,0,0,0.10)] flex flex-col lg:flex-row items-center justify-between gap-16 lg:absolute z-10 w-full lg:w-[67%]'>
                        {/* location  */}
                        <div className='lg:border-r-2 pr-5 border-[#E6E7E9]'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="location" className="text-[#030A1B] text-[16px] font-normal leading-normal">
                                    Location
                                </label>
                                <RiArrowDropDownLine className='text-2xl' />
                            </div>
                            <select
                                id="location"
                                name="location"
                                className="appearance-none mt-1 block w-full pl-1 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            >
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chittagong">Chittagong</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Khulna">Khulna</option>
                            </select>
                        </div>

                        {/* Property type  */}
                        <div className='pr-10 lg:border-r-2 border-[#E6E7E9]'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="Property type" className="text-[#030A1B] text-[16px] font-normal text-nowrap leading-normal">
                                    Property type
                                </label>
                                <RiArrowDropDownLine className='text-2xl' />
                            </div>
                            <select
                                id="location"
                                name="location"
                                className="appearance-none mt-1 block w-full pl-1 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            >
                                <option value="Duplex">Duplex</option>
                                <option value="Duplex 2">Duplex 2</option>
                                <option value="Duplex 3">Duplex 3</option>
                                <option value="Duplex 4">Duplex 4</option>
                                <option value="Duplex 5">Duplex 5</option>
                            </select>
                        </div>
                        {/* Price  */}
                        <div>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="Price" className="text-[#030A1B] text-[16px] font-normal leading-normal">
                                    Price
                                </label>
                                <RiArrowDropDownLine className='text-2xl' />
                            </div>
                            <select
                                id="Price"
                                name="Price"
                                className="appearance-none mt-1 block w-full pl-1 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            >
                                <option value="$4000 - $8000">$4000 - $6000</option>
                                <option value="Chittagong">$6000 - $8000</option>
                                <option value="Sylhet">$8000 - $10000</option>
                            </select>
                        </div>

                        {/* search buttom  */}
                        <button className='rounded-[10px] justify-center bg-[#2E6EFF] text-white text-[16px] font-medium leading-normal flex gap-1 items-center p-4'><CiSearch className='text-2xl font-bold' /><span>Search</span></button>
                    </div>}
                    {rent && <div className='bg-white p-6  drop-shadow-[-10px_0px_50px_rgba(0,0,0,0.10)] flex flex-col lg:flex-row items-center justify-between gap-16 lg:absolute z-10 w-full lg:w-[67%]'>
                        {/* location  */}
                        <div className='lg:border-r-2 pr-5 border-[#E6E7E9]'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="location" className="text-[#030A1B] text-[16px] font-normal leading-normal">
                                    Dhaka
                                </label>
                                <RiArrowDropDownLine className='text-2xl' />
                            </div>
                            <select
                                id="location"
                                name="location"
                                className="appearance-none mt-1 block w-full pl-1 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            >
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chittagong">Dhaka 2</option>
                                <option value="Sylhet">Dhaka 3</option>
                                <option value="Rajshahi">Dhaka 4</option>
                                <option value="Khulna">Dhaka 5</option>
                            </select>
                        </div>

                        {/* Property type  */}
                        <div className='pr-10 lg:border-r-2 border-[#E6E7E9]'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="Property type" className="text-[#030A1B] text-[16px] font-normal text-nowrap leading-normal">
                                    Property type
                                </label>
                                <RiArrowDropDownLine className='text-2xl' />
                            </div>
                            <select
                                id="location"
                                name="location"
                                className="appearance-none mt-1 block w-full pl-1 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            >
                                <option value="Duplex">Duplex</option>
                                <option value="Duplex 2">Duplex 2</option>
                                <option value="Duplex 3">Duplex 3</option>
                                <option value="Duplex 4">Duplex 4</option>
                                <option value="Duplex 5">Duplex 5</option>
                            </select>
                        </div>
                        {/* Price  */}
                        <div>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="Price" className="text-[#030A1B] text-[16px] font-normal leading-normal">
                                    Price
                                </label>
                                <RiArrowDropDownLine className='text-2xl' />
                            </div>
                            <select
                                id="Price"
                                name="Price"
                                className="appearance-none mt-1 block w-full pl-1 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            >
                                <option value="$4000 - $8000">$4000 - $6000</option>
                                <option value="Chittagong">$6000 - $8000</option>
                                <option value="Sylhet">$8000 - $10000</option>
                            </select>
                        </div>

                        {/* search buttom  */}
                        <button className='rounded-[10px] justify-center bg-[#2E6EFF] text-white text-[16px] font-medium leading-normal flex gap-1 items-center p-4'><CiSearch className='text-2xl font-bold' /><span>Search</span></button>
                    </div>}
                    {sell && <div className='bg-white p-6  drop-shadow-[-10px_0px_50px_rgba(0,0,0,0.10)] flex flex-col lg:flex-row items-center justify-between gap-16 lg:absolute z-10 w-full lg:w-[67%]'>
                        {/* location  */}
                        <div className='lg:border-r-2 pr-5 border-[#E6E7E9]'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="location" className="text-[#030A1B] text-[16px] font-normal leading-normal">
                                    Location
                                </label>
                                <RiArrowDropDownLine className='text-2xl' />
                            </div>
                            <select
                                id="location"
                                name="location"
                                className="appearance-none mt-1 block w-full pl-1 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            >
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chittagong">Chittagong</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Khulna">Khulna</option>
                            </select>
                        </div>

                        {/* Property type  */}
                        <div className='pr-10 lg:border-r-2 border-[#E6E7E9]'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="Property type" className="text-[#030A1B] text-[16px] font-normal text-nowrap leading-normal">
                                    Property type
                                </label>
                                <RiArrowDropDownLine className='text-2xl' />
                            </div>
                            <select
                                id="location"
                                name="location"
                                className="appearance-none mt-1 block w-full pl-1 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            >
                                <option value="Duplex">Duplex</option>
                                <option value="Duplex 2">Duplex 2</option>
                                <option value="Duplex 3">Duplex 3</option>
                                <option value="Duplex 4">Duplex 4</option>
                                <option value="Duplex 5">Duplex 5</option>
                            </select>
                        </div>
                        {/* Price  */}
                        <div>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="Price" className="text-[#030A1B] text-[16px] font-normal leading-normal">
                                    Price
                                </label>
                                <RiArrowDropDownLine className='text-2xl' />
                            </div>
                            <select
                                id="Price"
                                name="Price"
                                className="appearance-none mt-1 block w-full pl-1 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            >
                                <option value="$4000 - $8000">$4000 - $6000</option>
                                <option value="Chittagong">$6000 - $8000</option>
                                <option value="Sylhet">$8000 - $10000</option>
                            </select>
                        </div>

                        {/* search buttom  */}
                        <button className='rounded-[10px] justify-center bg-[#2E6EFF] text-white text-[16px] font-medium leading-normal flex gap-1 items-center p-4'><CiSearch className='text-2xl font-bold' /><span>Search</span></button>
                    </div>}
                </div>

            </div>
            <div className='w-full lg:w-[45%]'>
                <Image src={'/images/hero.png'} height={100} width={650} alt='hero' className='w-full' />
            </div>
        </div>
    );
};

export default HeroSection;