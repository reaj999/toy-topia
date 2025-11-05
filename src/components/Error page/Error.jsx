import React from 'react';
import { useEffect } from 'react';

const Error = () => {
        useEffect(() => {
        document.title = 'Error Page | Toy Topia';
        }, []);
    return (
        <div className='flex items-center justify-center flex-col pt-20'>
            <h1 className='text-4xl font-bold text-center align-middle'>404 Error! <br/>Page Not Found</h1>
        </div>
    );
};

export default Error;