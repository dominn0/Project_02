import React from "react";
import Card from "../../Component/Card.jsx";
import { Link } from "react-router-dom";

const BerandaView = ({ ubahSearch, hasilFilter, upcoming, movies }) => {
  return (
    <div className="min-h-screen dark:bg-black">
      <div className="mx-auto py-1 px-8">
        {/* hero */}
        <div className="relative w-full h-[700px] overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/67vbA5ZJdKQ?autoplay=1&loop=1&playlist=67vbA5ZJdKQ&mute=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Trailer"
          ></iframe>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
            <h1 className="text-5xl font-bold text-white">The Wild Robot</h1>
            <p className="mt-2 text-lg text-gray-300 max-w-md">
              After a shipwreck, an intelligent robot called Roz is stranded on
              an uninhabited island. To survive the harsh environment, Roz bonds
              with the island's animals and cares for an orphaned baby goose.
            </p>
            <div className="mt-4 flex">
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 mr-2">
                Detail
              </button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">
                +My List
              </button>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="search-container mt-4">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              onChange={(input) => ubahSearch(input.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        {/* Popular */}
        <h3 className="font-bold text-3xl p-4 dark:text-white">POPULAR</h3>
        <div className="Card flex flex-wrap w-full">
          {(hasilFilter.length > 0 ? hasilFilter : movies).map((item) => (
            <div key={item.id} className="m-2">
              <Link to={"/detail/" + item.id}>
                <Card
                  title={item.title}
                  releaseDate={item.release_date}
                  rating={item.vote_average}
                  image={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Upcoming Section */}
        <h3 className="font-bold text-3xl p-4 dark:text-white">UP COMING</h3>
        <div className="Card flex gap-4 overflow-x-auto w-full pb-4 bg-img">
          {upcoming.map((item) => (
            <div key={item.id} className="min-w-[200px]">
              <Link to={"/detail/" + item.id}>
                <Card
                  title={item.title}
                  releaseDate={item.release_date}
                  rating={item.vote_average}
                  image={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BerandaView;
