import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const HeroSection = () => {
    return (
        <div className='mb-10'>
            <div>
                <h1 className='text-[#030A1B] text-[61px] not-italic font-semibold leading-[120%]'>Find the perfect <br /> place to stay with <br /> your family</h1>
                <p className='text-[#030A1B] text-[18px] not-italic font-medium leading-[27px] mt-7'>Buying a home is a life-changing experience, so shouldn’t <br /> your real estate agent be a life changer.</p>
                <div className='mt-10'>
                    {/* tabs  */}
                    <div className='shadow-2xl bg-white p-6 flex items-center gap-11 w-64 drop-shadow-[0px_10px_100px_rgba(0,0,0,0.10)] h-12'>
                        <p className='text-lg font-medium hover:font-semibold hover:text-[#FE753F] text-[#030A1B] cursor-pointer'>Buy</p>
                        <p className='text-lg font-medium hover:font-semibold hover:text-[#FE753F] text-[#030A1B] cursor-pointer'>Rent</p>
                        <p className='text-lg font-medium hover:font-semibold hover:text-[#FE753F] text-[#030A1B] cursor-pointer'>Sell</p>
                    </div>
                    {/* filter */}
                    <div className='bg-white p-6 shadow-2xl flex items-center gap-10'>
                        {/* location  */}
                        <div>
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
                        <div>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="Property type" className="text-[#030A1B] text-[16px] font-normal leading-normal">
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
                        <button><CiSearch />Search</button>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default HeroSection;