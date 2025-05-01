import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login with</h2>
            <div className='space-y-4 gap-3'>
                <button className='btn btn-outline  w-full btn-secondary'><FcGoogle size={20} /> Login With Google</button>
                <button className='btn w-full btn-outline btn-primary'><FaGithub size={20} /> 
                Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;