import React, { use, useEffect } from 'react';
import Slider from '../slider/slider';
import { AuthContext } from '../../Context/AuthContext.jsx';
import Data from '../../../public/Data.json';
import { Link } from 'react-router';

const toy = Data;


const Home = () => {
    useEffect(() => {
        document.title = 'Home | Toy Topia';
    }, []);
    const authInfo = use(AuthContext);
    console.log(authInfo);
    return (
        <>
            <Slider />
            <div>
                <div>
                    <h2 className="text-3xl font-bold text-center my-8">Popular Toys</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pb-8 justify-items-center">
                        {toy.sort((a, b) => b.rating - a.rating).slice(0, 6).map(toy => (
                            <div key={toy.toyId} className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <img
                                        src={toy.pictureURL}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {toy.toyName}
                                        <div className="badge badge-primary">{'$' + toy.price}</div>
                                    </h2>
                                    <p>{toy.description}</p>
                                    <div className="card-actions justify-between mt-4 items-center">
                                        <div>
                                            <Link to={`/toys/${toy.toyId}`}>
                                                <button className="btn btn-primary">View Details</button></Link>

                                        </div>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">{toy.rating}</div>
                                            <div className="badge badge-outline">{toy.availableQuantity}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-center my-8">Affordable Toys</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pb-8 justify-items-center">
                        {toy.sort((a, b) => a.price - b.price).slice(0, 3).map(toy => (
                            <div key={toy.toyId} className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <img
                                        src={toy.pictureURL}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {toy.toyName}
                                        <div className="badge badge-primary">{'$' + toy.price}</div>
                                    </h2>
                                    <p>{toy.description}</p>
                                    <div className="card-actions justify-between mt-4 items-center">
                                        <div>
                                            <Link to={`/toys/${toy.toyId}`}>
                                                <button className="btn btn-primary">View Details</button></Link>

                                        </div>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">{toy.rating}</div>
                                            <div className="badge badge-outline">{toy.availableQuantity}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-center my-8">Limited toys</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pb-8 justify-items-center">
                        {toy.sort((a, b) => a.availableQuantity - b.availableQuantity).slice(0, 3).map(toy => (
                            <div key={toy.toyId} className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <img
                                        src={toy.pictureURL}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {toy.toyName}
                                        <div className="badge badge-primary">{'$' + toy.price}</div>
                                    </h2>
                                    <p>{toy.description}</p>
                                    <div className="card-actions justify-between mt-4 items-center">
                                        <div>
                                            <Link to={`/toys/${toy.toyId}`}>
                                                <button className="btn btn-primary">View Details</button></Link>

                                        </div>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">{toy.rating}</div>
                                            <div className="badge badge-outline">{toy.availableQuantity}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;