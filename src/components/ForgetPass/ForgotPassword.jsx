import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

const ForgotPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (location?.state?.email) {
            setEmail(location.state.email);
        }
    }, [location]);

    const handleReset = (event) => {
        event.preventDefault();
        window.location.href = 'https://mail.google.com/';
    };

    return (
        <div className='flex justify-center items-center pt-20'>
            <form onSubmit={handleReset} aria-label="Forgot password form">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-2xl font-bold text-center">Forgot Password</legend>

                    <label className="label" htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />

                    <button className="btn btn-neutral mt-4 w-full" type="submit">
                        Reset Password
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default ForgotPassword;
