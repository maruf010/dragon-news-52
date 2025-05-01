import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='mt-5 flex justify-center items-center flex-col gap-3'>
            <img className='w-96' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(),'EEEE- MMMM MM- yyyy')}</p>
            <div>
                
            </div>
        </div>
    );
};

export default Header;