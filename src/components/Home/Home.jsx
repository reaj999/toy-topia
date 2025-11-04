import React, { use } from 'react';
import Slider from '../slider/slider';
import { AuthContext } from '../../Context/AuthContext.jsx';

const Home = () => {
    const authInfo = use(AuthContext);
    console.log(authInfo);
    return (
        <>
            <Slider />

        </>
    );
};

export default Home;