"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa6';

const Reviews = () => {
    return (
        <div className='mt-[140px]'>
            <div className='mb-[70px]'>
                <p className="text-[#FE753F] text-[16px] font-semibold tracking-[1.28px] mb-[10px] text-center">Reviews</p>
                <h1 className='text-[#030A1B] text-[30px] lg:text-[44px] font-semibold text-center'>Our valuable customer says</h1>
            </div>
            <div>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {[1, 2, 3].map((slide, index) =>
                        <SwiperSlide key={index}>
                            <div className='py-10 flex flex-col lg:flex-row mx-3 lg:mx-0 items-center gap-[30px]'>
                                <div className='p-[30px] rounded-[10px] border-2 border-[rgba(254,117,63,0.10)]'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-[30px]'>
                                            <Image width={100} height={100} alt='hello' src={'/images/review1.png'} />
                                            <div>
                                                <h3 className='text-[#030A1B] text-[22px] font-semibold'>Justin Lee</h3>
                                                <p className="text-[#030A1B] text-[16px]">Products Designer at Ito</p>
                                            </div>
                                        </div>
                                        <div>
                                        <FaQuoteRight  className="text-7xl text-gray-300"/>
                                        </div>
                                    </div>
                                    <p className="text-[#030A1B] text-[16px] opacity-70 mt-[30px]">A good real estate agent doesn’t disappear once the closing IN signed.Buying a bigger home doesn’t necessarily mean spendi more money.Been there. Done that. Sold. Bought
                                        Bringing It All Together.</p>
                                </div>
                                <div className='p-[30px] rounded-[10px] border-2 border-[rgba(254,117,63,0.10)]'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-[30px]'>
                                            <Image width={100} height={100} alt='hello' src={'/images/review2.png'} />
                                            <div>
                                                <h3 className='text-[#030A1B] text-[22px] font-semibold'>Angel Cathe</h3>
                                                <p className="text-[#030A1B] text-[16px]">Products Designer at Ito</p>
                                            </div>
                                        </div>
                                        <div>
                                        <FaQuoteRight  className="text-7xl text-gray-300"/>
                                        </div>
                                    </div>
                                    <p className="text-[#030A1B] text-[16px] opacity-70 mt-[30px]">A good real estate agent doesn’t disappear once the closing IN signed.Buying a bigger home doesn’t necessarily mean spendi more money.Been there. Done that. Sold. Bought
                                        Bringing It All Together.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}

                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;