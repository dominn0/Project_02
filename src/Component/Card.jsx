import React from "react";

const Card = ({ title, releaseDate, rating, image }) => {
  return (
    <div className="w-52 bg-white rounded-lg shadow-md overflow-hidden relative m-2 dark:bg-gray-600">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-72 object-cover" />
        <div className="absolute top-2 right-2 bg-yellow-500 bg-opacity-60 text-white px-3 py-1 rounded-full flex items-center">
          <span className="font-bold">{rating}</span>
        </div>
        <div className="absolute bottom-2 left-2 bg-green-500 bg-opacity-60 text-white px-3 py-1 rounded-full flex items-center">
          <span className="font-bold">HD</span>
        </div>
      </div>
      <div className="p-3 text-center">
        <h3 className="text-lg font-medium truncate dark:text-white">
          {title}
        </h3>
        <p className="text-gray-400 text-sm">{releaseDate}</p>
      </div>
    </div>
  );
};

export default Card;
