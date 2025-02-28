import React from 'react';

const Subscribe = () => {
    return (
        <div className='bg-[#433E89] rounded-xl mt-12'>
            <div className='py-[70px]'>
                <h1 className="text-white text-center font-poppins text-[44px] font-medium leading-[60px] mb-[15px]">Get listed your home as  a owner</h1>
                <p className='text-white text-center font-poppins text-[16px] font-normal mb-[70px] opacity-70'>Here is a list of the greatest real estate company slogans of all-time. These <br /> catchy slogans are followed by the Greatest Real Estate.</p>
                <div className='flex items-center justify-center'>
                    <div className='bg-white p-[7px] w-[70%] flex items-center'>
                        <input type="text" name="" id="" placeholder='Enter email address' className='p-4 w-full'/>
                        <button className='py-4 px-10 text-white text-base bg-[#2E6EFF] rounded-[10px]'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;