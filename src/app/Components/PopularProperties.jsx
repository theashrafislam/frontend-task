// "use client"


// import { useEffect, useState } from 'react';
import Card from './Card';

const PopularProperties = async () => {
    // const [data, setData] = useState(null);

    const response = await fetch('/data/JsonDataLD.json');
    const data = await response.json();

    // useEffect(() => {
    //     fetch('/data/JsonDataLD.json')
    //         .then((response) => response.json())
    //         .then((json) => setData(json))
    // }, [])

    if (!data) {
        return <p className='text-center text-2xl'>Loading...</p>
    }

    return (
        <div className='mb-36 mx-3'>
            <div className='flex justify-between items-center mb-[70px]'>
                <h1 className='text-[#030A1B] text-[28px] lg:text-[44px] font-semibold leading-normal'>Popular Properties</h1>
                <button className='text-[#FE753F]  text-[16px] font-semibold leading-normal text-nowrap'>View All</button>
            </div>

            {/* cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
                {
                    data?.mainEntity.map((card, index) =>
                        <Card card={card} key={index}/>
                    )
                }
            </div>

        </div >
    );
};

export default PopularProperties;