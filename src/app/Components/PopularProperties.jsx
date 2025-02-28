"use client"

import Image from 'next/image';
import { IoIosBed, IoMdHeart } from "react-icons/io";
import { FaBath, FaLocationDot, FaUtensils } from "react-icons/fa6";
import { useEffect, useState } from 'react';

const PopularProperties = () => {
    const [data, setData] = useState(null);


    useEffect(() => {
        fetch('/data/JsonDataLD.json')
            .then((response) => response.json())
            .then((json) => setData(json))
    }, [])

    if (!data) {
        return <p className='text-center text-2xl'>Loading...</p>
    }

    return (
        <div className='mb-36'>
            <div className='flex justify-between items-center mb-[70px]'>
                <h1 className='text-[#030A1B] text-[44px] font-semibold leading-normal'>Popular Properties</h1>
                <button className='text-[#FE753F]  text-[16px] font-semibold leading-normal'>View All</button>
            </div>

            {/* cards */}
            <div className='grid grid-cols-3 gap-[30px]'>
                {
                    data?.mainEntity.map((card, index) =>
                        <div key={index} className='rounded-[10px] bg-[#FFF] shadow-[0px_8px_70px_0px_rgba(0,0,0,0.07)]'>
                            <Image width={362} height={321} alt={card?.image} className='w-full' src={card?.image} />
                            <div className='p-[30px]'>
                                <h3 className='mb-[10px] text-[#030A1B] text-[22px] font-semibold leading-normal flex justify-between items-center'><span>{card?.name}</span><IoMdHeart className={`${card?.favorite ? 'text-red-500' : 'text-gray-400'}`} /></h3>
                                <p className='mb-[23px] flex gap-1 items-center text-[#030A1B] text-[16px] font-normal'><FaLocationDot /><span>{card?.address?.addressLocality}</span></p>
                                <div className='mb-[23px] text-sm text-[#030A1B] flex items-center gap-5'>
                                    <span className='flex items-center gap-1'><IoIosBed className='text-lg' /><span>{card?.numberOfBedrooms}</span></span>
                                    <span className='flex items-center gap-1'><FaUtensils className='text-lg' /><span>{card?.numberOfBathroomsTotal}</span></span>
                                    <span className='flex items-center gap-1'><FaBath className='text-lg' /><span>{card?.floorSize}</span></span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='text-[#FE753F] text-[22px] font-semibold leading-normal'>{card?.price}</p>
                                    <button className='px-[20px] py-[10px] rounded-[5px] bg-[#2E6EFF] text-white'>View Details</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div >
    );
};

export default PopularProperties;