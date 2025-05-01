import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userPic from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';
import { BsListNested } from 'react-icons/bs';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogout = () => {
        // console.log('hygsfysdgf');
        logOut()
            .then(() => {
                alert('LogOut Successfully')
            })
            .catch((error) => {
                console.log(error);
                
            })
    };
    
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.email}</div>
            <div className='nav flex gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex gap-5'>
                <img src={userPic} alt="" />
                {user ?
                    <button onClick={handleLogout} className='btn btn-primary px-8'>Logout</button>
                    :
                    <Link to='/auth/login' className='btn btn-secondary px-8'>
                        Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;