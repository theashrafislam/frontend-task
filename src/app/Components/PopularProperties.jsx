import Image from 'next/image';
import { IoIosBed, IoMdHeart } from "react-icons/io";
import { FaBath, FaLocationDot, FaUtensils } from "react-icons/fa6";

const PopularProperties = () => {
    return (
        <div className='mb-12'>
            <div className='flex justify-between items-center mb-[70px]'>
                <h1 className='text-[#030A1B] text-[44px] font-semibold leading-normal'>Popular Properties</h1>
                <button className='text-[#FE753F]  text-[16px] font-semibold leading-normal'>View All</button>
            </div>

            {/* cards */}
            <div className='grid grid-cols-3 gap-[30px]'>
                {/* card  */}
                <div className='rounded-[10px] bg-[#FFF] shadow-[0px_8px_70px_0px_rgba(0,0,0,0.07)]'>
                    <Image width={362} height={321} alt='card' className='w-full' src={'/images/card1.png'} />
                    <div className='p-[30px]'>
                        <h3 className='mb-[10px] text-[#030A1B] text-[22px] font-semibold leading-normal flex justify-between items-center'><span>Capital hill residence</span><IoMdHeart className='text-red-500' /></h3>
                        <p className='mb-[23px] flex gap-1 items-center text-[#030A1B] text-[16px] font-normal'><FaLocationDot /><span>East London</span></p>
                        <div className='mb-[23px] text-sm text-[#030A1B] flex items-center gap-5'>
                            <span className='flex items-center gap-1'><IoIosBed className='text-lg' /><span>6</span></span>
                            <span className='flex items-center gap-1'><FaUtensils className='text-lg' /><span>3</span></span>
                            <span className='flex items-center gap-1'><FaBath className='text-lg' /><span>2</span></span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-[#FE753F] text-[22px] font-semibold leading-normal'>$5527.00</p>
                            <button className='px-[20px] py-[10px] rounded-[5px] bg-[#2E6EFF] text-white'>View Details</button>
                        </div>
                    </div>
                </div>
                {/* card  */}
                <div className='rounded-[10px] bg-[#FFF] shadow-[0px_8px_70px_0px_rgba(0,0,0,0.07)]'>
                    <Image width={362} height={321} alt='card' className='w-full' src={'/images/card1.png'} />
                    <div className='p-[30px]'>
                        <h3 className='mb-[10px] text-[#030A1B] text-[22px] font-semibold leading-normal flex justify-between items-center'><span>Capital hill residence</span><IoMdHeart className='text-red-500' /></h3>
                        <p className='mb-[23px] flex gap-1 items-center text-[#030A1B] text-[16px] font-normal'><FaLocationDot /><span>East London</span></p>
                        <div className='mb-[23px] text-sm text-[#030A1B] flex items-center gap-5'>
                            <span className='flex items-center gap-1'><IoIosBed className='text-lg' /><span>6</span></span>
                            <span className='flex items-center gap-1'><FaUtensils className='text-lg' /><span>3</span></span>
                            <span className='flex items-center gap-1'><FaBath className='text-lg' /><span>2</span></span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-[#FE753F] text-[22px] font-semibold leading-normal'>$5527.00</p>
                            <button className='px-[20px] py-[10px] rounded-[5px] bg-[#2E6EFF] text-white'>View Details</button>
                        </div>
                    </div>
                </div>
                {/* card  */}
                <div className='rounded-[10px] bg-[#FFF] shadow-[0px_8px_70px_0px_rgba(0,0,0,0.07)]'>
                    <Image width={362} height={321} alt='card' className='w-full' src={'/images/card1.png'} />
                    <div className='p-[30px]'>
                        <h3 className='mb-[10px] text-[#030A1B] text-[22px] font-semibold leading-normal flex justify-between items-center'><span>Capital hill residence</span><IoMdHeart className='text-red-500' /></h3>
                        <p className='mb-[23px] flex gap-1 items-center text-[#030A1B] text-[16px] font-normal'><FaLocationDot /><span>East London</span></p>
                        <div className='mb-[23px] text-sm text-[#030A1B] flex items-center gap-5'>
                            <span className='flex items-center gap-1'><IoIosBed className='text-lg' /><span>6</span></span>
                            <span className='flex items-center gap-1'><FaUtensils className='text-lg' /><span>3</span></span>
                            <span className='flex items-center gap-1'><FaBath className='text-lg' /><span>2</span></span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-[#FE753F] text-[22px] font-semibold leading-normal'>$5527.00</p>
                            <button className='px-[20px] py-[10px] rounded-[5px] bg-[#2E6EFF] text-white'>View Details</button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default PopularProperties;