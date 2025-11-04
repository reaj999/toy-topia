import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const MyProfile = () => {

    const {user}= use(AuthContext);
    const photo = user?.photoURL || '';
    

    return (
        <div className="flex flex-col items-center max-w-6xl mt-10 mx-auto" >
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={photo} alt=""/>
                </div>
            </div>
            <h2 className="text-2xl font-bold mt-4">{user?.displayName}</h2>
            <p className="text-gray-600 mt-2">{user?.email}</p>
            
        </div>
    );
};

export default MyProfile;