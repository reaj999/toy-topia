import React from 'react';
import Data from '../../../public/Data.json';
import { Link } from 'react-router';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';



const Toys = () => {
    const toys = Data;

    useEffect(() => {
    document.title = 'All Toys | Toy Topia';
    }, []);

    console.log(toys);
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-6 mb-8">All Toys</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pb-8 justify-items-center">
                {toys.map(toy => (
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
    );
};

export default Toys;