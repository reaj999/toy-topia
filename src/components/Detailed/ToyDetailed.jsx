import React from "react";
import { useParams } from "react-router";
import Data from "../../../public/Data.json";

const ToyDetailed = () => {
  const { toyId } = useParams();
  const toy = Data.find((item) => item.toyId === parseInt(toyId));

  if (!toy) {
    return <h2 className="text-center mt-10 text-xl">Toy not found!</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-base-100 p-8 shadow-md rounded-lg">
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
        <strong>Rating:</strong> ⭐ {toy.rating}
      </p>
      <p className="text-lg mb-4">
        <strong>Available:</strong> {toy.availableQuantity} pcs
      </p>
      <p className="text-gray-700">{toy.description}</p>
    </div>
  );
};

export default ToyDetailed;
