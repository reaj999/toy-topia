import React from "react";
import { useParams } from "react-router";
import Data from "../../../public/Data.json";
import { MdStarRate } from "react-icons/md";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToyDetailed = () => {
    const { toyId } = useParams();
    const toy = Data.find((item) => item.toyId === parseInt(toyId));

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    if (!toy) {
        return <h2 className="text-center mt-10 text-xl">Toy not found!</h2>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email) {
            toast.success(`Thank you, ${name}! We’ll contact you soon about "${toy.toyName}".`);
            setName("");
            setEmail("");
        } else {
            toast.warning(" Please fill out both fields before submitting.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 bg-base-100 p-8 shadow-md rounded-lg mb-8">
            <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-96 object-cover rounded-xl mb-6"
            />
            <h2 className="text-3xl font-bold mb-4">{toy.toyName}</h2>
            <p className="text-lg mb-2">
                <strong>Seller:</strong> {toy.sellerName} ({toy.sellerEmail})
            </p>
            <p className="text-lg mb-2">
                <strong>Category:</strong> {toy.subCategory}
            </p>
            <p className="text-lg mb-2">
                <strong>Price:</strong> ${toy.price}
            </p>
            <p className="text-lg mb-2">
                <div className="flex items-center gap-1">
                    <strong>Rating:</strong> <MdStarRate /> {toy.rating}
                </div>
            </p>
            <p className="text-lg mb-4">
                <strong>Available:</strong> {toy.availableQuantity} pcs
            </p>
            <p className="text-gray-700">{toy.description}</p>

            <div className="bg-gray-50 p-6 rounded-lg shadow-inner mt-10 mb-10">
                <h3 className="text-2xl font-semibold mb-4 text-center">Try Now</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input input-bordered w-full"
                    />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full"
                    />
                    <button type="submit" className="btn btn-primary w-full">
                        Try Now
                    </button>
                </form>  
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        </div>
    );
};

export default ToyDetailed;
