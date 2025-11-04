import React, { use, useContext, useState} from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { updateProfile } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';


const MyProfile = () => {

    const {user}= use(AuthContext);
    const photo = user?.photoURL || '';

    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [message, setMessage] = useState('');


    const handleUpdate = async (event) => {
        event.preventDefault();
        if(!user) return;

        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL,
            });

            setMessage('Profile updated successfully');
        } catch (error) {
            setMessage(`Error updating profile: ${error.message}`);
        }   
        }
    

    return (
        <div className="flex flex-col items-center max-w-6xl mt-10 mx-auto" >
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={photo} alt=""/>
                </div>
            </div>
            <h2 className="text-2xl font-bold mt-4">{user?.displayName}</h2>
            <p className="text-gray-600 mt-2">{user?.email}</p>

            <form onSubmit={handleUpdate} className="mt-6 flex flex-col gap-4 w-72">
                <input
                    type="text"
                    placeholder="Enter new name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered w-full"
                />
                <input
                    type="text"
                    placeholder="Enter new photo URL"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    className="input input-bordered w-full"
                />
                <button
                    type="submit"
                    className="btn btn-primary w-full"
                >
                    Update Profile
                </button>
            </form>

            {message && (
                <p className="mt-4 text-sm text-center text-green-600 font-semibold">
                    {message}
                </p>
            )}
        </div>
    );
};

export default MyProfile;