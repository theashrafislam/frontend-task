"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                <g opacity="0.1" clipPath="url(#clip0_1_75)">
                                                    <path d="M38.2887 49.0102C36.6882 49.6814 36.017 51.5917 36.7398 53.1405L39.2696 58.4583C39.9924 59.9551 41.7478 60.6268 43.2967 59.9551C47.6852 58.0964 51.4541 55.6698 54.4486 52.727C58.1143 49.2683 60.5925 45.2929 61.9348 40.9044C63.2772 36.4638 64 30.4237 64 22.731L64 6.88083C64 5.17706 62.606 3.78308 60.9023 3.78308L40.612 3.78308C38.9082 3.78308 37.5143 5.17706 37.5143 6.88082L37.5142 27.1711C37.5142 28.8754 38.9082 30.2688 40.612 30.2688L50.3183 30.2688C50.215 35.4839 48.9759 39.6653 46.7042 42.8152C44.8456 45.344 42.0576 47.4092 38.2887 49.0102Z" fill="#2E6EFF" />
                                                    <path d="M1.83712 49.0093C0.236615 49.6805 -0.434047 51.5908 0.288245 53.1397L2.81807 58.4053C3.54088 59.9026 5.29627 60.5737 6.84515 59.9026C11.182 58.0439 14.8998 55.6173 17.9454 52.7261C21.6116 49.2153 24.1409 45.2399 25.4838 40.8514C26.8261 36.5151 27.4968 30.474 27.4968 22.7296L27.4968 6.87943C27.4968 5.17567 26.1028 3.78168 24.3991 3.78168L4.10881 3.78168C2.40504 3.78168 1.01106 5.17567 1.01106 6.87943L1.01106 27.1697C1.01106 28.874 2.40504 30.2674 4.1088 30.2674L13.8667 30.2674C13.7634 35.4825 12.5238 39.6639 10.2527 42.8138C8.39402 45.3431 5.60605 47.4083 1.83712 49.0093Z" fill="#2E6EFF" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_75">
                                                        <rect width="64" height="64" fill="white" transform="translate(64 64) rotate(-180)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                <g opacity="0.1" clipPath="url(#clip0_1_75)">
                                                    <path d="M38.2887 49.0102C36.6882 49.6814 36.017 51.5917 36.7398 53.1405L39.2696 58.4583C39.9924 59.9551 41.7478 60.6268 43.2967 59.9551C47.6852 58.0964 51.4541 55.6698 54.4486 52.727C58.1143 49.2683 60.5925 45.2929 61.9348 40.9044C63.2772 36.4638 64 30.4237 64 22.731L64 6.88083C64 5.17706 62.606 3.78308 60.9023 3.78308L40.612 3.78308C38.9082 3.78308 37.5143 5.17706 37.5143 6.88082L37.5142 27.1711C37.5142 28.8754 38.9082 30.2688 40.612 30.2688L50.3183 30.2688C50.215 35.4839 48.9759 39.6653 46.7042 42.8152C44.8456 45.344 42.0576 47.4092 38.2887 49.0102Z" fill="#2E6EFF" />
                                                    <path d="M1.83712 49.0093C0.236615 49.6805 -0.434047 51.5908 0.288245 53.1397L2.81807 58.4053C3.54088 59.9026 5.29627 60.5737 6.84515 59.9026C11.182 58.0439 14.8998 55.6173 17.9454 52.7261C21.6116 49.2153 24.1409 45.2399 25.4838 40.8514C26.8261 36.5151 27.4968 30.474 27.4968 22.7296L27.4968 6.87943C27.4968 5.17567 26.1028 3.78168 24.3991 3.78168L4.10881 3.78168C2.40504 3.78168 1.01106 5.17567 1.01106 6.87943L1.01106 27.1697C1.01106 28.874 2.40504 30.2674 4.1088 30.2674L13.8667 30.2674C13.7634 35.4825 12.5238 39.6639 10.2527 42.8138C8.39402 45.3431 5.60605 47.4083 1.83712 49.0093Z" fill="#2E6EFF" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_75">
                                                        <rect width="64" height="64" fill="white" transform="translate(64 64) rotate(-180)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
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