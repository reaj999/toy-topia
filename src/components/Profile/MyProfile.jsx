import React, { use, useState, useEffect} from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { updateProfile } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyProfile = () => {
  useEffect(() => {
    document.title = 'My Profile | Toy Topia';
  }, []);

  const { user } = use(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [currentPhoto, setCurrentPhoto] = useState(user?.photoURL || '');

  const handleUpdate = async (event) => {
    event.preventDefault();
    if (!user) return;

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });


      setCurrentPhoto(photoURL);

      toast.success('Profile updated successfully!');
    } catch (error) {
      console.error(error);
      toast.error(`Error updating profile: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center max-w-6xl mt-10 mx-auto">

      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={currentPhoto} alt="Profile" />
        </div>
      </div>


      <h2 className="text-2xl font-bold mt-4">{name}</h2>
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
        <button type="submit" className="btn btn-primary w-full">
          Update Profile
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default MyProfile;
