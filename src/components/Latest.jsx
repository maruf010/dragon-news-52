import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='flex items-center bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee pauseOnHover={true} speed={70}>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sed. Temporibus obcaecati, </p>
            </Marquee>
        </div>
    );
};

export default Latest;