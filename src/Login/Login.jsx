import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
            <div className='flex justify-center items-center pt-20'>
                <form>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend text-2xl font-bold text-center">Login</legend>

                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

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