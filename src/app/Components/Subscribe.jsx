import React from 'react';

const Subscribe = () => {
    return (
        <div className='bg-[#433E89] rounded-xl mt-12 mx-3 lg:mx-0'>
            <div className='py-[70px]'>
                <h1 className="text-white text-center font-poppins text-[30px] lg:text-[44px] font-medium leading-[60px] mb-[15px]">Get listed your home as  a owner</h1>
                <p className='text-white text-center font-poppins mx-2 lg:mx-2 text-[16px] font-normal mb-[70px] opacity-70'>Here is a list of the greatest real estate company slogans of all-time. These <br /> catchy slogans are followed by the Greatest Real Estate.</p>
                <div className='flex items-center justify-center'>
                    <div className='bg-white p-[7px] w-[95%] lg:w-[70%] flex items-center flex-col gap-3 lg:gap-0 lg:flex-row'>
                        <input type="text" id="email" placeholder="Enter email address" className="p-4 w-full" name="email" />
                        <button className='py-4 px-10 text-white text-base bg-[#2E6EFF] rounded-[10px] w-full lg:w-min'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;