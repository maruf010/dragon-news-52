import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("");
    const { signIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password });

        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);

                navigate(`${location.state ? location.state : '/'}`)

                alert('Login Successfully')
            })
            .catch((error) => {
                const errorMessage = error.message;
                // console.log(errorMessage);
                // alert(errorMessage)
                setError(errorMessage)
            });

    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-2xl font-semibold text-center '>Login your Account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email"
                            name='email' className="input" placeholder="Email"
                            required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password"
                            name='password' className="input" placeholder="Password"
                            required />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {error && <p className='text-red-500'>{error}</p>}
                        <button type='submit' className="btn btn-neutral mt-2">Login</button>
                    </fieldset>
                    <p className='text-center'>Don't Have An Account ? <Link to='/auth/register' className='text-secondary font-semibold'> Register</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;