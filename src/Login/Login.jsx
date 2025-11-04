import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {

    const {signInUser} = use(AuthContext);
    
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signInUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            event.target.reset();
        })
        .catch((error) => {
            console.error(error);
        });

    }


    return (
            <div className='flex justify-center items-center pt-20'>
                <form onSubmit={handleLogin}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend text-2xl font-bold text-center">Login</legend>

                        <label className="label">Email</label>
                        <input type="email" className="input" name="email" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" className="input" name="password" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Login</button>

                        <p className="text-center mt-4">
                            Not Registered yet? <Link to="/Register" className="link link-primary">Register now</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
    );
};

export default Login;