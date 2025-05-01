import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setCreateUser, updateUser } = use(AuthContext);
    const [nameError, setNameError] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target.name.value);
        const form = e.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError('Name should be more then 5 character!')
            return;
        }
        else {
            setNameError("")
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ name, photo, email, password });

        //auth Provider
        createUser(email, password)
            .then(res => {
                const user = res.user;
                // console.log(user);
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setCreateUser({...user, displayName: name, photoURL: photo});
                    navigate("/");
                    // alert('account create successfully')
                })
                    .catch((error) => {
                        const errorMessage = error.message;
                        console.log(errorMessage);
                        // setCreateUser(user)
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-2xl font-semibold text-center '>Register your Account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text"
                            name='name' className="input" placeholder="Your name"
                            required />

                        {nameError && <p className='text-red-500 mb-2'>{nameError}</p>}

                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input type="text"
                            name='photo'
                            className="input" placeholder="Photo URL" required />
                        {/* email */}
                        <label className="label">E-mail</label>
                        <input type="email"
                            name='email'
                            className="input" placeholder="Email" required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password"
                            name='password'
                            className="input"
                            placeholder="Password" required />

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>

                    <p className='text-center'>Have  already account? Please  <Link to='/auth/login' className='text-secondary font-semibold'> Login</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;