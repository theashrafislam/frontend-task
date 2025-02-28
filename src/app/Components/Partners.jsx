import Image from 'next/image';
import React from 'react';

const Partners = () => {
    return (
        <div className='mt-24 mb-36'>
            <h1 className='text-[#030A1B] text-[30px] lg:text-[44px] font-semibold text-center mb-16'>Our Partners</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center'>
                <Image width={120} height={50} alt='Partner 1' src={'/images/1.png'} />
                <Image width={120} height={50} alt='Partner 2' src={'/images/2.png'} />
                <Image width={120} height={50} alt='Partner 3' src={'/images/3.png'} />
                <Image width={120} height={50} alt='Partner 4' src={'/images/4.png'} />
                <Image width={120} height={50} alt='Partner 5' src={'/images/5.png'} />
            </div>
        </div>
    );
};

export default Partners;