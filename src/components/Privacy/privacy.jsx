import React from 'react';
import { useEffect } from 'react';

const Privacy = () => {

        useEffect(() => {
        document.title = 'Privacy Policy | Toy Topia';
        }, []);

    return (

        <div className='flex items-center justify-center flex-col pt-20'>
            <div className="max-w-4xl md:mx-auto ml-2 mr-2 p-6 bg-white rounded-lg shadow-md mt-10 items-center ">
            <h1 className="text-2xl font-bold mb-4 text-center">Privacy Policy</h1>
            <p className='text-xl text-center'>This is the Privacy Policy page.</p>
        </div>
        </div>
        
    );
};

export default Privacy;