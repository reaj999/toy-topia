import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
//import auth from '../Firebase/firebase.init';
import { AuthContext } from '../Context/AuthContext.jsx';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function Register() {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const notify = () => toast("Registration Successful!");

    const { createUser, signInWithGoogle } = use(AuthContext);
    const navigate = useNavigate();



    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                const target = location?.state?.from?.pathname || '/';
                navigate(target);
            })
            .catch((error) => {
                console.error(error);
            });
    }


    const handleRegister = (event) => {
        setError('');
        setSuccess(false);
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const passPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!passPattern.test(password)) {
            setError('Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter');
            return;
        }

        createUser(email, password, photoURL, name)
            .then(async (result) => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                notify();
               
                try {
                    await signOut(auth);
                } catch (signOutErr) {
                    console.warn('Sign-out after register failed:', signOutErr);
                }

                event.target.reset();

                navigate('/login');
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
            });
    }



    return (
        <div className='flex justify-center items-center pt-20'>
            <form onSubmit={handleRegister}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-2xl font-bold text-center">Registration</legend>

                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="name" />

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label">Photo URL</label>
                    <input type="url" name='photoURL' className="input" placeholder="Photo URL" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Register</button>

                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] mt-2">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                    <p className="text-center mt-4">
                        Already Registered? <Link to="/Login" className="link link-primary">Login now</Link>
                    </p>
                </fieldset>

                {
                    error && <p className="text-red-500 mt-2">{error}</p>
                }
            </form>
        </div>
    );
}

export default Register;