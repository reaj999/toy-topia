import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const Login = () => {

    const [showPassword, setShowPassword] = useState(false);


    const { signInUser, signInWithGoogle } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

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
                navigate(location.state || '/');
            })
            .catch((error) => {
                console.error(error);
            });

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(location.state || '/');
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const togglePasswordVisibility = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <div className='flex justify-center items-center pt-20'>
            <form onSubmit={handleLogin}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-2xl font-bold text-center">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input" name="email" placeholder="Email" id='email' />


                    <div className='relative'>
                        <label className="label">Password</label>
                        <input type={showPassword ? 'text' : 'password'} className="input" name="password" placeholder="Password" />
                        <button className="btn btn-xs absolute right-2 bottom-2 border-none" type='button' onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <button className="btn btn-neutral mt-4">Login</button>

                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] mt-2">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                    <div className="text-center mt-3">
                        <Link
                            to="/forgotPassword"
                            className="link link-primary"
                            onClick={(event) => {
                                const email = document.getElementById('email').value;
                                if (!email) return;
                                navigate('/forgotPassword', { state: { email } });
                                event.preventDefault();
                            }}
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <p className="text-center mt-4">
                        Not Registered yet? <Link to="/Register" className="link link-primary">Register now</Link>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;