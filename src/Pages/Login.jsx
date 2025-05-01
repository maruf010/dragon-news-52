import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { signIn } = use(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password });

        signIn(email,password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);
                
                alert('Login Successfully')
            })
            .catch((error) => {
                const errorMessage = error.message;
                // console.log(errorMessage);
                alert(errorMessage)
                
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
                            name='email' className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password"
                            name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='text-center'>Don't Have An Account ? <Link to='/auth/register' className='text-secondary font-semibold'> Register</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;