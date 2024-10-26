import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RatingMovies = () => {
  const ratingHistory = useSelector((state) => state.movie.ratingHistory);

  return (
    <div className="dark:bg-black dark:text-white text-black">
      <h2 className="text-xl font-bold mb-4 m-5">RATING HISTORY</h2>
      {ratingHistory.length > 0 ? (
        <ul className="space-y-4">
          {ratingHistory.map((rating) => (
            <li
              key={rating.movieId} // Gunakan movieId sebagai kunci
              className="flex items-center bg-gray-100 dark:bg-slate-800 m-10 p-4 rounded-lg shadow-md"
            >
              <Link to={`/detail/${rating.movieId}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${rating.poster_path}`}
                  alt="Poster"
                  className="w-16 h-24 object-cover rounded-md mr-4"
                />
              </Link>
              <div>
                <p className="text-lg font-semibold">{`Rating: ${rating.value} ⭐`}</p>
                <p className="text-gray-600">{`Film ID: ${rating.movieId}`}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">Belum ada rating.</p>
      )}
    </div>
  );
};

export default RatingMovies;
