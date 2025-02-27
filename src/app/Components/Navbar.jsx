import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            {/* logo  */}
            <div>
                <Image src={'/images/logo.png'} width={'100'} height={'100'} alt='hello'/>
            </div>

            {/* routes */}
            <div>
                <ul>
                    <li className='text-red-500'>Home</li>
                    <li>Properties</li>
                    <li>About us</li>
                    <li>Blog</li>
                    <button>Contact us</button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;