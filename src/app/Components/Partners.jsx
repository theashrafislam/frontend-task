import Image from 'next/image';
import React from 'react';

const Partners = () => {
    return (
        <div className='mt-24 mb-36'>
            <h1 className='text-[#030A1B] text-[44px] font-semibold text-center mb-16'>Our Partners</h1>
            <div className='flex items-center justify-between'>
                <Image width={120} height={50} alt='hello' src={'/images/1.png'}/>
                <Image width={120} height={50} alt='hello' src={'/images/2.png'}/>
                <Image width={120} height={50} alt='hello' src={'/images/3.png'}/>
                <Image width={120} height={50} alt='hello' src={'/images/4.png'}/>
                <Image width={120} height={50} alt='hello' src={'/images/5.png'}/>
            </div>
        </div>
    );
};

export default Partners;