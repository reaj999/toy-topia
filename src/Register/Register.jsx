//import { createUserWithEmailAndPassword} from 'firebase/auth';
//import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
//import auth from '../Firebase/firebase.init';
import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext.jsx';

function Register() {

    const {createUser} = use(AuthContext);


        const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            console.error(error);
        });
    }


    // const handleRegister = (event) => {
    //     event.preventDefault();
    //     const name = event.target.name.value;
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     console.log('Registering user:', { name, email, password });

    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             const user = userCredential.user;
    //             console.log('User registered successfully:', user);
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.error('Error registering user:', errorCode, errorMessage);
    //         });


    // };


    return (
        <div className='flex justify-center items-center pt-20'>
            <form onSubmit={handleRegister}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-2xl font-bold text-center">Registration</legend>

                    <label className="label">Name</label>
                    <input type="name" name='name' className="input" placeholder="name" />

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Register</button>

                    <p className="text-center mt-4">
                        Already Registered? <Link to="/Login" className="link link-primary">Login now</Link>
                    </p>
                </fieldset>
            </form>
        </div>
    );
}

export default Register;